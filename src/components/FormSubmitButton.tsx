"use client";

import { useFormStatus } from "react-dom";

const FormSubmitButton = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className={`${className} ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Posting..." : text}
    </button>
  );
};

export default FormSubmitButton;
