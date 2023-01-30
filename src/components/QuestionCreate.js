import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
const QuestionCreate = (props) => {
  return (
    <Create title={"צור שאלה חדשה"} {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="video_url" />
        <TextInput source="text" />
        <TextInput multiline source="answer_summery" />
      </SimpleForm>
    </Create>
  );
};

export default QuestionCreate;
