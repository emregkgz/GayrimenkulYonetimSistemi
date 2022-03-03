import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";
import FormDaire from "../../components/pageContext/projeYonetimi/form_Daire";
function FormDaireApp(props) {
  const { getProjectList, getFlatType, getFlatStatus } = props;
  return (
    <>
      <Header />
      <Menu />
      <FormDaire
        getProjectList={getProjectList}
        getFlatType={getFlatType}
        getFlatStatus={getFlatStatus}
      />
      <Footer />
    </>
  );
}

export default FormDaireApp;
