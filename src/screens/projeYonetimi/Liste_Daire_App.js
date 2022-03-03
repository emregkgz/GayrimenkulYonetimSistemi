import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";
import ListeDaire from "../../components/pageContext/projeYonetimi/liste_Daire";
function ListeDaireApp(props) {
  const { getProjectList, getFlatType, getFlatStatus, getFlatList } = props;
  return (
    <>
      <Header />
      <Menu />
      <ListeDaire
        getProjectList={getProjectList}
        getFlatType={getFlatType}
        getFlatStatus={getFlatStatus}
        getFlatList={getFlatList}
      />
      <Footer />
    </>
  );
}

export default ListeDaireApp;
