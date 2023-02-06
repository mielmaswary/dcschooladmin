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
} from "react-admin";

const CompaniesList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="max_drivers" />
        <TextField source="questions" />
        <TextField source="link" />
        <EditButton basepath="/companies" />
        <DeleteButton basepath="/companies" />
      </Datagrid>
    </List>
  );
};

export default CompaniesList;
