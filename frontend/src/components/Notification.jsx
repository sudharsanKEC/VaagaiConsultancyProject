import { useEffect } from "react";

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  const isError = type === "error";

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:justify-end sm:px-6">
      <div
        className={[
          "inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium shadow-md",
          isError
            ? "border-red-200 bg-red-50 text-red-700"
            : "border-emerald-200 bg-emerald-50 text-emerald-700",
        ].join(" ")}
      >
        {message}
      </div>
    </div>
  );
};

export default Notification;