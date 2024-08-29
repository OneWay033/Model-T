
import React from "react";

export default function Modal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <p>Are you sure you want to delete this item?</p>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
    
  );
}
