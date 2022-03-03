import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";

import ListeZiyaret from "../../components/pageContext/musteriYonetimi/liste_Ziyaret";
function ListeZiyaretApp(props) {
  const { getVisitList, getCustomerList, getProjectList } = props;
  return (
    <>
      <Header />
      <Menu />
      <ListeZiyaret
        getProjectList={getProjectList}
        getCustomerList={getCustomerList}
        getVisitList={getVisitList}
      />
      <Footer />
    </>
  );
}

export default ListeZiyaretApp;
