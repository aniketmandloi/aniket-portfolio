import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="gm-button inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-black px-6 text-lg font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : (
        <>
          Send message
          <FaPaperPlane className="text-xs" />
        </>
      )}
    </button>
  );
}
