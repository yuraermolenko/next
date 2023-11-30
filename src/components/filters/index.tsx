"use client";
import React, { Fragment, useRef, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import Tag from "../tag";
import { usePersistedReducer } from "@/helpers/usePersistedReducer";

const tags = [
  "Tag 1",
  "Tag 2 asdfasfasdf",
  "Tag 3",
  "Tag 4",
  "Tag 5gdgrgr",
  "Tag 6",
  "Tag 7",
  "Tag 8",
  "Tag 9 3r23rf",
  "Tag 10",
];

const initialState: Set<string> = new Set();

function filtersReducer(state = initialState, action: { type: string; payload: string }) {
  const updatedFilters = new Set(state);
  switch (action.type) {
    case "add":
      updatedFilters.add(action.payload);
      return updatedFilters;
    case "remove":
      updatedFilters.delete(action.payload);
      return updatedFilters;
    default:
      return state;
  }
}

const storageKey = 'SELECTED_TAGS'

// use state and dispatch as you normally would.
const Filters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { state: selectedFilters, dispatch } = usePersistedReducer(filtersReducer, initialState, storageKey)
  console.log('selectedFilters',selectedFilters)

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filters = tags.map((filter) => ({
    label: filter,
    isSelected: selectedFilters?.has(filter),
  }));

  const saveButtonRef = useRef(null);

  return (
    <div className="flex items-center overflow-x-auto gap-3">
      <button
        className="flex items-center bg-gray-200 rounded-full px-3 py-1 m-1 hover:bg-gray-300"
        onClick={handleOpenModal}
      >
        <PlusIcon className="h-4 w-4 text-gray-700" />
        <span className="text-gray-700 ml-1 whitespace-nowrap">Add Filter</span>
      </button>
      {Array.from(selectedFilters).map((selectedFilter) => (
        <Tag
          key={selectedFilter}
          selected
          label={selectedFilter}
          onClick={() => dispatch({ type: "remove", payload: selectedFilter })}
        />
      ))}

      <Transition.Root show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={saveButtonRef}
          onClose={handleCloseModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Select filters
                        </Dialog.Title>
                        <div className="mt-2 flex flex-row flex-wrap gap-3">
                          {filters.map(({ label, isSelected }) => (
                            <Tag
                              label={label}
                              selected={isSelected}
                              key={label}
                              onClick={() => dispatch({ type: isSelected ? "remove" : "add", payload: label })}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={handleCloseModal}
                      ref={saveButtonRef}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Filters;
