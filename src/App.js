//react-admin imports
import React, { useEffect, useState } from "react";
import { fetchUtils, Admin, Resource, Login } from "react-admin";
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

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga,
} from "react-admin-firebase";
function App() {
  //get question from database
  const [questions, setQuestions] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const firebaseConfig = {
    apiKey: "AIzaSyBtWNCGeJPgZGB-XpPjHyzav2_Nj1b4OSA",
    authDomain: "dcschooladminauth.firebaseapp.com",
    projectId: "dcschooladminauth",
    storageBucket: "dcschooladminauth.appspot.com",
    messagingSenderId: "467232741076",
    appId: "1:467232741076:web:98887dd1682dcbc87d4d41",
    measurementId: "G-1837KRFH94",
  };
  const options = {
    logging: true,
    rootRef: "root_collection/some_document",
  };
  const authProvider = FirebaseAuthProvider(firebaseConfig, options);
  const getUser = async () =>
    await authProvider.checkAuth().then((user) => {
      localStorage.setItem("token", token);
      setToken(user._delegate.accessToken);
    });
  getUser();
  const fetchJson = (url, options = {}) => {
    options.user = {
      authenticated: true,
      token,
    };
    return fetchUtils.fetchJson(url, options);
  };

  // const dataProvider = restProvider("http://localhost:3000/api", fetchJson);
  const dataProvider = restProvider("/api", fetchJson);
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
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
        create={<CompanyCreate questions={questions} />}
        edit={<CompanyEdit questions={questions} />}
      />
    </Admin>
  );
}

export default App;
