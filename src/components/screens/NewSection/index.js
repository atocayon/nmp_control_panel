import React, { useState } from "react";
import InputField from "../../common/textField/InputField";
import SelectField from "../../common/SelectField";
export default function NewSection(props) {
  const [error, setError] = useState({});
  let divisions = [];

  for (let i of props.divisions) {
    divisions.push({ id: i.depid, value: i.department });
  }

  const validation = () => {
    let _err = {};
    if (!props._new_section.divid) _err.divid = "Division required";
    if (!props._new_section.section) _err.section = "Section name required";
    if (!props._new_section.secshort) _err.secshort = "Short name required";

    setError(_err);
    return Object.keys(_err).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validation()) return;

    return props.new_section(props._new_section);
  };

  return (
    <div>
      <h2
        style={{ textAlign: "center", fontWeight: "bold", marginTop: "15vh" }}
      >
        New Section Form
      </h2>

      <form onSubmit={onSubmit}>
        <div className={"row"}>
          <div className={"col-md-4"}></div>
          <div className={"col-md-4"}>
            <br />
            <br />
            <select
              onChange={props.input_change}
              name={"divid"}
              className={"form-control"}
            >
              <option value={""}>Department/ Division</option>
              {divisions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.value}
                </option>
              ))}
            </select>

            <br />
            <br />
            <InputField
              name={"section"}
              label={"Section"}
              variant={"outlined"}
              value={props._new_section.section}
              onChange={props.input_change}
            />
            <br />
            <br />
            <InputField
              name={"secshort"}
              label={"Section Initial/Short Name"}
              variant={"outlined"}
              value={props._new_section.secshort}
              onChange={props.input_change}
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
