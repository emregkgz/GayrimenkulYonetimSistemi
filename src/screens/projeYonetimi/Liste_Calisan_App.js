import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";
import ListeCalisan from "../../components/pageContext/projeYonetimi/liste_Calisan";

function ListeCalisanApp(props) {
  const { getemployeeList } = props;
  return (
    <>
      <Header />
      <Menu />
      <ListeCalisan getemployeeList={getemployeeList} />
      <Footer />
    </>
  );
}

export default ListeCalisanApp;
