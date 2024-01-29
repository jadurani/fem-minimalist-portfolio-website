import React, { useState } from "react";

interface MessageTextareaProps {
  onBlur: (value: string) => void;
}

const MessageTextarea: React.FC<MessageTextareaProps> = ({ onBlur }) => {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = (value: string) => {
    if (value.trim() === "") {
      setError("Message is required");
    } else if (value.length > 500) {
      setError("Message is too long (maximum 500 characters)");
    } else {
      setError(null);
      onBlur(value);
    }
  };

  return (
    <div className="pb-4 relative">
      <label
        className={`pl-4 block text-tuna font-header font-bold mb-1 ${
          error ? "text-error" : ""
        }`}
      >
        Message
      </label>
      <textarea
        className={`resize-none appearance-none border-2 w-full py-2 px-3 text-tuna bg-tuna/10 outline-none ${ error ? "border-error" : "focus:border-verdigris"}`}
        placeholder="Hi, I would like to inquire about...."
        onBlur={(e) => handleBlur(e.target.value)}
        rows={4}
      />
      <p className="absolute bottom-1 pl-4 text-error font-bold italic text-body2">{error}</p>
    </div>
  );
};

export default MessageTextarea;
