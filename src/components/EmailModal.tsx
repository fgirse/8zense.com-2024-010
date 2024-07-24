"use client"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import EmailMessage from "@/app/api/emails/EmailMessage";
import { ClientAnimationWrapper } from "./ClientAnimationWrapper";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4 py-12 bg-transparent grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-b from-zenseSignal2 to-zenseSignal2/50 text-white text-3xl shadow-sm shadow-slate-700 font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        sende email Nachricht
      </button>
      <EmailModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const EmailModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ClientAnimationWrapper>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/50 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-slate-900 to-grey-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-zenseSignal2 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <EmailMessage name={""} email={""} message={""}/>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white/10 hover:bg-white/40 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  zurück
                </button>
                {/*<button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
      </button>*/}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </ClientAnimationWrapper>
  );
};

export default ExampleWrapper;