import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";
import FormCalisan from "../../components/pageContext/projeYonetimi/form_Calisan";
function FormCalisanApp() {
  return (
    <>
      <Header />
      <Menu />
      <FormCalisan />
      <Footer />
    </>
  );
}

export default FormCalisanApp;
