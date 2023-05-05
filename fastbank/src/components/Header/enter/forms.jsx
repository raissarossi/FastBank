import Input from "../../General/Input";
import { useRef } from "react";

const Forms = (props) => {
  const digitInput = useRef(null);

  function handleAccountInput(event) {
    const { value } = event.target;
    if (value.length == 7) {
      digitInput.current.focus();
    }
  }

  return (
    <div className="bg-light-blue3 dark:bg-black">
      <form className="bg-light-blue3 dark:bg-black flex items-center">
        <Input
          tipo={'num'}
          obrigatorio={true}
          texto={'Agency'}
          maxLength={4}
        />
        <Input
          tipo={'num'}
          obrigatorio={true}
          texto={'Account'}
          maxLength={7}
          onChange={handleAccountInput}
        />
        <h1 className="text-white">-</h1>
        <Input
          tipo={'num'}
          obrigatorio={true}
          texto={'Digit'}
          maxLength={1}
          ref={digitInput}
        />
        <button className="text-white">
          <h1 className="border border-white rounded-lg ml-5 pl-2 pr-2 hover:border-2">OK</h1>
        </button>
      </form>
    </div>
  )
}

export default Forms;
