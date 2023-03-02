import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  NumberField,
  DateField,
} from "react-admin";

const DriversList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" label="מספר תעודת זהות" />
        <TextField source="name" label="שם מלא" />
        <TextField disabled source="companyId" label="מספר מזהה של החברה" />
        <NumberField source="level" label="שלב" />
        <TextField source="startTime" label="כניסה ראשונה" defaultValue={1} />
        <TextField source="endTime" label="כניסה אחרונה" defaultValue={1} />
        <EditButton basepath="/drivers" />

        {/* <DeleteButton basepath="/drivers" /> */}
      </Datagrid>
    </List>
  );
};

export default DriversList;
