import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import TablePagination from "@material-ui/core/TablePagination";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Logs from "./Logs";
export default function WorkLogs(props) {
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
              placeholder={"Search Task No/Requisitioner/Inspector/Section"}
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
                "Task No.",
                "Requisitioner",
                "Inspector",
                "Scope of Work",
                "Section",
                "Deadline",
                "Start",
                "End",
                "Date Created",
              ].map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.length === 0 && (
              <tr>
                <td colSpan={9} style={{ textAlign: "center" }}>
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
                <React.Fragment key={item.work.task_id}>
                  <tr>
                    <td>
                      <button
                        className={"btn btn-sm"}
                        onClick={props.handleExpand.bind(
                          null,
                          item.work.task_id
                        )}
                      >
                        {props.expand[item.work.task_id] ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </button>
                      {item.work.task_id}
                    </td>
                    <td>{item.work.requisitioner}</td>
                    <td>{item.work.inspector || "N/A"}</td>
                    <td>{item.work.scope_of_work}</td>
                    <td>{item.work.secshort}</td>
                    <td>{item.work.deadline}</td>
                    <td>{item.work.start || "N/A"}</td>
                    <td>{item.work.end || "N/A"}</td>
                    <td>{item.work.date_created}</td>
                  </tr>
                  {props.expand[item.work.task_id] && (
                    <tr>
                      <td colSpan={9}>
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
        <TablePagination
          rowsPerPageOptions={[10, 15, 20, 40, 80]}
          component="div"
          count={props.data.length}
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          onChangePage={props.handleChangePage}
          onChangeRowsPerPage={props.handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}
