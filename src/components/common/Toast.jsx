import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function Toast({ toast }) {
  if (!toast) return null;
  const isSuccess = toast.type === "success";
  return (
    <div className={`cc-toast cc-toast-${toast.type}`}>
      {isSuccess ? <CheckCircle size={16} /> : <XCircle size={16} />}
      <span>{toast.msg}</span>
    </div>
  );
}
