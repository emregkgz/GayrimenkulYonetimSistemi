import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";

import FormMusteri from "../../components/pageContext/musteriYonetimi/form_Musteri";
function FormMusteriApp(props) {
  const { getCityList, getFlatType, getIncomeTypeList, getGenderList } = props;
  return (
    <>
      <Header />
      <Menu />
      <FormMusteri
        getCityList={getCityList}
        getFlatType={getFlatType}
        getIncomeTypeList={getIncomeTypeList}
        getGenderList={getGenderList}
      />
      <Footer />
    </>
  );
}

export default FormMusteriApp;
