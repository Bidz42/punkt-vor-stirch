import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardMessage from "../components/dashboardMessage";

const Dashboard = () => {
  // Options available in model

  const options = [
    { value: 1, text: "Unread" },
    { value: 2, text: "Read" },
    { value: 3, text: "Resolved" },
    { value: 4, text: "Unresolved" },
    { value: 5, text: "Important" },
  ];

  const [openTab, setOpenTab] = useState(1);
  const [selected, setSelected] = useState(options[0].value);
  const[reload, setReload] = useState(false)

 
  // States for tabs

  const [unread, setUnread] = useState([]);
  const [read, setRead] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [unresolved, setUnresolved] = useState([]);
  const [important, setImportant] = useState([]);

  // Axios request to get all messages and filter them by status

  useEffect(() => {
    axios.get("https://drab-red-cuttlefish-boot.cyclic.app/dashboard").then((response) => {
      console.log('new data',response.data)
      setUnread(response.data[0])
      setRead(response.data[1])
      setResolved(response.data[2])
      setUnresolved(response.data[3])
      setImportant(response.data[4])
    })
    .catch(err => console.log(err))
    
  }, [reload]);

  // useEffect((e) => {
  //   setOpenTab(selected);
  // }, [selected]);

  // const handleChange =  (e) => {
  //    setSelected(e.target.value);
  // };


  const unfocused = "inline-block p-2 md:p-4 my-2 md:my-5 w-full bg-pink   hover:text-gray-400 hover:bg-pink/75 active rounded "
  const focused = "inline-block p-2 md:p-4 my-2 md:my-5 w-full bg-white text-pink ring-4 ring-pink hover:text-gray-400 hover:bg-pink/75 active rounded "

  return (
    <div>
      <h1 className="w-full text-2xl md:text-5xl underline decoration-pink mt-10 py-10">
        Welcome to the dashboard
      </h1>
      {/* <div className="md:hidden">
        <select
          id="tabs"
          className="block bg-pink border border-gray-300 text-white sm:text-sm focus:ring-pink/75 focus:border-pink/50  w-full p-2.5 my-3 "
          onChange={handleChange}
          value={selected}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div> */}

      <ul className="flex flex-row text-xs md:text-sm font-medium text-center text-white rounded-lg divide-x divide-gray-200 shadow  ">
        <li className="w-full">
          <button
            className={openTab === 1 ? focused  : unfocused }
            aria-current="page"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
          >
            Unread
          </button>
        </li>

        <li className="w-full">
          <button
            className={openTab === 2 ? focused  : unfocused }
            aria-current="page"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
          >
            Read
          </button>
        </li>
        <li className="w-full">
          <button
            className={openTab === 3 ? focused  : unfocused }
            aria-current="page"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
          >
            Resolved
          </button>
        </li>
        <li className="w-full">
          <button
            className={openTab === 4 ? focused  : unfocused }
            aria-current="page"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(4);
            }}
          >
            Unresolved
          </button>
        </li>
        <li className="w-full">
          <button
            className={openTab === 5 ? focused  : unfocused }
            aria-current="page"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(5);
            }}
          >
            Important
          </button>
        </li>
      </ul>

      <div className="h-full bg-pink/20" id="1">
        <section className={openTab === 1 ? "block" : "hidden"}>
          <DashboardMessage data={unread} reload={reload} setReload={setReload}  />
        </section>
        <section className={openTab === 2 ? "block" : "hidden"}>
          <DashboardMessage data={read} reload={reload} setReload={setReload}/>
        </section>
        <section className={openTab === 3 ? "block" : "hidden"}>
          <DashboardMessage data={resolved} reload={reload} setReload={setReload}/>
        </section>
        <section className={openTab === 4 ? "block" : "hidden"}>
          <DashboardMessage data={unresolved} reload={reload} setReload={setReload}/>
        </section>
        <section className={openTab === 5 ? "block" : "hidden"}>
          <DashboardMessage data={important} reload={reload} setReload={setReload}/>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
