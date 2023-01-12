import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FiPrinter, FiDownload } from 'react-icons/fi';
import { HiOutlineShare } from 'react-icons/hi';
import { BiCopy } from 'react-icons/bi';
import { FaShare } from 'react-icons/fa';
import Groupcard from './Groupcard';
import TermCards from './TermCards';
import Modal from 'react-modal';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Carddetails = () => {
  let subtitle;
  let shareUrl = 'https//google.com';

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const location = useLocation();
  const { id } = useParams();
  const [groupcarddetails, setgroupcardetails] = useState('');
  const [termdetails, settermdetails] = useState(1);
  const data = useSelector((state) => state.fcard);
  useEffect(() => {
    const groupfcard = data.filter((groupfcard) => {
      return groupfcard.gid == id;
    });
    setgroupcardetails(groupfcard[0]);
  }, []);

  useEffect(() => {
    console.log(location.href);
  }, [location]);

  function Previouscard() {
    if (termdetails < 2) {
      settermdetails(1);
    } else {
      settermdetails(termdetails - 1);
    }
  }
  function Nextcard() {
    if (termdetails > groupcarddetails.terms.length - 1) {
      settermdetails(groupcarddetails.terms.length);
    } else {
      settermdetails(termdetails + 1);
    }
  }
  return (
    <div className="max-w-[1300px] mx-auto mt-7">
      <div className="grid sm:grid-rows md:grid-cols-4 mt-6 gap-2">
        <div className=" bg-white">
          {groupcarddetails?.terms === '' ||
          groupcarddetails?.terms === undefined ? (
            ''
          ) : (
            <Groupcard
              groupcarddetails={groupcarddetails}
              settermdetails={settermdetails}
            />
          )}
        </div>
        <div className="col-span-2 rounded items-center">
          {groupcarddetails?.terms === '' ||
          groupcarddetails?.terms === undefined ? (
            ''
          ) : (
            <TermCards
              groupcarddetails={groupcarddetails}
              termdetails={termdetails}
              Previouscard={Previouscard}
              Nextcard={Nextcard}
            />
          )}
        </div>
        <div>
          <div className="flex flex-col">
            <div>
              <button
                onClick={openModal}
                className=" flex flex-row bg-white text-blue rounded ml-2 mt-2 items-center pl-2 w-3/4"
              >
                <FaShare />
                <span className="p-1 text-base leading-normal">Share</span>
                <input type="" className="hidden" />
              </button>
            </div>
            <div>
              <button className=" flex flex-row bg-white text-blue rounded ml-2 mt-2 items-center pl-2 w-3/4">
                <FiDownload />
                <span className="p-1 text-base leading-normal">Download</span>
              </button>
            </div>
            <div>
              <label className=" flex flex-row bg-white text-blue rounded ml-2 mt-2 items-center pl-2 w-3/4">
                <FiPrinter />
                <span className="p-1 text-base leading-normal">Print</span>
                <input type="" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="w-96 rounded p-5">
            <h3 className="font-bold"> Share</h3>
            <div className="mt-3 flex gap-3">
              <h4 className="border border-black pl-3 pr-3">
                Link: https://www.almabetter.com/
              </h4>
              <BiCopy />
              <HiOutlineShare />
            </div>
            <div className="flex gap-3 mt-5 justify-around">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} />
              </FacebookShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={40} />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={40} />
              </WhatsappShareButton>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={40} />
              </TwitterShareButton>
              <EmailShareButton url={shareUrl}>
                <EmailIcon size={40} />
              </EmailShareButton>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Carddetails;
