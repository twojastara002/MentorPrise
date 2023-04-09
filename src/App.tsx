import { useState } from "react";
import TestHTTP from "./components/TestHTTP";

function App() {
  let [textF1, setTextF1] = useState("");

  function handleButtonClick() {
    setTextF1("new");
  }

  return <TestHTTP />;
}

export default App;
