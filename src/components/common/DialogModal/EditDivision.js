// @flow
import React from "react";
import InputField from "../../common/textField/InputField";
export default function EditDivision(props) {
  return (
    <div>
      <i>
        To Edit this division, click the input field and type the changes you
        want to made and click OK. Changes will reflect automatically to other
        Information Systems here in National Maritime Polytechnic.
      </i>
      <br />
      <br />
      <InputField
        name={"depshort"}
        label={"Short Name"}
        variant={"outlined"}
        value={props.data.data.depshort}
        onChange={props.input_change}
      />
      <br />
      <br />
      <InputField
        name={"department"}
        label={"Division Name"}
        variant={"outlined"}
        value={props.data.data.department}
        onChange={props.input_change}
      />
    </div>
  );
}
