import React, { useEffect, useState } from "react";
import {
  Create,
  NumberField,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { Count } from "react-admin";

import { SelectArrayInput } from "react-admin";
import { nanoid } from "nanoid";
const CompanyCreate = (props) => {
  const dev = true;
  const rootUrl = dev
    ? "http://localhost:3000"
    : "https://dcschooluidev.onrender.com";
  const questions = props.questions;

  const choices =
    questions &&
    questions.map((question) => {
      return { id: question.id, name: question.title };
    });

  const company_link = `${rootUrl}/home/?companyId=${nanoid()}${nanoid()}`;
  const company_id = company_link.split("companyId=")[1];
  return (
    <Create title={"צור חברה חדשה"} {...props}>
      <SimpleForm>
        <TextInput source="id" disabled defaultValue={company_id} />
        <TextInput source="name" />
        <TextInput source="maxDrivers" />
        <NumberInput disabled source="currentDrivers" defaultValue={0} />
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
