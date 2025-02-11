import React from "react";
import { useState } from "react";
// npm uuid 自動生成獨立id
import { v4 } from "uuid";
import   'react-bootstrap'


const Edit = ({ add,submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [dateS, setDateS] = useState("");
  function dateSChange(e) {
    setDateS(e.target.value);
  }

  const [dateE, setDateE] = useState("");
  function dateEChange(e) {
    setDateE(e.target.value);
  }

  console.log(dateS, dateE, note);

  function addItem() {
      submittingStatus.current=true
    add(function (prevData) {
      return [
        {
          id: v4(),
          dateS,
          dateE,
          note,
        },
        ...prevData,

      ];
    });
  }
  return (
    <>
      <h1>經期紀錄</h1>
      <div className="d-flex">
      <div className="w-50">
      <p className="mt-4">開始日期</p>
      <input
        type="date"
        className="input w-100"
        value={dateS}
        onChange={dateSChange}
      />
      </div>
      <div className="w-50 ml-5">
      <p className="mt-4 ">結束日期</p>
      <input
        type="date"
        className="input w-100"
        value={dateE}
        onChange={dateEChange}
      />
      </div>
      </div>
      <p className="mt-4">症狀或其他紀錄</p>
      <textarea type="text" rows="3" className="input w-100" value={note} onChange={noteChange} />

      <button onClick={addItem} className="add">
        送出
      </button>
    </>
  );
};

export default Edit;
