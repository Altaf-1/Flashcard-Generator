import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const TermCards = ({
  groupcarddetails,
  termdetails,
  Previouscard,
  Nextcard,
  popup,
}) => {
  return (
    <>
      <div>
        {groupcarddetails?.terms === "" ||
        groupcarddetails?.terms === undefined ? (
          ""
        ) : (
          <div className="grid sm:grid-rows md:grid-cols-2 items-center bg-white gap-2 p-4">
            <div>
              <img
                className="h-60 w-full rounded-lg"
                src={groupcarddetails.terms[termdetails - 1].img}
                alt=""
              ></img>
            </div>
            <div>
              <p>{groupcarddetails.terms[termdetails - 1].desc}</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 justify-center mt-3">
        <button onClick={Previouscard}>
          <AiOutlineLeft />
        </button>
        <p>{termdetails + "/" + groupcarddetails.terms.length}</p>
        <button onClick={Nextcard}>
          <AiOutlineRight />
        </button>{" "}
      </div>
    </>
  );
};

export default TermCards;
