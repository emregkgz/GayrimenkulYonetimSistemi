import React from "react";
import Header from "../../components/formContext/header/index";
import Menu from "../../components/formContext/menu/index";
import Footer from "../../components/formContext/footer/index";

import ListeSatis from "../../components/pageContext/musteriYonetimi/liste_Satis";
function ListeSatisApp(props) {
  const { getSalesList, getCustomerList, getFlatList, getemployeeList } = props;
  return (
    <>
      <Header />
      <Menu />
      <ListeSatis
        getCustomerList={getCustomerList}
        getFlatList={getFlatList}
        getemployeeList={getemployeeList}
        getSalesList={getSalesList}
      />
      <Footer />
    </>
  );
}

export default ListeSatisApp;
