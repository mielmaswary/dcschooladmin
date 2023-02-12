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
import DriversList from "./components/DriversList";
import DriverCreate from "./components/DriverCreate";
import DriverEdit from "./components/DriverEdit";

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga,
} from "react-admin-firebase";
function App() {
  const [questions, setQuestions] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  //get question from database
  useEffect(() => {
    let fetchUrl = `https://dcschooljsonserverexpress.onrender.com/api/questions`;
    //let fetchUrl = `http://localhost:8000/api/questions`;
    fetch(fetchUrl, {
      headers: {
        Authorization:
          "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYjMxMjdiMjRjZTg2MDJjODEyNDUxZThmZTczZDU4MjkyMDg4N2MiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoi157WtNeZ15DWtdecIC0gTWllbCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BRWRGVHA0aFBIanZ1bVhROWwyYzZTbWVNOTJHT3p2c0JZcHhWWjNNSW1UaVhiND1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9kY3NjaG9vbGFkbWluYXV0aCIsImF1ZCI6ImRjc2Nob29sYWRtaW5hdXRoIiwiYXV0aF90aW1lIjoxNjc2MTQ2ODkwLCJ1c2VyX2lkIjoiTHRTbm5zbXdFSmF6dE5vWHp0R2hTUnZvaTRtMiIsInN1YiI6Ikx0U25uc213RUphenROb1h6dEdoU1J2b2k0bTIiLCJpYXQiOjE2NzYxNDY4OTAsImV4cCI6MTY3NjE1MDQ5MCwiZW1haWwiOiJtaWVsMTk4M0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNzg2MTExNjQwMDMxODE3MjUxMiJdLCJlbWFpbCI6WyJtaWVsMTk4M0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XENQDNi4WHMijH109uFZcdBuU2w2C1RYsT4fFMFId-UjlzGGw-Eyyqyvk3psSfzdY10vMPDfbV_IxdtwkynTL_GBW_QzwL4RBGaOMPFw2oDQvuNqQGan_wc17E_ajxb2UfZ7Nh0b7Tkf6oY46aYDAfu5W5cKlyWovnUaFrydgNm-GF6AqnQOPPSfdZqlcRURlrHnXW2SrYlteK_psbZAoTjNErgJXL86zFGtUZ_I3ohc-3Tot4ia-fmcOj1i7GyfsSDtQOFMY4sVlFbAKXVw3z3tqGbM1MF92z16S5amdE5JiMBIxUJaGA9k_rK6ZgzRj9gbIxvuJIvvkMEffrDZlw",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

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
      <Resource
        name="drivers"
        list={DriversList}
        create={DriverCreate}
        edit={DriverEdit}
      />
    </Admin>
  );
}

export default App;
