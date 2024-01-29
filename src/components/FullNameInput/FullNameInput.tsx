import React, { useState } from "react";

interface FullNameInputProps {
  onBlur: (value: string) => void;
}

const FullNameInput: React.FC<FullNameInputProps> = ({ onBlur }) => {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = (value: string) => {
    if (value.trim() === "") {
      setError("This field is required");
    } else if (!/^[a-zA-Z0-9 ]+$/.test(value)) {
      setError("Only alphanumeric characters and spaces are allowed");
    } else {
      setError(null);
      onBlur(value)
    }
  };

  return (
    <div className="pb-6 relative font-body">
      <label
        className={`pl-4 block text-tuna font-bold mb-1 ${ error ? "text-error" : "" }`}>
        Name
      </label>
      <input
        type="text"
        className={`appearance-none border-2 w-full py-2 px-3 text-tuna bg-tuna/10 outline-none ${ error ? "border-error" : "focus:border-verdigris"}`}
        placeholder="Insert your name here..."
        onBlur={(e) => handleBlur(e.target.value)}
      />
      <p className="absolute bottom-1 pl-4 text-error font-bold italic text-body2">{error}</p>
    </div>
  );
};

export default FullNameInput;
