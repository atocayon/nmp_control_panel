// @flow
import React from "react";
import UpdateUserInforModal from "../../common/UpdateUserInfoModal";
import ConfirmationModal from "../../common/ConfirmationModal";
import TablePagination from "@material-ui/core/TablePagination";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BorderColor from "@material-ui/icons/BorderColor";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

export default function Main(props) {
  let arr = [];
  for (let val of props.sections) {
    arr.push({ id: val.secid, value: val.section });
  }
  return (
    <div className={"dashboard-container"}>
      {props.openUpdateUserModal.modal === "Edit" && (
        <UpdateUserInforModal
          data={props.openUpdateUserModal}
          handleClose={props.handleCloseOpenUserUpdate}
          input_change={props.input_change}
          update_user_info={props.update_user_info}
          sections={arr}
        />
      )}

      {props.openUpdateUserModal.modal !== "Edit" && (
        <ConfirmationModal
          data={props.openUpdateUserModal}
          handleClose={props.handleCloseOpenUserUpdate}
          input_change={props.input_change}
          changePassword={props.changePassword}
          deleteUser={props.deleteUser}
        />
      )}

      <div className={"form-group has-search"}>
        <span className={"form-control-feedback"}>
          <SearchIcon />
        </span>
        <input
          type={"text"}
          className={"form-control"}
          placeholder={"Search Employee ID or Name"}
          onChange={props.search}
        />
      </div>

      <div>
        <Link className={"btn btn-success"} to={"/cpanel/user_registration"}>
          Add New User
        </Link>
      </div>
      <br />
      <table className={"table table-striped table-hover"}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Section</th>
            <th>Position</th>
            <th>DTS Role</th>
            <th>Work Queue Role</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.length === 0 && (
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
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
                <td>{item.employeeId}</td>
                <td>{item.name}</td>
                <td>{item.secshort}</td>
                <td>{item.position}</td>
                <td>
                  {item.dts_role === null || item.dts_role === ""
                    ? "N/A"
                    : item.dts_role}
                </td>
                <td>
                  {item.work_queue_role === null || item.work_queue_role === ""
                    ? "N/A"
                    : item.work_queue_role}
                </td>
                <td>
                  <select className={"form-control"}>
                    <option value={item.accnt_status}>
                      {item.accnt_status}
                    </option>
                    {item.accnt_status === "active" ? (
                      <option value={"non-active"}>non-active</option>
                    ) : (
                      <option value={"active"}>active</option>
                    )}
                  </select>
                </td>
                <td>
                  <button
                    className={"btn btn-primary btn-sm"}
                    title={"Update password"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      user_id: item.user_id,
                      modal: "password",
                    })}
                  >
                    <VpnKeyIcon />
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className={"btn btn-sm btn-danger"}
                    title={"Delete"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      user_id: item.user_id,
                      modal: "delete",
                    })}
                  >
                    <DeleteForeverIcon />
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className={"btn btn-sm btn-warning"}
                    title={"Edit"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      user_id: item.user_id,
                      modal: "Edit",
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
        rowsPerPageOptions={[15, 20, 40, 80]}
        component="div"
        count={props.data.length}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        onChangePage={props.handleChangePage}
        onChangeRowsPerPage={props.handleChangeRowsPerPage}
      />
      {/* </div>
        <div className={"col-md-1"}></div>
      </div> */}
    </div>
  );
}
