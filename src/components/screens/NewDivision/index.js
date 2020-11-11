// @flow
import React, { useState } from "react";
import InputField from "../../common/textField/InputField";
export default function NewDivision(props) {
  const [error, setError] = useState({});

  const validation = () => {
    let _err = {};
    if (!props._new_division.depshort) {
      _err.depshort = "Short name required";
    }
    if (!props._new_division.department) {
      _err.department = "Department name required";
    }

    setError(_err);
    return Object.keys(_err).length === 0;
  };

  const onSubmit = (e) => {
    
    e.preventDefault();
    if (!validation()) {
      return;
    }
    console.log(props._new_division);
    return props.new_division(props._new_division);
  };
  return (
    <div className={"container"}>
      <h2
        style={{ textAlign: "center", fontWeight: "bold", marginTop: "15vh" }}
      >
        New Division Form
      </h2>

      <br />
      <br />

      <form onSubmit={onSubmit}>
        <div className={"row"}>
          <div className={"col-md-4"}></div>
          <div className={"col-md-4"}>
            <InputField
              name={"depshort"}
              variant={"outlined"}
              label={"Short name"}
              value={props._new_division.depshort}
              onChange={props.input_change}
              error={error.depshort}
            />
            <br />
            <br />
            <InputField
              name={"department"}
              variant={"outlined"}
              label={"Department"}
              value={props._new_division.department}
              onChange={props.input_change}
              error={error.department}
            />
            <br />
            <br />
            <div>
              <button
                type={"submit"}
                className={"btn btn-primary"}
                style={{ width: "100%" }}
              >
                Save
              </button>
            </div>
          </div>
          <div className={"col-md-4"}></div>
        </div>
      </form>
    </div>
  );
}
