import React from "react";

const MobileModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "visible" : "invisible"
      } transition-all duration-150`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="fixed bottom-0 w-full px-4 pb-4 bg-white dark:bg-gray-800 rounded-t-lg shadow-lg">
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-2">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 ml-2">
            Modal Title
          </h2>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
          >
            X
          </button>
        </div>
        <div className="py-4">
          <p className="text-gray-700 dark:text-gray-400">
            This is your mobile modal content. You can replace this with your
            own content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
