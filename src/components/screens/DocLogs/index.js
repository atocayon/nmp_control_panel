// @flow
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import TablePagination from "@material-ui/core/TablePagination";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Logs from "./Logs";
export default function DocLogs(props) {
  return (
    <div>
      <div className={"row"}>
        <div className={"col-md-8"}></div>
        <div className={"col-md-4"}>
          <div className={"form-group has-search"}>
            <span className={"form-control-feedback"}>
              <SearchIcon />
            </span>
            <input
              type={"text"}
              className={"form-control"}
              placeholder={"Search Tracking No/Subject/Creator/Type"}
              onChange={props.search}
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      <div>
        <table className={"table table-striped table-hover"}>
          <thead>
            <tr>
              {[
                "Tracking #",
                "Creator",
                "Subject",
                "Type",
                "Note",
                "Date/Time Created",
              ].map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: "center" }}>
                  No Data Found
                </td>
              </tr>
            )}

            {props.data
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((item) => (
                <React.Fragment key={item.document.documentID}>
                  <tr>
                    <td>
                      <button
                        className={"btn btn-sm"}
                        onClick={props.handleExpand.bind(
                          null,
                          item.document.documentID
                        )}
                      >
                        {props.expand[item.document.documentID] ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </button>
                      {item.document.documentID}
                    </td>
                    <td>{item.document.creator}</td>
                    <td>{item.document.subject}</td>
                    <td>{item.document.doc_type}</td>
                    <td>{item.document.note}</td>
                    <td>{item.document.date_time_created}</td>
                  </tr>
                  {props.expand[item.document.documentID] && (
                    <tr>
                      <td colSpan={6}>
                        <Logs
                          steps={item.logs}
                          activeStep={props.activeStep}
                          handleNext={props.handleNext}
                          handleBack={props.handleBack}
                          handleReset={props.handleReset}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
