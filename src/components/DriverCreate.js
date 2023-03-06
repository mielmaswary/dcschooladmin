import React from "react";
import {
  BooleanInput,
  Create,
  NumberField,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const DriverCreate = (props) => {
  return (
    <Create title={"צור נהג חדש"} {...props}>
      <SimpleForm>
        <TextInput source="id" label="מספר תעודת זהות" />
        <TextInput source="name" label="שם מלא" />
        <TextInput source="companyId" label="מספר מזהה של החברה" />
        <TextInput source="startTime" label="כניסה ראשונה" defaultValue={1} />
        <TextInput source="endTime" label="כניסה אחרונה" defaultValue={1} />
        <NumberInput disabled source="mistakes" defaultValue={0} />
        <NumberInput disabled source="level" defaultValue={0} />
      </SimpleForm>
    </Create>
  );
};

export default DriverCreate;
