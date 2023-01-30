import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import QuestionsList from "./components/QuestionsList";
import AnswersList from "./components/AnswersList";
import QuestionCreate from "./components/QuestionCreate";
import QuestionEdit from "./components/QuestionEdit";
import AnswerCreate from "./components/AnswerCreate";
import AnswerEdit from "./components/AnswerEdit";
import CompaniesList from "./components/CompaniesList";
import CompanyCreate from "./components/CompanyCreate";
import CompanyEdit from "./components/CompanyEdit";

function App() {
  return (
    <Admin
      dataProvider={restProvider("https://dcschooljsonserver.onrender.com")}
    >
      <Resource
        name="questions"
        list={QuestionsList}
        create={QuestionCreate}
        edit={QuestionEdit}
      />
      <Resource
        name="answers"
        list={AnswersList}
        create={AnswerCreate}
        edit={AnswerEdit}
      />
      <Resource
        name="companies"
        list={CompaniesList}
        create={CompanyCreate}
        edit={CompanyEdit}
      />
    </Admin>
  );
}

export default App;
