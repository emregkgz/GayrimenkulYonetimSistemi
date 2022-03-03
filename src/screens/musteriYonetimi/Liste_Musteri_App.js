import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";
import ListeMusteri from "../../components/pageContext/musteriYonetimi/liste_Musteri";

function ListeMusteriApp(props) {
  const {
    getCustomerList,
    getIncomeTypeList,
    getCityList,
    getGenderList,
    getFlatType,
  } = props;
  return (
    <>
      <Header />
      <Menu />
      <ListeMusteri
        getGenderList={getGenderList}
        getCityList={getCityList}
        getFlatType={getFlatType}
        getCustomerList={getCustomerList}
        getIncomeTypeList={getIncomeTypeList}
      />
      <Footer />
    </>
  );
}

export default ListeMusteriApp;
