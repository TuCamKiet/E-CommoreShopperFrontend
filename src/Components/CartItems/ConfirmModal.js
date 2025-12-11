import React from "react";

const ConfirmModal = ({ open, message, onConfirm, onCancel }) => {
  return open ? (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[60]">
      <div className="bg-white rounded-xl shadow-xl p-[clamp(0.4rem,4vmin,1.5rem)] w-fit">
        <p className="text-[#454545] text-[clamp(0.4rem,4vmin,1.25rem)]">
          {message}
        </p>
        <div className="mt-[clamp(0.4rem,4vmin,1.5rem)] flex justify-end gap-[clamp(0.2rem,2vmin,0.625rem)]">
          <button
            onClick={onCancel}
            className="px-[clamp(0.32rem,3.2vmin,1rem)] py-[clamp(0.16rem,1.6vmin,0.5rem)] rounded-md border-[0.065rem] border-gray-300 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-[clamp(0.32rem,3.2vmin,1rem)] py-[clamp(0.16rem,1.6vmin,0.5rem)] rounded-md bg-[#ff4141] text-[#fff] hover:bg-[#e33939] transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export { ConfirmModal };
