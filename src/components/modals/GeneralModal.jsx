import React from "react";
import { TbX } from "react-icons/tb";
import Content from "../dashboard/review/Content";

const GeneralModal = ({ close }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[500] modal-overlay w-full overflow-y-scroll backdrop-blur`}
    >
      <div
        className={`modal bg-black  bg-opacity-40 fixed inset-0 flex items-center justify-center`}
      >
        <div
          className={`modal-content bg-white   lg:w-[40%] w-full rounded-xl overflow-y-auto transform transition-transform duration-300 ease-in-out bounce`}
        >
          <div className="flex justify-between border-white border-opacity-10 p-6 items-center">
            <div>
              <p>Review location</p>
            </div>
          </div>
          <div className="w-full justify-center items-center px-4">
            <p className="font-bold">Bonny and Clyde Street, Ajao Estate, Lagos</p>
          </div>
          <div className="p-6 text-black overflow-y-auto">
            <Content close={close}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralModal;
