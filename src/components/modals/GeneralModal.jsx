import React from "react";
import { TbX } from "react-icons/tb";

const GeneralModal = ({ heading, close, handleClose, content, height }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[500] modal-overlay w-full overflow-y-scroll backdrop-blur`}
    >
      <div
        onClick={handleClose}
        className={`modal bg-black  bg-opacity-40 fixed inset-0 flex items-center justify-center`}
      >
        <div
          className={`modal-content bg-[var(--primary-color)] ${height}  lg:w-[40%] w-full rounded-3xl overflow-y-auto transform transition-transform duration-300 ease-in-out bounce`}
        >
          <div className="flex justify-between border-b border-white border-opacity-10 p-6 items-center">
            <h2 className="text-[var(--text-color)] capitalize">{heading}</h2>
            <span
              onClick={close}
              className="text-xl cursor-pointer text-[var(--text-color)]"
            >
              <TbX />
            </span>
          </div>

          <div className="border-b border-[var(--border-color)]"></div>
          <div className="p-6 text-[var(--faded-text)] overflow-y-auto">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralModal;
