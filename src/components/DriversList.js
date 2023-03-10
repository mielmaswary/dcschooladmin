import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  NumberField,
  DateField,
  FunctionField,
  ReferenceField,
} from "react-admin";

const DriversList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" label="מספר תעודת זהות" />
        <TextField source="name" label="שם מלא" />

        <ReferenceField
          label="שם החברה"
          source="companyId"
          reference="companies"
        >
          <FunctionField render={(record) => record && `${record.name} `} />
        </ReferenceField>
        <NumberField source="level" label="שלב" />
        <TextField source="startTime" label="כניסה ראשונה" />
        <TextField source="endTime" label="כניסה אחרונה" />
        <NumberField
          disabled
          source="mistakes"
          label="שגיאות"
          defaultValue={0}
        />
        <EditButton basepath="/drivers" />

        {/* <DeleteButton basepath="/drivers" /> */}
      </Datagrid>
    </List>
  );
};

export default DriversList;
