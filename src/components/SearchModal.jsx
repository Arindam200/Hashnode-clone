import React, { useState, useEffect } from "react";

export default function SearchModal({ onClose, isDarkTheme }) {
  return (
    <>
      <div className="absolute inset-0 flex items-start justify-center pt-24">
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-gray-700 bg-opacity-50 backdrop-blur"
        ></div>
        <div className=" dark:bg-[#0f172a] z-50 w-7/12 max-w-[950px] overflow-hidden rounded-xl bg-white shadow-lg">
          <header className="p-4 pb-0 pt-6">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search Hashnode"
                className="input-primary text-lg w-full dark:bg-[#0f172a] rounded-full px-5 py-3"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2"></span>
            </div>
          </header>
          <div className="">
            <section>
              <div className="flex min-h-[7rem] items-center justify-center">
                <h1 className="dark:text-[#64748b] flex items-center gap-2 text-center text-lg text-gray-700">
                  <svg
                    className="dark:stroke-text-primary hidden h-5 w-5 stroke-[#64748b] md:block"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L15.8091 15.8091M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                      strokeWidth="1.5px"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fillOpacity="0"
                      className="dark:stroke-[#64748b] text-primary hidden h-4 w-4 stroke-gray-700 md:block"
                    ></path>
                  </svg>
                  Search for tags, people, articles, and more
                </h1>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
