import React, { useEffect, useState } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { SelectArrayInput } from "react-admin";
import { nanoid } from "nanoid";
const CompanyCreate = (props) => {
  const questions = props.questions;
  const choices = questions.map((question) => {
    return { id: question.id, name: question.title };
  });

  const company_link = `https://dcschooluidev.onrender.com/home/${nanoid()}`;
  return (
    <Create title={"צור חברה חדשה"} {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="max_drivers" />
        <SelectArrayInput
          source="questions"
          label="בחר שאלות"
          choices={choices}
        />
        <TextInput source="link" disabled defaultValue={company_link} />
      </SimpleForm>
    </Create>
  );
};

export default CompanyCreate;
