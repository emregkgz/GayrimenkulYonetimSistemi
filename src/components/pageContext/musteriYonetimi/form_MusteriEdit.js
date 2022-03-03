import React, { useEffect, useState } from "react";
import axios from "axios";
import Connection from "../../../Connection/Connection";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
function MusteriEdit(props) {
  const {
    getCityList,
    getFlatType,
    getIncomeTypeList,
    getGenderList,
    getCustomerList,
    setOpen,
    open,
  } = props;

  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  //Ek bilgi CONVERT DATE FORMAT
  const formatDate = (param) => {
    var d = param;
    var object = d.split("/");
    var date = new Date(object[2], object[1] - 1, object[0]),
      month = "" + (date.getMonth() + 1),
      day = "" + date.getDate(),
      year = "" + date.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const Update = async () => {
    let requestBody = {
      CustomerID: user.CustomerID,
      CustomerName: user.CustomerName,
      CustomerSurname: user.CustomerSurname,
      GSM: user.GSM,
      BirthDate: user.BirthDate,
      TC: user.TC,
      EMail: user.EMail,
      Address: user.Address,
      GenderID: user.GenderID,
      chkFlatType: user.chkFlatType,
      CityID: user.CityID,
      CustomerNo: user.CustomerNo,
      IncomeTypeID: user.IncomeTypeID,
    };
    const response = await axios.put(
      Connection.Port + "putCustomer",
      requestBody
    );
    if (response.data[0].result === "İşlem Başarılı!") {
      window.alert("Müşteri Bilgileri Güncellendi");
      console.log(requestBody);
    } else {
      window.alert("Kayıt Eklenemedi!!!");
    }
  };
  const Delete = async () => {
    let requestBody = {
      data: {
        CustomerID: user.CustomerID,
      },
    };
    const response = await axios.delete(
      Connection.Port + "deleteCustomer",
      requestBody
    );

    if (response.data.result === "İşlem Başarılı!") {
      if (window.confirm("Silmek istediğinize emin misiniz?")) {
        window.alert("Müşteri Bilgileri Silinmiştir!");
        console.log(requestBody);
      }
    } else {
      window.alert("Hata Oluştu!");
    }
  };
  return (
    <DialogContent>
      {/* BEGIN PAGE CONTENT INNER */}
      <div className="row">
        <div className="col-md-6 ">
          {/* BEGIN SAMPLE FORM PORTLET*/}
          <div className="portlet light">
            <div className="portlet-title">
              <div className="caption">
                <i className="fa fa-cogs font-green-sharp" />
                <span className="caption-subject font-green-sharp bold uppercase">
                  MÜŞTERİ BİLGİLERİ
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
            <div className="portlet-body form" autoComplete="of">
              <form role="form">
                <div className="form-body">
                  <div className="form-group">
                    <label>Müşteri Adı*</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="of"
                      placeholder="Müşterinin Adı"
                      name="CustomerName"
                      id="CustomerName"
                      value={user.CustomerName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Müşteri Soyadı</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Müşterinin Soyadı"
                      name="CustomerSurname"
                      id="CustomerSurname"
                      value={user.CustomerSurname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>GSM</label>
                    <input
                      type="text"
                      className="form-control"
                      name="GSM"
                      id="GSM"
                      value={user.GSM}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Doğum Tarihi</label>
                    <input
                      type="date"
                      className="form-control"
                      name="BirthDate"
                      id="BirthDate"
                      value={user.BirthDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>T.C.*</label>
                    <input
                      type="text"
                      className="form-control"
                      name="TC"
                      id="TC"
                      value={user.TC}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>E-Mail</label>
                    <input
                      type="text"
                      className="form-control"
                      name="EMail"
                      id="EMail"
                      value={user.EMail}
                      onChange={handleInputChange}
                    />
                  </div>
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
          <div className="portlet light">
            <div className="portlet-title">
              <div className="caption">
                <i className="fa fa-cogs font-green-sharp" />
                <span className="caption-subject font-green-sharp bold uppercase">
                  MÜŞTERİ BİLGİLERİ
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
                    <label>Adres</label>
                    <textarea
                      className="form-control"
                      name="Address"
                      id="Address"
                      value={user.Address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Cinsiyet</label> &nbsp;
                    {getGenderList.map((item) => (
                      <>
                        <input
                          key={item.GenderID}
                          type="radio"
                          name="GenderID"
                          id={item.GenderID}
                          value={item.GenderID}
                          onChange={handleInputChange}
                          checked={item.GenderID == user.GenderID}
                        />{" "}
                        &nbsp;
                        <label>{item.GenderName}</label> &nbsp; &nbsp;
                      </>
                    ))}
                  </div>
                  <div className="form-group">
                    <label>İlgilendiği Daireler</label> &nbsp;
                    {getFlatType.map((item) => (
                      <>
                        <input
                          key={item.FlatTypeID}
                          type="checkbox"
                          name="chkFlatType"
                          id={item.FlatTypeID}
                          checked={user.chkFlatType}
                          onChange={handleInputChange}
                        />{" "}
                        &nbsp;
                        <label> {item.FlatTypeName} </label> &nbsp; &nbsp;
                      </>
                    ))}
                  </div>
                  <div className="form-group">
                    <label>Şehir</label>
                    <select
                      className="form-control"
                      name="CityID"
                      id="CityID"
                      onChange={handleInputChange}
                    >
                      <option value="" selected hidden>
                        Lütfen seçiniz...
                      </option>
                      {getCityList.map((item) => (
                        <option
                          key={item.CityID}
                          value={item.CityID}
                          selected={item.CityID == user.CityID}
                        >
                          {item.CityName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Müşteri Numarası</label>
                    <input
                      type="text"
                      className="form-control"
                      name="CustomerNo"
                      id="CustomerNo"
                      value={user.CustomerNo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gelir Durumu</label>

                    <select
                      className="form-control"
                      id="IncomeTypeID"
                      name="IncomeTypeID"
                      onChange={handleInputChange}
                    >
                      <option value="" selected hidden>
                        Lütfen seçiniz...
                      </option>
                      {getIncomeTypeList.map((income) => (
                        <option
                          key={income.IncomeTypeID}
                          value={income.IncomeTypeID}
                          selected={user.IncomeTypeID == income.IncomeTypeID}
                        >
                          {income.IncomeTypeName}
                        </option>
                      ))}
                    </select>
                  </div>
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
                    className="btn red"
                    name="btnCancel"
                    id="btnCancel"
                    onClick={Delete}
                  >
                    Sil
                  </button>
                  <button
                    type="button"
                    className="btn green"
                    name="btnSubmit"
                    id="btnSubmit"
                    onClick={Update}
                  >
                    Kaydet
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
      </div>
      {/* END PAGE CONTENT INNER */}
    </DialogContent>
  );
}

export default MusteriEdit;
