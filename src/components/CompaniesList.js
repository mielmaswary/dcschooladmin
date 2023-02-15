import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DataField,
  EditButton,
  DeleteButton,
  SelectArrayInput,
  ArrayField,
  SingleFieldList,
  ChipField,
  UrlField,
  Count,
  ReferenceManyCount,
  ReferenceManyField,
} from "react-admin";
import { FunctionField } from "react-admin";

const CompaniesList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" label="מספר זיהוי" />
        <TextField source="name" label="שם החברה" />
        <TextField source="maxDrivers" label="מספר נהגים מקסימלי" />
        <TextField source="currentDrivers" label="מספר נהגים רשומים" />
        <TextField source="questions" label="שאלות שנבחרו" />
        <UrlField source="link" label="קישור" />
        <EditButton basepath="/companies" />
        <DeleteButton basepath="/companies" />
      </Datagrid>
    </List>
  );
};

export default CompaniesList;
