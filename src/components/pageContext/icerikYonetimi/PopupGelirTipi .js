import React, { useState, useEffect } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import axios from "axios";
import Connetion from "../../../Connection/Connection";

function GelirTipiPopup(props) {
  const { openUpdate, setOpenUpdate, openSubmit, openPopupSubmit } = props;
  const [income, setIncomeType] = useState([]);
  const [submitIncomeName, setsubmitIncomeName] = useState([]);

  useEffect(() => {
    setIncomeType(props.current);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setIncomeType({ ...income, [name]: value });
  };

  const Update = async () => {
    let request = {
      IncomeTypeID: income.IncomeTypeID,
      IncomeTypeName: income.IncomeTypeName,
    };

    const response = await axios.put(Connetion.Port + "putIncomeType", request);

    if (response.data[0].result === "Success") {
      window.alert("Başarıyla güncellendi!");
      console.log("Request Verileri:", request);
    } else {
      window.alert("Başarısız!");
    }
  };

  const Submit = async () => {
    let requestBody = {
      IncomeTypeName: submitIncomeName,
    };

    const response = await axios.post(
      Connetion.Port + "postIncomeType",
      requestBody
    );
    if (response.data[0].result === "Success") {
      window.alert("Başarıyla Eklendi!");
      console.log("Request Verileri:", requestBody);
    } else {
      window.alert("Başarısız!");
    }
  };
  return (
    <>
      <Dialog fullWidth open={openUpdate} onClose={() => setOpenUpdate(false)}>
        <center>
          <DialogTitle>
            {
              <div
                className="caption"
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                }}
              >
                <i className="fa fa-cogs font-green-sharp" />
                &nbsp;
                <span className="caption-subject font-green-sharp bold uppercase">
                  DAİRE TİPİNİ GÜNCELLE
                </span>
              </div>
            }
          </DialogTitle>
        </center>
        <DialogContent>
          <DialogContentText>
            <form role="form ">
              <div className="form body ">
                <div className="form-group">
                  <label>
                    <b>Daire Tipi</b>
                  </label>
                  <input
                    value={income.IncomeTypeName}
                    type="text"
                    className="form-control"
                    placeholder="Daire Tipini Giriniz..."
                    name="IncomeTypeName"
                    id="IncomeTypeName"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-actions center">
                <DialogActions>
                  <button
                    type="button"
                    className="btn default"
                    name="btnCancel"
                    id="btnCancel"
                    onClick={() => setOpenUpdate(false)}
                  >
                    Vazgeç
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
                </DialogActions>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Dialog
        fullWidth
        open={openSubmit}
        onClose={() => openPopupSubmit(false)}
      >
        <center>
          <DialogTitle>
            {
              <div
                className="caption"
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                }}
              >
                <i className="fa fa-cogs font-green-sharp" />
                &nbsp;
                <span className="caption-subject font-green-sharp bold uppercase">
                  YENİ DAİRE TİPİ EKLE
                </span>
              </div>
            }
          </DialogTitle>
        </center>
        <DialogContent>
          <DialogContentText>
            <form role="form ">
              <div className="form body ">
                <div className="form-group">
                  <label>
                    <b>Daire Tipi</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Daire Tipini Giriniz..."
                    name="txtFlatTypeName"
                    id="txtFlatTypeName"
                    onChange={(e) => setsubmitIncomeName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-actions center">
                <DialogActions>
                  <button
                    type="button"
                    className="btn default"
                    name="btnCancel"
                    id="btnCancel"
                    onClick={() => openPopupSubmit(false)}
                  >
                    Vazgeç
                  </button>
                  <button
                    type="button"
                    className="btn green"
                    name="btnSubmit"
                    id="btnSubmit"
                    onClick={() => Submit()}
                  >
                    Ekle
                  </button>
                </DialogActions>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GelirTipiPopup;
