import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";

import ListeProjeDurumu from "../../components/pageContext/icerikYonetimi/liste_ProjeDurumu";
function ListeProjeDurumuApp(props) {
  const { getProjectStatusList } = props;
  return (
    <>
      <Header />
      <Menu />
      <ListeProjeDurumu getProjectStatusList={getProjectStatusList} />
      <Footer />
    </>
  );
}

export default ListeProjeDurumuApp;
