import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
const DriverEdit = () => {
  return (
    <Edit title={"ערוך פרטי נהג"}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" label="שם מלא" />
        <TextInput source="companyId" label="מספר מזהה של החברה" />
      </SimpleForm>
    </Edit>
  );
};

export default DriverEdit;
