import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";

import ListeSehir from "../../components/pageContext/icerikYonetimi/liste_Sehir";
function ListeSehirApp(props) {
  const { getCityList } = props;
  return (
    <>
      <Header />
      <Menu />
      <ListeSehir getCityList={getCityList} />
      <Footer />
    </>
  );
}

export default ListeSehirApp;
