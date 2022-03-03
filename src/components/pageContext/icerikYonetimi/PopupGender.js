import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { ListItem } from "@mui/material";
import Connection from "../../../Connection/Connection";

function GenderPopup(props) {
  const { setOpenedit, openedit, openpost, setOpenpost, genderList } = props;

  const [secilidata, setSeciliGender] = useState([]);

  useEffect(() => {
    setSeciliGender(props.seciliGender);
  }, [props.seciliGender, setSeciliGender, openedit]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSeciliGender({ ...secilidata, [name]: value });
  };

  const Submit = async () => {
    let requestBody = {
      GenderName: secilidata.GenderName,
    };

    const response = await axios.post(
      Connection.Port + "postGender",
      requestBody
    );

    if (response.data[0].result === "Success") {
      window.alert("Cinsiyet Bilgileri Eklendi");
      console.log(requestBody);

      genderList();
      setOpenedit(false);
    } else {
      window.alert("Kayıt Eklenemedi!!!");
    }
  };
  const Update = async () => {
    let requestBody = {
      GenderID: secilidata.GenderID,
      GenderName: secilidata.GenderName,
    };
    const response = await axios.put(
      Connection.Port + "putGender",
      requestBody
    );
    if (response.data[0].result === "Success") {
      window.alert("Cinsiyet Bilgileri Güncellendi");
      console.log(requestBody);
      setOpenedit(false);
      genderList();
    } else {
      window.alert("Başarısız!!!");
    }
  };

  return (
    <>
      <Dialog fullWidth open={openpost} onClose={() => setOpenpost(false)}>
        {/* BEGIN PAGE HEAD */}

        {/* END PAGE HEAD */}
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}

            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}

            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-6">
                {/* BEGIN SAMPLE TABLE PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        CİNSİYET EKLE
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body">
                    <form role="form">
                      <div className="form-body">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="GenderName"
                            id="GenderName"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-actions right">
                        <button
                          type="button"
                          className="btn default"
                          name="btnCancel"
                          id="btnCancel"
                          onClick={() => setOpenpost(false)}
                        >
                          Vazgeç
                        </button>
                        <button
                          type="button"
                          className="btn green"
                          name="btnSubmit"
                          id="btnSubmit"
                          onClick={Submit}
                        >
                          Ekle
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE TABLE PORTLET*/}
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </Dialog>
      <Dialog open={openedit} onClose={() => setOpenedit(false)}>
        {/* BEGIN PAGE HEAD */}

        {/* END PAGE HEAD */}
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}

            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}

            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-6">
                {/* BEGIN SAMPLE TABLE PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        CİNSİYETLER
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body">
                    <form role="form">
                      <div className="form-body">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="GenderName"
                            id="GenderName"
                            value={secilidata.GenderName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-actions right">
                        <button
                          type="button"
                          className="btn default"
                          name="btnCancel"
                          id="btnCancel"
                          onClick={() => setOpenedit(false)}
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
                    </form>
                  </div>
                </div>
                {/* END SAMPLE TABLE PORTLET*/}
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </Dialog>
    </>
  );
}
export default GenderPopup;
