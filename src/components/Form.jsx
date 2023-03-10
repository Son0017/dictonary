import React, { useState } from "react";
import { FormStyled, InputStyled } from "../styeled";
import search from "../../images/search.svg";
// import useFetch from "../hooks/useFetch";

function FormCom({ mode, setUrl }) {
  const [inputVal, setInputVal] = useState("");
  const [errorStle, setError] = useState(false);
  return (
    <>
      <FormStyled
        mode={mode}
        onSubmit={(e) => {
          e.preventDefault();
          if (inputVal.trim() !== "") {
            setError(false);
            setUrl(inputVal);
          } else {
            setError(true);
          }
          setInputVal("");
        }}
      >
        <InputStyled
          type="text"
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          value={inputVal}
          mode={mode}
          errorStle={errorStle}
        />
        <button>
          <img src={search} alt="" />
        </button>
        {errorStle && <span>Whoops, can’t be empty…</span>}
      </FormStyled>
    </>
  );
}

export default FormCom;
