import Button from "./components/Button";
import TriggerTextBox from "./components/TriggerTextBox";
import { useState } from "react";

function App() {
  let [textF1, setTextF1] = useState("");

  function handleButtonClick() {
    setTextF1("new");
  }

  return (
    <>
      <TriggerTextBox value={textF1} />
      <Button onClick={handleButtonClick} />
    </>
  );
}

export default App;
