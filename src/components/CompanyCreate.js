import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { SelectArrayInput } from "react-admin";

const CompanyCreate = (props) => {
  const questionsChoices = [
    { id: "admin", name: "Admin" },
    { id: "u001", name: "Editor" },
    { id: "u002", name: "Moderator" },
    { id: "u003", name: "Reviewer" },
  ];
  return (
    <Create title={"צור חברה חדשה"} {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <SelectArrayInput source="questions" choices={questionsChoices} />
      </SimpleForm>
    </Create>
  );
};

export default CompanyCreate;
