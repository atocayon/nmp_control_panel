// @flow
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import TablePagination from "@material-ui/core/TablePagination";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BorderColor from "@material-ui/icons/BorderColor";
import DialogModal from "../../common/DialogModal";
export default function Divisions(props) {
  return (
    <div>
      <DialogModal
        data={props.modal}
        handleDialogModal={props.handleDialogModal}
        input_change={props.input_change}
        update_division={props.update_division}
      />
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
              placeholder={"Search Division"}
              onChange={props.search}
            />
          </div>
        </div>
      </div>

      <div>
        <Link className={"btn btn-success"}>Add New Division</Link>
      </div>

      <div>
        <br />
        <table className={"table table-striped table-hover"}>
          <thead>
            <tr>
              {["Short Name", "Division", ""].map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.length === 0 && (
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  No data found
                </td>
              </tr>
            )}
            {props.data
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((item) => (
                <tr>
                  <td>{item.depshort}</td>
                  <td>{item.department}</td>
                  <td>
                    <button
                      className={"btn btn-sm btn-danger"}
                      title={"Delete"}
                      onClick={props.handleDialogModal.bind(null, {
                        route: "division", //API Route
                        id: item.depid,
                        type: "delete",
                      })}
                    >
                      <DeleteForeverIcon />
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className={"btn btn-sm btn-warning"}
                      title={"Edit"}
                      onClick={props.handleDialogModal.bind(null, {
                        route: "division", //API Route
                        id: item.depid,
                        type: "edit",
                      })}
                    >
                      <BorderColor />
                    </button>
                  </td>
                </tr>
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
