import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "../../formContext/header";
import Menu from "../../formContext/menu";
import Footer from "../../formContext/footer";

function Daireedit(props) {
  const { getProjectList, getFlatType, getFlatStatus, getFlatList } = props;

  const [searchParam, setsearchparam] = useSearchParams([]);

  const [gettxtFlatNo, settxtFlatNo] = useState();
  const [getcmbProjectID, setcmbProjectID] = useState();
  const [getcmbFlatType, setcmbFlatType] = useState();
  const [getcmbFlatStatus, setcmbFlatStatus] = useState();
  const [gettxtPrice, settxtPrice] = useState();

  useEffect(() => {
    document.getElementById("txtFlatNo").value = getFlatList
      .filter((flatno) => flatno.FlatID == searchParam.get("id"))
      .map((txt) => txt.FlatNo);

    document.getElementById("cmbProjectID").value = getFlatList
      .filter((proje) => proje.FlatID == searchParam.get("id"))
      .map((txt) => txt.ProjectID);

    document.getElementById("cmbFlatType").value = getFlatList
      .filter((flattype) => flattype.FlatID == searchParam.get("id"))
      .map((txt) => txt.FlatTypeID);

    document.getElementById("cmbFlatStatus").value = getFlatList
      .filter((flatstatu) => flatstatu.FlatID == searchParam.get("id"))
      .map((txt) => txt.FlatStatusID);

    document.getElementById("txtPrice").value = getFlatList
      .filter((price) => price.FlatID == searchParam.get("id"))
      .map((txt) => txt.Price);

    settxtFlatNo(document.getElementById("txtFlatNo").value);
    setcmbProjectID(document.getElementById("cmbProjectID").value);
    setcmbFlatType(document.getElementById("cmbFlatType").value);
    setcmbFlatStatus(document.getElementById("cmbFlatType").value);
    settxtPrice(document.getElementById("txtPrice").value);

    console.log(document.getElementById("cmbProjectID").value);
    console.log(searchParam.get("id"));
  }, []);

  const btnUpdate = async () => {
    let requestBody = {
      intFlatID: searchParam.get("id"),
      txtFLatNO: gettxtFlatNo,
      cmbProjectID: getcmbProjectID,
      cmbFlatTypeID: getcmbFlatType,
      cmbFlatStatusID: getcmbFlatStatus,
      txtPrice: gettxtPrice,
    };

    const response = await axios.put(
      "https://private-3a49f-insaatapi9.apiary-mock.com/putFlat",
      requestBody
    );
    if (response.data.Result === "Güncelleme işlemi Tamamlandı") {
      window.alert("Daire Bilgileri Güncellendi");

      console.log(requestBody);
      //console.log("Eklendi(-__-)");
      console.log(searchParam.get("id"));
    } else {
      window.alert("Kayıt Eklenemedi!!!");
    }
  };
  return (
    <>
      <Header />
      <Menu />
      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE HEAD */}
        <div className="page-head">
          <div className="container">
            {/* BEGIN PAGE TITLE */}
            <div className="page-title">
              <h1> Daire </h1>
            </div>
            {/* END PAGE TITLE */}
            {/* BEGIN PAGE TOOLBAR */}
            <div className="page-toolbar">
              {/* BEGIN THEME PANEL */}
              <div className="btn-group btn-theme-panel">
                <a
                  href="#"
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="icon-settings" />
                </a>
                <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <h3>THEME COLORS</h3>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-default"
                              data-theme="default"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Default</span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-hoki"
                              data-theme="blue-hoki"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Hoki
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-steel"
                              data-theme="blue-steel"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Steel
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-orange"
                              data-theme="yellow-orange"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Orange</span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-crusta"
                              data-theme="yellow-crusta"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Yellow Crusta
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-green-haze"
                              data-theme="green-haze"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Green Haze
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-sunglo"
                              data-theme="red-sunglo"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Sunglo
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-intense"
                              data-theme="red-intense"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Intense
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-plum"
                              data-theme="purple-plum"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Plum
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-studio"
                              data-theme="purple-studio"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Studio
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 seperator">
                      <h3>LAYOUT</h3>
                      <ul className="theme-settings">
                        <li>
                          Theme Style
                          <select
                            className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change theme style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Square corners
                            </option>
                            <option value="rounded">Rounded corners</option>
                          </select>
                        </li>
                        <li>
                          Layout
                          <select
                            className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change layout type"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Boxed
                            </option>
                            <option value="fluid">Fluid</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Style
                          <select
                            className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change top menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Mode
                          <select
                            className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) top menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed">Fixed</option>
                            <option value="not-fixed" selected="selected">
                              Not Fixed
                            </option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Style
                          <select
                            className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change mega menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Mode
                          <select
                            className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) mega menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed" selected="selected">
                              Fixed
                            </option>
                            <option value="not-fixed">Not Fixed</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* END THEME PANEL */}
            </div>
            {/* END PAGE TOOLBAR */}
          </div>
        </div>
        {/* END PAGE HEAD */}
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            <div
              className="modal fade"
              id="portlet-config"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    />
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                    Widget settings form goes here
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn blue">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Proje Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="/formdaire">Daire</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Yeni Giriş</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-6 ">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        DAİRE BİLGİLERİ
                      </span>
                    </div>
                    <div className="tools">
                      <a href="#" className="collapse"></a>
                      <a
                        href="#portlet-config"
                        data-toggle="modal"
                        className="config"
                      ></a>
                      <a href="#" className="reload"></a>
                      <a href="#" className="remove"></a>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form role="form">
                      <div className="form-body">
                        <div className="form-group">
                          <label>Daire No*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Dairenin Numarası"
                            name="txtFlatNo"
                            id="txtFlatNo"
                            onChange={(e) => settxtFlatNo(e.target.value)}
                            /* value={getFlatList
                              .filter(
                                (flat) => flat.FlatID == searchParam.get("id")
                              )
                              .map((txt) => txt.FlatNo)} */
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Proje İsmi</label>
                          <select
                            className="form-control"
                            name="cmbProjectID"
                            id="cmbProjectID"
                            onChange={(e) => setcmbProjectID(e.target.value)}
                          >
                            <option defaultValue={""} selected hidden>
                              Lütfen seçiniz...
                            </option>
                            {getProjectList.map((item) => (
                              <option
                                key={item.ProjectID}
                                value={item.ProjectID}
                              >
                                {item.ProjectName}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Oda Tipi</label>
                          <select
                            className="form-control"
                            name="cmbFlatNo"
                            id="cmbFlatType"
                            onChange={(e) => setcmbFlatType(e.target.value)}
                          >
                            {" "}
                            <option value="" selected hidden>
                              Lütfen seçiniz...
                            </option>
                            {getFlatType.map((repo) => (
                              <option
                                key={repo.FlatTypeID}
                                value={repo.FlatTypeID}
                              >
                                {repo.FlatTypeName}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Daire Durumu</label>
                          <select
                            className="form-control"
                            name="cmbFlatStatus"
                            id="cmbFlatStatus"
                            onChange={(e) => setcmbFlatStatus(e.target.value)}
                          >
                            <option defaultValue={""} selected hidden>
                              Lütfen seçiniz...
                            </option>
                            {getFlatStatus.map((repo) => (
                              <option
                                key={repo.FlatStatusID}
                                value={repo.FlatStatusID}
                              >
                                {repo.FlatStatusName}{" "}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Daire Fiyatı</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Dairenin Fiyatı"
                          name="txtPrice"
                          id="txtPrice"
                          onChange={(e) => settxtPrice(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-actions right">
                        <button
                          type="button"
                          className="btn default"
                          name="btnCancel"
                          id="btnCancel"
                        >
                          Vazgeç
                        </button>
                        <button
                          type="button"
                          className="btn green"
                          name="btnSubmit"
                          id="btnSubmit"
                          onClick={() => btnUpdate()}
                        >
                          Güncelle
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
              </div>
              <div className="col-md-6 ">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        KAYIT GEÇMİŞİ
                      </span>
                    </div>
                    <div className="tools">
                      <a href="#" className="collapse"></a>
                      <a
                        href="#portlet-config"
                        data-toggle="modal"
                        className="config"
                      ></a>
                      <a href="#" className="reload"></a>
                      <a href="#" className="remove"></a>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form role="form">
                      <div className="form-body">
                        <div className="form-group">
                          <label>
                            <strong>Oluşturan Kullanıcı</strong>
                          </label>
                          <p className="form-control-static">User XXX</p>
                        </div>
                        <div className="form-group">
                          <label>
                            <strong>Oluşturma Tarihi</strong>
                          </label>
                          <p className="form-control-static">DD/MM/YYYY</p>
                        </div>
                        <div className="form-group">
                          <label>
                            <strong>Güncelleyen Kullanıcı</strong>
                          </label>
                          <p className="form-control-static">User YYY</p>
                        </div>
                        <div className="form-group">
                          <label>
                            <strong>Güncelleme Tarihi</strong>
                          </label>
                          <p className="form-control-static">DD/MM/YYYY</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>
      {/* END PAGE CONTAINER */}
      <Footer />
    </>
  );
}

export default Daireedit;
