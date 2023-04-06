import { useState } from "react";

interface triggerTextBoxProps {
  value: string;
}

function TriggerTextBox({ value }: triggerTextBoxProps) {
  return <input type="text" value={value} />;
}

export default TriggerTextBox;
