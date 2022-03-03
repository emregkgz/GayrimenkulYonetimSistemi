import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function FormCalisanEdit(props) {
  const { setOpen, open } = props;

  const [user, setUser] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const Update = async () => {
    let requestBody = {
      EmployeeID: user.EmployeeID,
      EmployeeName: user.txtName,
      EmployeeSurname: user.txtSurname,
      Username: user.txtUsername,
      Password: user.txtPassword,
    };
    const response = await axios.put(
      "https://private-3a49f-insaatapi9.apiary-mock.com/putEmployee",
      requestBody
    );
    if (response.data.Result === "Güncelleme işlemi Tamamlandı") {
      window.alert("Çalışan Bilgileri Güncellendi");
      console.log(requestBody);
    } else {
      window.alert("Kayıt Eklenemedi!!!");
    }
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {/* BEGIN PAGE TITLE */}
          <div className="page-title">
            <h1>Çalışan</h1>
          </div>
          {/* END PAGE TITLE */}
        </DialogTitle>
        <DialogContent>
          {/* BEGIN PAGE CONTAINER */}
          <div className="page-container">
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
                    <a href="/formcalisan">Çalışan</a>
                    <i className="fa fa-circle" />
                  </li>
                  <li className="active">Yeni Giriş</li>
                </ul>
                {/* END PAGE BREADCRUMB */}
                {/* BEGIN PAGE CONTENT INNER */}
                <div className="row">
                  <div className="col-md-6">
                    {/* BEGIN SAMPLE FORM PORTLET*/}
                    <div className="portlet light">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="fa fa-cogs font-green-sharp" />
                          <span className="caption-subject font-green-sharp bold uppercase">
                            ÇALIŞAN BİLGİLERİ
                          </span>
                        </div>
                        <div className="tools">
                          <a href="javascript:;" className="collapse">
                            {" "}
                          </a>
                          <a
                            href="#portlet-config"
                            data-toggle="modal"
                            className="config"
                          ></a>
                          <a href="javascript:;" className="reload">
                            {" "}
                          </a>
                          <a href="javascript:;" className="remove">
                            {" "}
                          </a>
                        </div>
                      </div>
                      <div className="portlet-body form">
                        <form role="form">
                          <div className="form-body">
                            <div className="form-group">
                              <label>Çalışan Adı</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Çalışanın Adı"
                                name="txtName"
                                id="txtName"
                                value={user.txtName}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="form-group">
                              <label>Çalışan Soyadı</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Çalışanın Soyadı"
                                name="txtSurname"
                                id="txtSurname"
                                value={user.txtSurname}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="form-group">
                              <label>Username</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="txtUsername"
                                id="txtUsername"
                                value={user.txtUsername}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="Password">Password</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="txtPassword"
                                  id="txtPassword"
                                  placeholder="Password"
                                  value={user.txtPassword}
                                  onChange={handleInputChange}
                                />
                                <span className="input-group-addon">
                                  <i className="fa fa-user" />
                                </span>
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
                                className="btn green"
                                name="btnSubmit"
                                id="btnSubmit"
                                onClick={Update}
                              >
                                Güncelle
                              </button>
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
                </div>
                <div className="row">
                  <div className="col-md-6">
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
                          <a href="javascript:;" className="collapse">
                            {" "}
                          </a>
                          <a
                            href="#portlet-config"
                            data-toggle="modal"
                            className="config"
                          ></a>
                          <a href="javascript:;" className="reload">
                            {" "}
                          </a>
                          <a href="javascript:;" className="remove">
                            {" "}
                          </a>
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
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
          {/* END PAGE CONTENT */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FormCalisanEdit;
