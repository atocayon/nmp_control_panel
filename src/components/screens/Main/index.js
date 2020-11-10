// @flow
import React from "react";
import UpdateUserInforModal from "../../common/UpdateUserInfoModal";
import TablePagination from "@material-ui/core/TablePagination";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BorderColor from "@material-ui/icons/BorderColor";
export default function Main(props) {
  let arr = [];
  for(let val of props.sections){
    arr.push({id: val.secid, value: val.section});
  }
  return (
    <div className={"dashboard-container"}>
    
      <UpdateUserInforModal
        data={props.openUpdateUserModal}
        handleClose={props.handleCloseOpenUserUpdate}
        input_change={props.input_change}
        update_user_info={props.update_user_info}
        sections={arr}
      />
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
                  >
                    <VpnKeyIcon />
                  </button>
                  &nbsp;&nbsp;
                  <button className={"btn btn-sm btn-danger"} title={"Delete"}>
                    <DeleteForeverIcon />
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className={"btn btn-sm btn-warning"}
                    title={"Edit"}
                    onClick={props.handleOpenUserUpdateModal.bind(
                      null,
                      item.user_id
                    )}
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
