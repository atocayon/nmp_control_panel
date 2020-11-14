// @flow
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import TablePagination from "@material-ui/core/TablePagination";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BorderColor from "@material-ui/icons/BorderColor";
import DialogModal from "../../common/DialogModal";
export default function DocTypes(props) {
  return (
    <div>
      <DialogModal
        data={props.modal}
        doc_types={props.data}
        handleDialogModal={props.handleDialogModal}
        input_change={props.input_change}
        update={props.update_docType}
        delete={props.deleteDocType}
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
              placeholder={"Search Section"}
              onChange={props.search}
            />
          </div>
        </div>
      </div>

      <div>
        <Link className={"btn btn-success"} to={"/cpanel/new_docType"}>
          Add New Document Type
        </Link>
      </div>

      <br />

      <div>
        <table className={"table table-striped table-hover"}>
          <thead>
            <tr>
              {["Document Type", ""].map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.length === 0 && (
              <tr>
                <td colSpan={2} style={{ textAlign: "center" }}>
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
                <tr>
                  <td>{item.type}</td>
                  <td>
                    <button
                      className={"btn btn-sm btn-danger"}
                      title={"Delete"}
                      onClick={props.handleDialogModal.bind(null, {
                        route: "document_type", //API Route
                        id: item.id,
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
                        route: "document_type", //API Route
                        id: item.id,
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
