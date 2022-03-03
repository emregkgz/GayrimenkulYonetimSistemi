import React, { useState } from "react";
import { Link } from "react-router-dom";
import ZiyaretEdit from "./form_ZiyaretEdit";

function ListeZiyaret(props) {
  const { getVisitList, getProjectList, getCustomerList } = props;
  const [open, setOpen] = useState(false);
  const initialFormState = {
    VisitID: null,
    dVisitDate: "",
    txtCustomer: null,
    cmbProjectID: null,
    txtNotes: "",
  };

  const [currentVisit, setCurrentVisit] = useState(initialFormState);

  const editRow = (item) => {
    setOpen(true);
    setCurrentVisit({
      VisitID: item.VisitID,
      dVisitDate: item.VisitDate,
      txtCustomer: item.CustomerID,
      cmbProjectID: item.ProjectID,
      txtNotes: item.Notes,
    });
  };
  return (
    <>
      {/* BEGIN SAMPLE TABLE PORTLET*/}
      <div className="portlet light">
        <div className="portlet-title">
          <div className="caption">
            <i className="fa fa-cogs font-green-sharp" />
            <span className="caption-subject font-green-sharp bold uppercase">
              TÜM KAYITLAR
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
        <div className="portlet-body">
          <div className="table-scrollable">
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "250px !important" }}>
                    Ziyaret Tarihi
                  </th>
                  <th scope="col" style={{ width: "250px" }}>
                    Müşteri Adı
                  </th>
                  <th scope="col" style={{ width: "250px" }}>
                    Proje
                  </th>
                  <th scope="col" style={{ width: "250px" }}>
                    Notlar
                  </th>
                </tr>
              </thead>
              <tbody>
                {getVisitList.map((item) => (
                  <tr key={item.VisitID}>
                    <td>{item.VisitDate}</td>
                    <td
                      onClick={() => {
                        editRow(item);
                      }}
                    >
                      <Link to={`?id=${item.VisitID}`}>
                        {item.CustomerName}
                      </Link>
                    </td>
                    <td>{item.ProjectName}</td>
                    <td>{item.Notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ZiyaretEdit
          open={open}
          setOpen={setOpen}
          currentVisit={currentVisit}
          getProjectList={getProjectList}
          getCustomerList={getCustomerList}
          getVisitList={getVisitList}
        ></ZiyaretEdit>
      </div>
      {/* END SAMPLE TABLE PORTLET*/}
    </>
  );
}

export default ListeZiyaret;
