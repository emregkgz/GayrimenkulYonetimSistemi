import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";
import FormProje from "../../components/pageContext/projeYonetimi/form_Proje";

function FormProjeApp(props) {
  const { getCityList, getProjectStatusList } = props;
  return (
    <>
      <Header />
      <Menu />
      <FormProje
        getCityList={getCityList}
        getProjectStatusList={getProjectStatusList}
      />
      <Footer />
    </>
  );
}

export default FormProjeApp;
