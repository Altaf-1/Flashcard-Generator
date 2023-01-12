import React from "react";

const Groupcard = ({ groupcarddetails, settermdetails }) => {
  return (
    <div className="p-4">
      <p>Flashcards</p>
      <hr></hr>
      {groupcarddetails?.terms === "" || groupcarddetails?.terms === undefined
        ? ""
        : groupcarddetails.terms.map((allterm, index) => (
            <div className="flex flex-col rounded bg-white pt-1 sm:w-full">
              <button
                className="font-bold"
                onClick={() => {
                  settermdetails(index + 1);
                }}
              >
                {allterm.term}
              </button>
            </div>
          ))}
    </div>
  );
};

export default Groupcard;

