// @flow
import React, { useState } from "react";
import InputField from "../../common/textField/InputField";
import SelectField from "../../common/SelectField";
export default function UserRegistration(props) {
  const [err, setError] = useState({});
  let arr = [];
  for (let i of props.sections) {
    arr.push({ id: i.secid, value: i.section });
  }
  const validation = () => {
    let _err = {};
    if (!props.data.employeeId) _err.employeeId = "Employee ID Required";
    if (!props.data.name) _err.name = "Name Required";
    if (!props.data.username) _err.username = "Username Required";
    if (!props.data.password) _err.password = "Password Required";
    if (!props.data.cPassword) _err.cPassword = "Confirm Password Required";
    if (!props.data.contact) _err.contact = "Contact Required";
    if (!props.data.email) _err.email = "Email Required";
    if (!props.data.section) _err.section = "Section Required";
    if (!props.data.position) _err.position = "Position Required";

    setError(_err);

    return Object.keys(_err).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    if (props.data.password === props.data.cPassword) {
      return props.handleRegistration(props.data);
    }

    if (props.data.password !== props.data.cPassword) {
      return setError({ ...err, password: "Unmatch", cPassword: "Unmatch" });
    }
  };
  return (
    <div style={{ marginBottom: "10vh", marginTop: "10vh" }}>
      <form onSubmit={onSubmit}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-3"}></div>
            <div className={"col-md-6"}>
              <h2
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: "10vh",
                }}
              >
                User Registration Form
              </h2>

              <div className={"row"}>
                <div className={"col-md-4"}>
                  <InputField
                    autoFocus={true}
                    name={"employeeId"}
                    variant={"outlined"}
                    label={"Employee ID"}
                    value={props.data.employeeId}
                    onChange={props.input_change}
                    error={err.employeeId}
                  />
                  <br />
                  <br />
                  <SelectField
                    name={"dts_role"}
                    label={"DTS Role"}
                    value={props.data.dts_role || ""}
                    option={[
                      { id: "admin", value: "Admin" },
                      { id: "member", value: "Member" },
                    ]}
                    onChange={props.input_change}
                  />{" "}
                  <small>(optional)</small>
                  <br />
                  <br />
                  <SelectField
                    name={"work_queue_role"}
                    label={"Work Queue Role"}
                    value={props.data.work_queue_role || ""}
                    option={[
                      { id: "admin", value: "Admin" },
                      { id: "member", value: "Member" },
                    ]}
                    onChange={props.input_change}
                  />
                  <small>(optional)</small>
                  <br />
                  <br />
                  <SelectField
                    name={"control_panel"}
                    label={"Control Panel Role"}
                    value={props.data.control_panel || ""}
                    option={[
                      { id: "super_admin", value: "Super Admin" },
                      { id: "none", value: "None" },
                    ]}
                    onChange={props.input_change}
                  />
                  <small>(optional)</small>
                  <br />
                  <br />
                  <SelectField
                    name={"section"}
                    label={"Section"}
                    // value={props.data.section || ""}
                    option={arr}
                    onChange={props.input_change}
                    error={err.section}
                  />
                </div>
              </div>
              <br />
              <InputField
                name={"name"}
                variant={"outlined"}
                label={"Name"}
                value={props.data.name || ""}
                onChange={props.input_change}
                error={err.name}
              />
              <br />
              <br />
              <InputField
                name={"username"}
                variant={"outlined"}
                label={"Username"}
                value={props.data.username || ""}
                onChange={props.input_change}
                error={err.username}
              />
              <br />
              <br />
              <InputField
                type={"password"}
                name={"password"}
                variant={"outlined"}
                label={"Password"}
                value={props.data.password || ""}
                onChange={props.input_change}
                error={err.password}
              />
              <br />
              <br />
              <InputField
                type={"password"}
                name={"cPassword"}
                variant={"outlined"}
                label={"Confirm Password"}
                value={props.data.cPassword || ""}
                onChange={props.input_change}
                error={err.cPassword}
              />
              <br />
              <br />
              <InputField
                name={"username"}
                variant={"outlined"}
                label={"Username"}
                value={props.data.username || ""}
                onChange={props.input_change}
                error={err.username}
              />
              <br />
              <br />
              <InputField
                name={"contact"}
                variant={"outlined"}
                label={"Contact"}
                value={props.data.contact || ""}
                onChange={props.input_change}
                error={err.contact}
              />
              <br />
              <br />
              <InputField
                name={"email"}
                variant={"outlined"}
                label={"Email"}
                value={props.data.email || ""}
                onChange={props.input_change}
                error={err.email}
              />

              <br />
              <br />
              <InputField
                name={"position"}
                variant={"outlined"}
                label={"Position"}
                value={props.data.position || ""}
                onChange={props.input_change}
                error={err.position}
              />

              <br />
              <br />
              <button
                type={"submit"}
                className={"btn btn-primary"}
                style={{ width: "100%", padding: "1vw" }}
              >
                Save
              </button>
            </div>
            <div className={"col-md-3"}></div>
          </div>
        </div>
      </form>
    </div>
  );
}
