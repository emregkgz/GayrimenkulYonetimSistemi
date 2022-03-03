import React, { useState, useEffect } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import axios from "axios";
function EditSatis(props) {
  const { getCustomerList, getFlatList, getemployeeList, open, setOpen } =
    props;
  const [selectSale, setSelectSale] = useState([]);
  const [submitPStatuName, setsubmitPStatuName] = useState([]);

  useEffect(() => {
    setSelectSale(props.current);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectSale({ ...selectSale, [name]: value });
  };

  const Update = async () => {
    let request = {
      SalesID: selectSale.SalesID,
      SalesDate: selectSale.SalesDate,
      CustomerID: selectSale.CustomerID,
      FlatID: selectSale.FlatID,
      Price: selectSale.Price,
      EmployeeID: selectSale.EmployeeID,
      Notes: selectSale.Notes,
    };

    const response = await axios.put(
      "https://private-3a49f-insaatapi9.apiary-mock.com/putSales",
      request
    );

    if (response.data.Result === "İşlem Başarılı!") {
      window.alert("Başarıyla güncellendi!");
      console.log("Request Verileri:", request);
    } else {
      window.alert("Başarısız!");
    }
  };
  const Delete = async () => {
    let requestBody = {
      SalesID: selectSale.SalesID,
    };
    const response = await axios.delete(
      "https://private-3a49f-insaatapi9.apiary-mock.com/deleteSales",
      requestBody
    );

    if (response.data.Result === "İşlem Başarılı!") {
      if (window.confirm("Silmek istediğinize emin misiniz?")) {
        window.alert("Satış Bilgileri Silinmiştir!");
        console.log(requestBody);
      }
    } else {
      window.alert("Hata Oluştu!");
    }
  };
  return (
    <>
      <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
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
                  SATIŞ KAYIT GÜNCELLEME
                </span>
              </div>
            }
          </DialogTitle>
        </center>
        <DialogContent>
          <DialogContentText>
            <form role="form ">
              <div className="form-body">
                <div className="form-group">
                  <label>Satış Tarihi</label>
                  <input
                    type="date"
                    className="form-control"
                    name="SalesDate"
                    id="SalesDate"
                    defaultValue={selectSale.SalesDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Müşteri Adı</label>
                  <select
                    className="form-control"
                    name="CustomerID"
                    id="CustomerID"
                    onChange={handleInputChange}
                  >
                    <option value={0} defaultValue hidden>
                      Lütfen seçiniz...
                    </option>
                    {getCustomerList.map((item) => (
                      <option
                        key={item.CustomerID}
                        value={item.CustomerID}
                        selected={item.CustomerID == selectSale.CustomerID}
                      >
                        {item.CustomerName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label> Daire Bilgisi </label>
                  <select
                    className="form-control"
                    name="FlatID"
                    id="FlatID"
                    onChange={handleInputChange}
                  >
                    <option value={0} defaultValue hidden>
                      Lütfen seçiniz...
                    </option>
                    {getFlatList.map((item) => (
                      <option
                        key={item.FlatID}
                        value={item.FlatID}
                        selected={item.FlatID == selectSale.FlatID}
                      >
                        {item.FlatNo}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Fiyat</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Price"
                    id="Price"
                    defaultValue={selectSale.Price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Satıcı Adı</label>
                  <select
                    className="form-control"
                    name="EmployeeID"
                    id="EmployeeID"
                    onChange={handleInputChange}
                  >
                    <option value={0} defaultValue hidden>
                      Lütfen seçiniz...
                    </option>
                    {getemployeeList.map((item) => (
                      <option
                        key={item.EmployeeID}
                        value={item.EmployeeID}
                        selected={item.EmployeeID == selectSale.EmployeeID}
                      >
                        {item.EmployeeName}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Notlar</label>
                  <textarea
                    className="form-control"
                    name="Notes"
                    id="Notes"
                    defaultValue={selectSale.Notes}
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
                    onClick={() => setOpen(false)}
                  >
                    Vazgeç
                  </button>
                  <button
                    type="button"
                    className="btn red"
                    name="btnSubmit"
                    id="btnSubmit"
                    onClick={() => Delete()}
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
                </DialogActions>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default EditSatis;
