import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Connection from "../../../Connection/Connection";

function ZiyaretEdit(props) {
  const { getCustomerList, getProjectList, setOpen, open } = props;

  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(props.currentVisit);
  }, [props]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const Update = async () => {
    let requestBody = {
      VisitID: user.VisitID,
      VisitDate: user.dVisitDate,
      CustomerID: user.txtCustomer,
      ProjectID: user.cmbProjectID,
      Notes: user.txtNotes,
    };
    const response = await axios.put(Connection.Port + "putVisit", requestBody);
    if (response.data.result === "İşlem Başarılı!") {
      window.alert("Ziyaret Bilgileri Güncellendi");
      console.log(requestBody);
    } else {
      window.alert("Başarısız!!!");
    }
  };
  const Delete = async () => {
    let requestBody = {
      VisitID: user.VisitID,
    };
    const response = await axios.delete(
      "https://private-3a49f-insaatapi9.apiary-mock.com/deleteVisit",
      requestBody
    );

    if (response.data.Result === "İşlem Başarılı!") {
      if (window.confirm("Silmek istediğinize emin misiniz?")) {
        window.alert("Ziyaret Bilgileri Silinmiştir!");
        console.log(requestBody);
      }
    } else {
      window.alert("Hata Oluştu!");
    }
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      {/* BEGIN SAMPLE FORM PORTLET*/}
      <div className="portlet light">
        <div className="portlet-title">
          <div className="caption">
            <i className="fa fa-cogs font-green-sharp" />
            <span className="caption-subject font-green-sharp bold uppercase">
              ZİYARET BİLGİLERİ
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
                <label>Ziyaret Tarihi</label>
                <input
                  type="date"
                  className="form-control"
                  name="dVisitDate"
                  id="dVisitDate"
                  defaultValue={user.dVisitDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Müşteri Adı</label>
                <select
                  className="form-control"
                  name="txtCustomer"
                  id="txtCustomer"
                  onChange={handleInputChange}
                >
                  {getCustomerList.map((item) => (
                    <option
                      key={item.CustomerID}
                      value={item.CustomerID}
                      selected={item.CustomerID == user.txtCustomer}
                    >
                      {item.CustomerName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label> Proje </label>
                <select
                  className="form-control"
                  name="cmbProjectID"
                  id="cmbProjectID"
                  onChange={handleInputChange}
                >
                  <option value="" selected hidden>
                    Lütfen seçiniz...
                  </option>
                  {getProjectList.map((item) => (
                    <option
                      key={item.ProjectID}
                      value={item.ProjectID}
                      selected={user.cmbProjectID == item.ProjectID}
                    >
                      {item.ProjectName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Notlar</label>
                <textarea
                  className="form-control"
                  name="txtNotes"
                  id="txtNotes"
                  defaultValue={user.txtNotes}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-actions right">
                <button
                  type="button"
                  className="btn default"
                  name="btnCancel"
                  id="btnCancel"
                  onClick={handleClose}
                >
                  Vazgeç
                </button>
                <div className="form-actions right">
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
                    onClick={() => Update()}
                  >
                    Güncelle
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* END SAMPLE FORM PORTLET*/}
    </Dialog>
  );
}

export default ZiyaretEdit;
