import { Button } from "@mui/material";
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DataField,
  EditButton,
  DeleteButton,
  SelectArrayInput,
  ArrayField,
  SingleFieldList,
  ChipField,
  UrlField,
  Count,
  ReferenceManyCount,
  ReferenceManyField,
  ExportButton,
  Show,
  FilterButtonMenuItem,
  ShowButton,
  useRecordContext,
} from "react-admin";
// import useGetCopmanyId from "./hooks/useGetCopmanyId";

const CompaniesList = (props) => {
  const ReportField = ({ source }) => {
    const record = useRecordContext();
    const handleClick = (e) => {
      const companyId = e.target.value.split(",")[0];
      const companyName = e.target.value.split(",")[1];
      const date = new Date().toJSON().slice(0, 10);
      props.downLoadCompanyReport(companyId, companyName, date);
    };
    return (
      <Button
        variant="contained"
        value={`${record && record[source]},${record["name"]}`}
        onClick={handleClick}
      >
        דוח
      </Button>
    );
  };

  return (
    <List>
      <Datagrid>
        <TextField source="id" label="מספר זיהוי" />
        <TextField source="name" label="שם החברה" />
        <TextField source="maxDrivers" label="מספר נהגים מקסימלי" />
        <TextField source="currentDrivers" label="מספר נהגים רשומים" />
        <TextField source="questions" label="שאלות שנבחרו" />
        <UrlField source="link" label="קישור" />
        <EditButton basepath="/companies" />
        <DeleteButton basepath="/companies" />
        <ReportField source="id" />
      </Datagrid>
    </List>
  );
};

export default CompaniesList;
