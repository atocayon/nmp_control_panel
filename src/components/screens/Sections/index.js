// @flow
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import TablePagination from "@material-ui/core/TablePagination";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BorderColor from "@material-ui/icons/BorderColor";
import DialogModal from "../../common/DialogModal";
export default function Sections(props) {
  let divisions = [];
  let sections = [];
  for (let i of props.divisions) {
    divisions.push({ id: i.divid, value: i.department });
  }

  for (let x of props.data) {
    sections.push({ id: x.department, value: x.department });
  }
  return (
    <div>
      <DialogModal
        data={props.modal}
        handleDialogModal={props.handleDialogModal}
        input_change={props.input_change}
        update={props.update_section}
        delete={props.deleteSection}
        divisions={divisions}
        sections={sections}
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
        <Link className={"btn btn-success"} to={"/cpanel/new_section"}>
          Add New Section
        </Link>
      </div>

      <div>
        <br />
        <table className={"table table-striped table-hover"}>
          <thead>
            <tr>
              {["Short Name", "Section", ""].map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((item) => (
                <tr>
                  <td>{item.secshort}</td>
                  <td>{item.section}</td>
                  <td>
                    <button
                      className={"btn btn-sm btn-danger"}
                      title={"Delete"}
                      onClick={props.handleDialogModal.bind(null, {
                        route: "section", //API Route
                        id: item.secid,
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
                        route: "section", //API Route
                        id: item.secid,
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
