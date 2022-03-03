import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";

import ListeCinsiyet from "../../components/pageContext/icerikYonetimi/liste_Cinsiyet";
function ListeCinsiyetApp(props) {
  const { getGenderList, genderList } = props;
  return (
    <>
      <Header />
      <Menu />
      <ListeCinsiyet genderList={genderList} getGenderList={getGenderList} />
      <Footer />
    </>
  );
}

export default ListeCinsiyetApp;
