import React, { useState } from "react";
import axios from "axios";

const DashboardMessage = ({ data, reload, setReload }) => {
  const [toggle, setToggle] = useState([false, ""]);
  const [chosenMessage, setChosenMessage] = useState({});

  const [targetValueEdit, setTargetValueEdit] = useState("");

  // select Message and Set Toggler
  const handleShowMessage = async (e, id) => {
    e.preventDefault();
    await setToggle([true, id]);
    setChosenMessage(data.find((item) => item._id === id));
  };

  const toggleFalse = () => {
    setToggle([false, ""]);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const id = chosenMessage._id;

    axios
      .post("https://drab-red-cuttlefish-boot.cyclic.app/dashboard/edit", { id, targetValueEdit })
      .then((response) => {
        console.log("edit response", response.data);
        setReload(!reload); //closest adds to new tab but doesnt refresh tabs and adds +1
        setToggle([false, ""])
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    const id = chosenMessage._id;

    axios
      .delete(`https://drab-red-cuttlefish-boot.cyclic.app/dashboard/${id}`)
      .then((response) => {
        console.log(response)
        setReload(!reload)
        setToggle([false, ""])
      })
      .catch((err) => console.log(err));
   
  };

  return (
    <div className="flex flex-col gap-5 md:gap-0 md:flex-row p-4 h-screen">
      <div className="md:w-1/3 w-full overflow-y-scroll border-b-4 border-black h-2/4 md:h-full ">
        <h1 className="text-base md:text-4xl p-4 underline decoration-pink">
          Messages
        </h1>
        <ul className="border-t-2 border-pink">
          {data?.map((message) => {
            return (
              <li
                key={message._id}
                onClick={(e) => handleShowMessage(e, message._id)}
              >
                <div className="flex flex-col p-0 md:p-2 align-left border-b-2 border-pink">
                  <div className="flex flex-row md:gap-5 p-1 text-left">
                    <h3 className="font-semibold text-xs md:text-base">
                      From: <span className="font-normal">{message.email}</span>
                    </h3>
                  </div>

                  <div className="flex flex-row md:gap-5 p-1 text-left">
                    <h3 className="font-semibold text-xs md:text-base">
                      Subject:{" "}
                      <span className="font-normal">{message.subject}</span>
                    </h3>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {toggle[0] && (
        <div className="md:border-2 md:border-black p-0 md:p-5 m-2 w-full h-full md:w-2/3 md:flex flex-col relative justify-center align-center overflow-y-scroll">
          <svg
            onClick={toggleFalse}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute top-5 right-2 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute top-5 right-10 hover:cursor-pointer"
            onClick={handleDelete}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>

          <form className="absolute flex justify-center top-0 right-28 p-4 text-xs md:text-sm" onSubmit={handleEdit}>
            <fieldset>
              <legend className="font-semibold">Select a mailbox to move to:</legend>
              <div className="flex flex-row p-1" >
                  <input
                  className="hover:cursor-pointer mr-1"
                  type="radio"
                  id="status2"
                  name="status"
                  onClick={(e) => setTargetValueEdit("unread")}
                />
                <label className="mr-3" for="status2">Unread</label>
                <input
                  className="hover:cursor-pointer mr-1"
                  type="radio"
                  id="status1"
                  name="status"
                  onClick={(e) => setTargetValueEdit("read")}
                />
                <label className="mr-3" for="status1">Read</label>
                <input
                  className="hover:cursor-pointer mr-1"
                  type="radio"
                  id="status3"
                  name="status"
                  onClick={(e) => setTargetValueEdit("resolved")}
                />
                <label className="mr-3" for="status3">Resolved</label>
              </div>
              <div className="flex flex-row p-1">
                <input
                  className="hover:cursor-pointer mr-1"
                  type="radio"
                  id="status4"
                  name="status"
                  onClick={(e) => setTargetValueEdit("unresolved")}
                />
                <label className="mr-3" for="status4">Unresolved</label>

                <input
                  className="hover:cursor-pointer mr-1"
                  type="radio"
                  id="status5"
                  name="status"
                  onClick={(e) => setTargetValueEdit("important")}
                />
                <label className="mr-3" for="status5">Important</label>
              </div>
              <div>
                <button type="submit" className="leading-none text-white p-2 bg-pink rounded hover:bg-pink focus:ring-2 focus:ring-offset-2 focus:ring-pink focus:outline-none">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

<div className="flex flex-col text-sm md:text-base text-left mt-10" >
        <div className="border-b-2 border-pink absolute top-32 w-full">
          <h1>
            <span className="font-medium underline decoration-pink">Name</span>:{" "}{chosenMessage?.name} {chosenMessage?.lastName}
          </h1> 
          <h1>
              <span className="font-medium underline decoration-pink">Email:</span>{" "}
              {chosenMessage?.email}
            </h1>
            <h1>
              <span className="font-medium underline decoration-pink">Phone:</span>{" "}
              {chosenMessage?.phone}
            </h1>
            </div>

            <div className="flex flex-col text-sm md:text-base text-left absolute top-52 ">
          <h2 className="border-b-2 border-pink">
            <span className="font-medium underline decoration-pink ">Subject:</span>{" "}
            {chosenMessage?.subject}
          </h2>
          </div>

          <div className="flex flex-col text-sm md:text-base text-left absolute top-80 mt-5">
          <h1>{chosenMessage?.message}</h1>
          </div>
           </div>

        </div>
      )}




    </div>
  );
};

export default DashboardMessage;
