import { useEffect, useState } from "react";

const Input = ({ texto, tipo, obrigatorio, maxLength, act, valuei, sign }) => {
  const [inputValue, setInputValue] = useState(valuei);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    setInputValue(valuei);
  }, [valuei])

  function handleInputChange(event) {
    if (tipo == 'num' || tipo == Number) {
      const { value } = event.target;
      const onlyNums = value.replace(/[^0-9]/g, ""); // remove qualquer caractere que não seja número
      if (value === onlyNums || value.includes("(") || value.includes(")") || value.includes("-")) { // verifica se o valor inserido é um número
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

      if (value.length > 0 && !value.includes("@")) {
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
  } else if (maxLength === 26) {
    inputWidth = "w-36";
  } else if (maxLength === 1) {
    inputWidth = "w-8";
  } else if (texto == 'Number...' || texto == 'Complement...') {
    inputWidth = "w-5/5";
  } else {
    inputWidth = "w-full";
  }


  if (sign == "in") {
    return (
      <div>
        <input
          type={tipo}
          value={inputValue}
          onChange={act}
          onInput={handleInputChange}
          required={obrigatorio}
          className={`rounded-full p-[3px] sm:p-2 ${inputWidth} items-center justify-center text-centerdark:bg-dark-grey3 dark:border-none`}
          placeholder={texto}
          maxLength={maxLength}
        />
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      </div>
    )
  }

  if (sign == "up") {
    return (
      <div className="w-11/12 flex items-center justify-center">
        <div className="w-full flex flex-col items-start">
          <h2 className="mt-2 sm:mt-8 text-sm sm:text-lg lg:text-xl">{texto}</h2>
          <input
            type={tipo}
            value={inputValue}
            onChange={act}
            onInput={handleInputChange}
            required={obrigatorio}
            className={`py-[2px] sm:py-1 ${inputWidth} items-center justify-center text-start border-b sm:border-b-[3px] border-light-blue4 placeholder:text-light-grey1
        dark:bg-black dark:border-white dark:placeholder:text-dark-grey2 placeholder:text-xs sm:placeholder:text-sm lg:placeholder:text-lg text-xs sm:text-sm lg:text-lg dark:text-white`}
            placeholder={texto}
            maxLength={maxLength}
          />
          {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        </div>
      </div>
    )
  }

};

export default Input;

