import { Routes, Route } from "react-router-dom";
import "./App.css";
import Connection from "./Connection/Connection";

import FormProjeApp from "./screens/projeYonetimi/Form_Proje_App";
import ListeDaireApp from "./screens/projeYonetimi/Liste_Daire_App";
import ListeCalisanApp from "./screens/projeYonetimi/Liste_Calisan_App";
import ListeProjeApp from "./screens/projeYonetimi/Liste_Proje_App";
import ListeSehirApp from "./screens/icerikYonetimi/Liste_Sehir_App";
import FormDaireApp from "./screens/projeYonetimi/Form_Daire_App";
import FormCalisanApp from "./screens/projeYonetimi/Form_Calisan_App";
import FormMusteriApp from "./screens/musteriYonetimi/Form_Musteri_App";
import FormSatisApp from "./screens/musteriYonetimi/Form_Satis_App";
import FormZiyaretApp from "./screens/musteriYonetimi/Form_Ziyaret_App";
import ListeMusteriApp from "./screens/musteriYonetimi/Liste_Musteri_App";
import ListeSatisApp from "./screens/musteriYonetimi/Liste_Satis_App";
import ListeZiyaretApp from "./screens/musteriYonetimi/Liste_Ziyaret_App";
import ListeCinsiyetApp from "./screens/icerikYonetimi/Liste_Cinsyet_App";
import ListeDaireTipiApp from "./screens/icerikYonetimi/Liste_DaireTipi_App";
import ListeGelirTipiApp from "./screens/icerikYonetimi/Liste_GelirTipi_App";
import ListeProjeDurumuApp from "./screens/icerikYonetimi/Liste_ProjeDurumu_App";
import FormProjeEdit from "./components/pageContext/projeYonetimi/form_ProjeEdit";
import Login from "./components/loginContext/login";

import { useEffect, useState } from "react";
import axios from "axios";
import Daireedit from "./components/pageContext/projeYonetimi/form_DaireEdit";
import FormCalisanEdit from "./components/pageContext/projeYonetimi/form_CalisanEdit";
import MusteriEdit from "./components/pageContext/musteriYonetimi/form_MusteriEdit";

function App(props) {
  /**
  |--------------------------------------------------
  |             GET SERVİCES BEGİN
  |--------------------------------------------------
  */
  const [getProjectList, setProjectList] = useState([]);
  const [getCityList, setCityList] = useState([]);
  const [getProjectStatusList, setProjectStatusList] = useState([]);
  const [getFlatType, setFlatType] = useState([]);
  const [getFlatStatus, setFlatStatus] = useState([]);
  const [getFlatList, setFlatList] = useState([]);
  const [getemployeeList, setEmployeeList] = useState([]);
  const [getIncomeTypeList, setIncomeTypeList] = useState([]);
  const [getGenderList, setGenderList] = useState([]);
  const [getCustomerList, setCustomerList] = useState([]);
  const [getVisitList, setVisitList] = useState([]);
  const [getSalesList, setSalesList] = useState([]);

  //const [refresh, setRefresh] = useState(false);

  const genderList = async () => {
    const response7 = await axios.get(Connection.Port + "getGenderList");
    setGenderList(response7.data[0].GenderTable);
  };

  useEffect(async () => {
    const response = await axios.get(Connection.Port + "getProjectList");
    setProjectList(response.data[0].ProjectTable);

    const response7 = await axios.get(Connection.Port + "getGenderList");
    setGenderList(response7.data[0].GenderTable);

    const response1 = await axios.get(Connection.Port + "getCityList");
    setCityList(response1.data[0].CityTable);

    const response2 = await axios.get(Connection.Port + "getProjectStatusList");
    setProjectStatusList(response2.data[0].ProjectStatusTable);

    const response3 = await axios.get(Connection.Port + "getFlatTypeList");
    setFlatType(response3.data[0].FlatTypeTable);

    const response4 = await axios.get(Connection.Port + "getFlatStatu");
    setFlatStatus(response4.data[0].FlatStatuTable);

    const response5 = await axios.get(Connection.Port + "getFlatList");
    setFlatList(response5.data[0].FlatTable);

    const response6 = await axios.get(Connection.Port + "getEmployeeList");
    setEmployeeList(response6.data[0].EmployeeTable);

    const response8 = await axios.get(Connection.Port + "getIncomeTypeList");
    setIncomeTypeList(response8.data[0].IncomeTypeTable);

    const response9 = await axios.get(Connection.Port + "getCustomerList");
    setCustomerList(response9.data[0].CustomerTable);

    const response10 = await axios.get(Connection.Port + "getVisitList");
    setVisitList(response10.data[0].VisitTable);

    const response11 = await axios.get(Connection.Port + "getSalesList");
    setSalesList(response11.data[0].SalesTable);
  }, [props]);

  /**
  |--------------------------------------------------
  |             GET SERVİCES END 
  |             PUT SERVİCES BEGİN
  |--------------------------------------------------
  */

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* PROJE YONETİMİ */}
        <Route
          path="/FormProjeApp"
          element={
            <FormProjeApp
              getCityList={getCityList}
              getProjectStatusList={getProjectStatusList}
            />
          }
        />
        <Route
          path="/formdaire"
          element={
            <FormDaireApp
              getProjectList={getProjectList}
              getFlatType={getFlatType}
              getFlatStatus={getFlatStatus}
            />
          }
        />
        <Route path="/formcalisan" element={<FormCalisanApp />} />
        <Route
          path="/listeleproje"
          element={
            <ListeProjeApp
              getProjectList={getProjectList}
              getCityList={getCityList}
              getProjectStatusList={getProjectStatusList}
            />
          }
        />
        <Route
          path="/listeledaire"
          element={
            <ListeDaireApp
              getProjectList={getProjectList}
              getFlatType={getFlatType}
              getFlatStatus={getFlatStatus}
              getFlatList={getFlatList}
            />
          }
        />
        <Route
          path="/listecalisan"
          element={<ListeCalisanApp getemployeeList={getemployeeList} />}
        />
        <Route
          path="/formprojeedit"
          element={
            <FormProjeEdit
              getProjectStatusList={getProjectStatusList}
              getCityList={getCityList}
              getProjectList={getProjectList}
            />
          }
        />

        <Route
          path="/listeledaireEdit"
          element={
            <Daireedit
              getFlatStatus={getFlatStatus}
              getFlatType={getFlatType}
              getProjectList={getProjectList}
              getFlatList={getFlatList}
            />
          }
        />
        <Route
          path="listelecalisanedit"
          element={<FormCalisanEdit getemployeeList={getemployeeList} />}
        />

        {/* MUSTERI YONETİMİ  */}
        <Route
          path="/formmusteri"
          element={
            <FormMusteriApp
              getCityList={getCityList}
              getFlatType={getFlatType}
              getIncomeTypeList={getIncomeTypeList}
              getGenderList={getGenderList}
            />
          }
        />
        <Route path="/formmusteriedit" element={<MusteriEdit />} />

        <Route
          path="/formsatis"
          element={
            <FormSatisApp
              getCustomerList={getCustomerList}
              getProjectList={getProjectList}
              getemployeeList={getemployeeList}
            />
          }
        />
        <Route
          path="/formziyaret"
          element={
            <FormZiyaretApp
              getVisitList={getVisitList}
              getProjectList={getProjectList}
              getCustomerList={getCustomerList}
            />
          }
        />
        <Route
          path="/listelemusteri"
          element={
            <ListeMusteriApp
              getGenderList={getGenderList}
              getCityList={getCityList}
              getFlatType={getFlatType}
              getCustomerList={getCustomerList}
              getIncomeTypeList={getIncomeTypeList}
            />
          }
        />
        <Route
          path="/listelesatis"
          element={
            <ListeSatisApp
              getCustomerList={getCustomerList}
              getFlatList={getFlatList}
              getemployeeList={getemployeeList}
              getSalesList={getSalesList}
            />
          }
        />
        <Route
          path="/listeleziyaret"
          element={
            <ListeZiyaretApp
              getCustomerList={getCustomerList}
              getVisitList={getVisitList}
              getProjectList={getProjectList}
            />
          }
        />
        {/* ICERIK YONETIMI */}
        <Route
          path="/listelecinsiyet"
          element={
            <ListeCinsiyetApp
              getGenderList={getGenderList}
              genderList={genderList}
            />
          }
        />
        <Route
          path="/listeledairetipi"
          element={<ListeDaireTipiApp getFlatType={getFlatType} />}
        />
        <Route
          path="/listelegelirtipi"
          element={<ListeGelirTipiApp getIncomeTypeList={getIncomeTypeList} />}
        />
        <Route
          path="/listeleprojedurumu"
          element={
            <ListeProjeDurumuApp getProjectStatusList={getProjectStatusList} />
          }
        />

        <Route
          path="/listelesehir"
          element={<ListeSehirApp getCityList={getCityList} />}
        />
      </Routes>
    </>
  );
}

export default App;
