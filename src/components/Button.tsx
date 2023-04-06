import TriggerTextBox from "./TriggerTextBox";

interface ButtonProps {
  onClick: () => void;
}

function Button({ onClick }: ButtonProps) {
  return (
    <button type="button" className="btn btn-outline-primary" onClick={onClick}>
      Update
    </button>
  );
}

export default Button;
