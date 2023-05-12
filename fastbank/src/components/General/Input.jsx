import { useEffect, useState } from "react";

const Input = ({ texto, tipo, obrigatorio, maxLength, act, valuei }) => {
  const [inputValue, setInputValue] = useState(valuei);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setInputValue(valuei);
  }, [valuei])

  function handleInputChange(event) {
    if (tipo == 'num' || tipo == Number) {
      const { value } = event.target;
      const onlyNums = value.replace(/[^0-9]/g, ""); // remove qualquer caractere que não seja número
      if (value === onlyNums || value.includes("(")|| value.includes(")")|| value.includes("-") ) { // verifica se o valor inserido é um número
        if (value.length <= maxLength) {
          setInputValue(onlyNums);
          setErrorMsg("");
        } else {
          setInputValue(value.substring(0, maxLength)); // limita o comprimento do valor inserido
        }
      } else {
        setErrorMsg("Insira apenas números");
        setTimeout(() => {
          setErrorMsg("");
        }, 2000); // timer de 2 segundos para remover a mensagem de erro
      }
    }
    else if (tipo == 'email') {
      const { value } = event.target;

      if (!value.includes("@")) {
        setErrorMsg("Invalid Email");
      }

      // if (!value.includes("gmail" || "yahoo" || ".com" || ".org" || ".edu" || "outlook")) {
      //   setErrorMsg("Invalid Email");
      // }
      else {
        setErrorMsg("");
      }
    }
    else {
      setInputValue(event.target.value);
    }
    act && act(event); // chama a função passada por prop, se ela existir
  }


  let inputWidth = "w-24";
  if (maxLength === 4) {
    inputWidth = "w-16";
  } else if (maxLength === 7) {
    inputWidth = "w-28";
  } else if (maxLength === 26 ) {
    inputWidth = "w-36";
  } else if (maxLength === 1) {
    inputWidth = "w-8";
  } else {
    inputWidth = "w-2/3";
  }

  return (
    <>
      <input
        type={tipo}
        value={inputValue}
        onChange={act}
        onInput={handleInputChange}
        required={obrigatorio}
        className={`rounded-full m-4 p-[3px] ${inputWidth} items-center justify-center text-center border-2`}
        placeholder={texto}
        maxLength={maxLength}
      />
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      {/* <p>O valor é: {inputValue}</p> */}
    </>
  );
};

export default Input;

