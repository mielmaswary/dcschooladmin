import React from "react";
import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";
const AnswerEdit = (props) => {
  return (
    <Edit title={"ערוך תשובה"} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <BooleanInput source="is_correct" />
        <TextInput source="text" />
        <TextInput source="question_id" />
      </SimpleForm>
    </Edit>
  );
};

export default AnswerEdit;
