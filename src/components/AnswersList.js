import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DataField,
  EditButton,
  DeleteButton,
  BooleanField,
} from "react-admin";

const AnswersList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <BooleanField source="is_correct" />
        <TextField source="text" />
        <TextField source="question_id" />
        <EditButton basepath="/answers" />
        <DeleteButton basepath="/answers" />
      </Datagrid>
    </List>
  );
};

export default AnswersList;
