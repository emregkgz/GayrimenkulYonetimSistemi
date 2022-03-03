import React from "react";
import Footer from "../../components/formContext/footer";
import Header from "../../components/formContext/header";
import Menu from "../../components/formContext/menu";
import ListeProje from "../../components/pageContext/projeYonetimi/liste_Proje";

function ListeProjeApp(props) {
  const { getCityList, getProjectList, getProjectStatusList } = props;
  return (
    <>
      <Header />
      <Menu />
      <ListeProje
        getProjectList={getProjectList}
        getCityList={getCityList}
        getProjectStatusList={getProjectStatusList}
      />
      <Footer />
    </>
  );
}

export default ListeProjeApp;
