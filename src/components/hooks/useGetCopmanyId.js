import React from "react";
import { useRecordContext } from "react-admin";

const useGetCopmanyId = (source) => {
  console.log(
    "🚀 ~ file: useGetCopmanyId.js:5 ~ useGetCopmanyId ~ source:",
    source
  );
  const record = useRecordContext();
  return record && record[source];
};

export default useGetCopmanyId;
