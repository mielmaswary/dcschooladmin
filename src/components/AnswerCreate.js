import React from "react";
import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

const AnswerCreate = (props) => {
  return (
    <Create title={"צור תשובה חדשה"} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <BooleanInput source="is_correct" label="האם התשובה נכונה?" />
        <TextInput source="text" label="טקסט של התשובה" />
        <TextInput source="question_id" label="לאיזו שאלה לקשר" />
      </SimpleForm>
    </Create>
  );
};

export default AnswerCreate;
