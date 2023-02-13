import React from "react";
import { BooleanInput, Create, NumberField, NumberInput, SimpleForm, TextInput } from "react-admin";

const DriverCreate = (props) => {
  return (
    <Create title={"צור נהג חדש"} {...props}>
      <SimpleForm>
        <TextInput source="id" label="מספר תעודת זהות" />
        <TextInput source="name" label="שם מלא" />
        <TextInput source="companyId" label="מספר מזהה של החברה" />
        <NumberInput disabled source="level" defaultValue={0} />
      </SimpleForm>
    </Create>
  );
};

export default DriverCreate;
