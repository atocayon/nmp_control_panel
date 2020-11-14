// @flow
import React from "react";
import InputField from "../../common/textField/InputField";
import SelectField from "../../common/SelectField";
export default function EditSection(props) {
  return (
    <div>
      <i>
        To Edit this section, click the input field and type the changes you
        want to be made and click OK. Changes will reflect automatically to
        other Information Systems here in National Maritime Polytechnic.
      </i>
      <br />
      <br />
      <SelectField
        name={"divid"}
        label={"Department/ Division"}
        variant={"outlined"}
        value={props.data.data.department}
        onChange={props.input_change}
        option={props.divisions}
      />
      <br />
      <br />
      <InputField
        name={"section"}
        label={"Section Name"}
        variant={"outlined"}
        value={props.data.data.section}
        onChange={props.input_change}
      />
      <br />
      <br />
      <InputField
        name={"secshort"}
        label={"Section Initial/Short Name"}
        variant={"outlined"}
        value={props.data.data.secshort}
        onChange={props.input_change}
      />
    </div>
  );
}
