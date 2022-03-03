import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";

import FormZiyaret from "../../components/pageContext/musteriYonetimi/form_Ziyaret";
function FormZiyaretApp(props) {
  const { getVisitList, getProjectList } = props;
  return (
    <>
      <Header />
      <Menu />
      <FormZiyaret
        getVisitList={getVisitList}
        getProjectList={getProjectList}
        getCustomerList={props.getCustomerList}
      />
      <Footer />
    </>
  );
}

export default FormZiyaretApp;
