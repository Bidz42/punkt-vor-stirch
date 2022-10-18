
import React, { useEffect, useState, useContext } from "react";
import axios from 'axios'
import { AuthContext  } from "../context/auth.context";

const Team = () => {

  const {isLoggedIn} = useContext(AuthContext)

  const [showSocial, setShowSocial] = useState([false, ""]);
  const [name, setName] = useState("");
  const [position, setPosition] = useState([]);
  const [image, setImage] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  
  const handleHover = (member) => {
    console.log(showSocial);
    if (!showSocial[0]) {
      setShowSocial([true, member]);
    }
  };

  useEffect(() => {

    axios.get("https://drab-red-cuttlefish-boot.cyclic.app/team")
      .then(response => {

        setName(response.data.name)
        setPosition(response.data.position)
        setImage(response.data.image)
        setTwitter(response.data.twitter)
        setLinkedin(response.data.linkedin)
      })

  },[name])



  const handleSubmit = (e) => {
    e.target.preventDefault()

    const teamData = new FormData()
      teamData.append("name", name)
      teamData.append("position", position)
      teamData.append("image", e.target.image.files[0])
      teamData.append("twitter", twitter)
      teamData.append("linkedin", linkedin)
    
    axios.post(`https://drab-red-cuttlefish-boot.cyclic.app/team` , teamData)
      .then(response => {
        setName(response.data.name)
        setPosition(response.data.position)
        setImage(response.data.image)
        setTwitter(response.data.twitter)
        setLinkedin(response.data.linkedin)
        
      })
  }

  return (
    <div className="flex flex-col text-center h-full md:h-screen mb-5 pb-5" id="team">
      <h1 className="text-4xl md:text-5xl font-semibold underline decoration-pink">Hinter den Kulissen</h1>
      <p className="text-center p-10 lg:px-96">
        Wir sind ein Team aus Expertinnen mit langjähriger Erfahrung in
        Forschung, Innovation und Technologie mit Schwerpunkt Mobilität. Wir
        verstehen uns als Begleiterinnen und Ermöglicher. Auf der Reise wollen
        wir alle Bedürfnisse - soziologisch, ökonomisch und ökologisch -
        mitnehmen und nutzbar machen.
      </p>

      <div className="flex flex-col md:flex-row md:gap-10  items-center mt-24 px-10 md:m-auto  ">

        <div
          onMouseOver={(e) => handleHover("Lina")}
          onMouseLeave={(e) => setShowSocial([false, ""])}
        >
        <div className="overflow-hidden w-80 md:w-56  lg:w-80">

          <img
            src={process.env.PUBLIC_URL + "/pvs_Team_Lina_Portrait.jpg"}
            alt="Lina MOSSHAMMER"
            className={
              showSocial[0] && showSocial[1] === "Lina"
                ? " overflow-hidden grayscale scale-110 transition-all duration-500 ease-in-out  "  
                : "	"
            }
          />
        </div>
          <h2 className="font-bold	text-lg">Lina MOSSHAMMER</h2>
          <h3 className="text-pink">Chief Executive Officer</h3>
          <h3 className="text-pink">Co-Founder</h3>

          {showSocial[0] && showSocial[1] === "Lina" && (
            <div className="relative inset-x-3 bottom-80  flex  ">
              <a target="_blank" href="https://www.linkedin.com/in/lina-mosshammer/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="text-white fill-white  w-5 absolute right-2/4 "
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>

              <a target="_blank" href="https://twitter.com/linamoss06">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className=" fill-white  w-5 absolute  left-1/3 "
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
            </div>
          )}
        </div>

        <div
          onMouseOver={(e) => handleHover("Claudia")}
          onMouseLeave={(e) => setShowSocial([false, ""])}
        >
        <div className="overflow-hidden w-80 md:w-56  lg:w-80">

          <img
            src={process.env.PUBLIC_URL + "/pvs_Team_Claudia_Portrait.jpg"}
            alt="Claudia FALKINGER"
            className={
              showSocial[0] && showSocial[1] === "Claudia"
                ? " max-h-fit overflow-hidden grayscale scale-110 transition-all duration-500 ease-in-out  "
                : ""
            }
          />
        </div>
          <h2 className="font-bold	text-lg">Claudia FALKINGER</h2>
          <h3 className="text-pink">Chief Strategy Officer</h3>
          <h3 className="text-pink">Co-Founder</h3>

          {showSocial[0] && showSocial[1] === "Claudia" && (
            <div className="relative inset-x-3 bottom-80  flex  ">
              <a target="_blank" href="https://www.linkedin.com/in/claudia-falkinger/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="  text-white fill-white  w-5 absolute right-2/4 "
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>

              <a target="_blank" href="https://twitter.com/hawkinger_">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className=" fill-white  w-5 absolute  left-1/3 "
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
            </div>
          )}
        </div>





        <div
          onMouseOver={(e) => handleHover("Nadin")}
          onMouseLeave={(e) => setShowSocial([false, ""])}
        >
        <div className="overflow-hidden w-80 md:w-56  lg:w-80">

          <img
            src={process.env.PUBLIC_URL + "/pvs_Team_Nadin_Portrait2.jpg"}
            alt="Nadin BRUNNHOFER"
            className={
              showSocial[0] && showSocial[1] === "Nadin"
                ? "max-h-fit overflow-hidden grayscale scale-110 transition-all duration-500 ease-in-out  "
                : ""
            }
          />
        </div>
          <h2 className="font-bold	text-lg">Nadin BRUNNHOFER</h2>
          <h3 className="text-pink">Chief Technology Officer</h3>
          <h3 className="text-pink">Co-Founder</h3>

          {showSocial[0] && showSocial[1] === "Nadin" && (
            <div className="relative inset-x-3 bottom-80 flex ">
              <a target="_blank" href="https://www.linkedin.com/in/nadinbrunnhofer/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="  text-white fill-white  w-5 absolute right-2/4 "
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>

              <a target="_blank" href="https:twitter.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className=" fill-white  w-5 absolute  left-1/3 "
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
            </div>
          )}
        </div>
   
      </div>

          {/* Edit Section */}

     {isLoggedIn && 
        <div className="flex  items-center justify-center py-12 px-4 sm:px-6 lg:px-8" >
          <div className="w-full max-w-md space-y-8">
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label for="name" className="sr-only">
                    name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
           placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink sm:text-sm"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label for="position" className="sr-only">
                    position
                  </label>
                  <input
                    id="position"
                    name="position"
                    type="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900
           placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink sm:text-sm"
                    placeholder="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </div>

                <div>
                  <label for="twitter" className="sr-only">
                    twitter
                  </label>
                  <input
                    id="twitter"
                    name="twitter"
                    type="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900
           placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink sm:text-sm"
                    placeholder="twitter"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                </div>

                <div>
                  <label for="linkedin" className="sr-only">
                    linkedin
                  </label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900
           placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink sm:text-sm"
                    placeholder="linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                </div>

                <div>
                  <label for="image" className="sr-only">
                    image
                  </label>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900
           placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink sm:text-sm" />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink py-2 px-4 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-black group-hover:text-pink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Edit
                </button>
              </div>
            </form>

          </div>
        </div>

     }

    </div>

  );
};

export default Team;
