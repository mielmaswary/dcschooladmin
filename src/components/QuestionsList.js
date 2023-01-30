import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DataField,
  EditButton,
  DeleteButton,
} from "react-admin";

const QuestionsList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" label="כותרת" />
        <TextField source="video_url" label="קישור לסרטון" />
        <TextField source="text" label="טקסט השאלה" />
        <TextField source="position" label="מיקום" />
        <TextField source="answer_summery" label="תקציר התשובה" />
        <EditButton basePath="/questions" />
        <DeleteButton basePath="/questions" />
      </Datagrid>
    </List>
  );
};

export default QuestionsList;
