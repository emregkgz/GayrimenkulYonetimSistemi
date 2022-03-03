import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";

import ListeDaireTipi from "../../components/pageContext/icerikYonetimi/liste_DaireTipi";
function ListeDaireTipiApp(props) {
  const { getFlatType } = props;
  return (
    <>
      <Header />
      <Menu />
      <ListeDaireTipi getFlatType={getFlatType} />
      <Footer />
    </>
  );
}

export default ListeDaireTipiApp;
