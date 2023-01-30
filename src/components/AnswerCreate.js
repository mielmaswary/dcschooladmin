import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { BooleanField } from "react-admin";

const AnswerCreate = (props) => {
  return (
    <Create title={"צור תשובה חדשה"} {...props}>
      <SimpleForm>
        <TextInput source="is_correct" />

        <TextInput source="text" />
        <TextInput source="question_id" />
      </SimpleForm>
    </Create>
  );
};

export default AnswerCreate;
