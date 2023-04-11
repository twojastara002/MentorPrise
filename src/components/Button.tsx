import TriggerTextBox from "./TriggerTextBox";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

function Button({ onClick, label }: ButtonProps) {
  return (
    <button type="button" className="btn btn-outline-primary" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
