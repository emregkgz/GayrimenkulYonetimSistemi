import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";

import FormSatis from "../../components/pageContext/musteriYonetimi/form_Satis";
function FormSatisApp(props) {
  const { getCustomerList, getProjectList, getemployeeList } = props;
  return (
    <>
      <Header />
      <Menu />
      <FormSatis
        getCustomerList={getCustomerList}
        getProjectList={getProjectList}
        getemployeeList={getemployeeList}
      />
      <Footer />
    </>
  );
}

export default FormSatisApp;
