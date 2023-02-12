import React, { useEffect, useState } from "react";
import { Edit, NumberField, SimpleForm, TextInput } from "react-admin";
import { SelectArrayInput } from "react-admin";

const CompanyEdit = (props) => {
  const questions = props.questions;
  const choices = questions.map((question) => {
    return { id: question.id, name: question.title };
  });
  console.log("🚀 ~ file: CompanyEdit.js:10 ~ choices ~ choices", choices);

  return (
    <Edit title={"ערוך פרטי חברה"} {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="max_drivers" />
        <NumberField source="driversCount" />
        <SelectArrayInput
          source="questions"
          label="בחר שאלות"
          choices={choices}
        />
      </SimpleForm>
    </Edit>
  );
};

export default CompanyEdit;
