import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const DriversList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" label="מספר תעודת זהות" />
        <TextField source="name" label="שם מלא" />
        <TextField disabled source="companyId" label="מספר מזהה של החברה" />
        <EditButton basepath="/questions" />
        <DeleteButton basepath="/questions" />
      </Datagrid>
    </List>
  );
};

export default DriversList;
