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
import * as XLSX from "xlsx";

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga,
} from "react-admin-firebase";

const dev = false;
const rootFetchUrl = dev
  ? "http://localhost:8000"
  : "https://dcschooljsonserverexpress.onrender.com";
function App() {
  const [questions, setQuestions] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  //get question from database
  useEffect(() => {
    let fetchUrl = `${rootFetchUrl}/api/questions`;
    fetch(fetchUrl, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, [token]);

  // //get company drivers count
  // useEffect(() => {
  //   let fetchUrl = `${rootFetchUrl}/api/company/`;
  //   fetch(fetchUrl, {
  //     headers: {
  //       Authorization: token,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuestions(data);
  //     });
  // }, [token]);

  //company report
  const downloadExcel = (data, companyName, companyQuestions, date) => {
    data.forEach((obj) => (obj["שם החברה"] = companyName));
    data.forEach((obj) => (obj["סהכ שאלות"] = companyQuestions));
    const worksheet = XLSX.utils.json_to_sheet(data, { alignment: "center" });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${companyName}${date}.xlsx`);
  };

  const changeKeysToHebrew = (data) => {
    const newData = data.map((obj) => {
      const hebrewKeysData = {};
      hebrewKeysData["שם הנהג"] = obj.name;
      hebrewKeysData["מספר זיהוי"] = obj.id;
      hebrewKeysData["שם החברה"] = obj.companyId;
      hebrewKeysData["שאלה"] = obj.level;
      hebrewKeysData["סהכ שאלות"] = obj.companyQuestions;
      hebrewKeysData["כניסה ראשונה"] = obj.startTime;
      hebrewKeysData["כניסה אחרונה"] = obj.endTime;
      hebrewKeysData["שגיאות"] = obj.mistakes;

      return hebrewKeysData;
    });
    return newData;
  };

  const downLoadCompanyReport = (
    companyId,
    companyName,
    companyQuestions,
    date
  ) => {
    let fetchUrl = `${rootFetchUrl}/api/drivers?companyId=${companyId}`;
    fetch(fetchUrl, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const hebrewDataKeys = changeKeysToHebrew(data);
        downloadExcel(hebrewDataKeys, companyName, companyQuestions, date);
      });
  };

  //fire base
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
      setToken(user._delegate.accessToken);
      localStorage.setItem("token", user._delegate.accessToken);
    });
  getUser();

  const fetchJson = (url, options = {}) => {
    options.user = {
      authenticated: true,
      token,
    };
    return fetchUtils.fetchJson(url, options);
  };

  const dataProvider = restProvider(
    dev ? "http://localhost:3000/api" : "/api",
    fetchJson
  );
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
        list={<CompaniesList downLoadCompanyReport={downLoadCompanyReport} />}
        create={<CompanyCreate questions={questions} dev={dev} />}
        edit={<CompanyEdit questions={questions} />}
      />
      <Resource
        name="drivers"
        list={DriversList}
        // create={DriverCreate}
        // edit={DriverEdit}
      />
    </Admin>
  );
}

export default App;
