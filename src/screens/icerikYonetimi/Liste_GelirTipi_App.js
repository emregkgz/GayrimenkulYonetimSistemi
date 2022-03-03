import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";

import ListeGelirTipi from "../../components/pageContext/icerikYonetimi/liste_GelirTipi";
function ListeGelirTipiApp(props) {
  const { getIncomeTypeList } = props;
  return (
    <>
      <Header />
      <Menu />
      <ListeGelirTipi getIncomeTypeList={getIncomeTypeList} />
      <Footer />
    </>
  );
}

export default ListeGelirTipiApp;
