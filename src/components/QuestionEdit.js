import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
const QuestionEdit = (props) => {
  return (
    <Edit title={"ערוך שאלה"} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput source="video_url" />
        <TextInput source="text" />
        <TextInput multiline source="answer_summery" />
      </SimpleForm>
    </Edit>
  );
};

export default QuestionEdit;
