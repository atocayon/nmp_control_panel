import React, { useState } from "react";
import InputField from "../../common/textField/InputField";
export default function NewDocType(props) {
  const [error, setError] = useState({});

  const validation = () => {
    let _err = {};

    if (!props._new_docType.type) _err.type = "Document Type required";

    setError(_err);

    return Object.keys(_err).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validation()) return;

    return props.new_docType(props._new_docType);
  };
  return (
    <div>
      <h2
        style={{ textAlign: "center", fontWeight: "bold", marginTop: "15vh" }}
      >
        New Document Type Form
      </h2>

      <br />
      <br />
      <div className={"row"}>
        <div className={"col-md-4"}></div>
        <div className={"col-md-4"}>
          <form onSubmit={onSubmit}>
            <InputField
              name={"type"}
              label={"Document Type"}
              variant={"outlined"}
              onChange={props.input_change}
              value={props._new_docType.type}
              error={error.type}
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
          </form>
        </div>
        <div className={"col-md-4"}></div>
      </div>
    </div>
  );
}
