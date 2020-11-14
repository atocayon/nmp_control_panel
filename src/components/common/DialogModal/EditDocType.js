// @flow
import React from "react";
import InputField from "../../common/textField/InputField";
export default function EditDocType(props) {
  return (
    <div>
      <i>
        To Edit this Document Type, click the input field and type the changes
        you want to be made and click OK. Changes will reflect automatically to
        other Information Systems here in National Maritime Polytechnic.
      </i>
      <br />
      <br />
      <InputField
        name={"type"}
        onChange={props.input_change}
        variant={"outlined"}
        value={props.data.data.type}
      />
    </div>
  );
}
