import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const Blog = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const [blogPostList, setBlogPostList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // New Post States
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  //edit render
  const [openEdit, setOpenEdit] = useState([false, ""]);

  useEffect(() => {
    axios
      .get("https://drab-red-cuttlefish-boot.cyclic.app/blog")
      .then((response) => setBlogPostList(response.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  const handleSubmitPost = (e) => {
    e.preventDefault();

    // need FormData because of file upload

    const uploadImage = new FormData();
    uploadImage.append("image", e.target.image.files[0]);
    uploadImage.append("author", author);
    uploadImage.append("message", message);
    uploadImage.append("subject", subject);

    axios
      .post("https://drab-red-cuttlefish-boot.cyclic.app/blog", uploadImage)
      .then((response) => {
        console.log(response);
        setRefresh(!refresh);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (e, id) => {
    e.preventDefault();

    // Send info to Edit, if field is empty do not send it

    const blogPostEdit = new FormData();
    blogPostEdit.append("image", e.target.image.files[0]);
    blogPostEdit.append("id", id);
    blogPostEdit.append("author", author);
    blogPostEdit.append("message", message);
    blogPostEdit.append("subject", subject);

    axios
      .post(`https://drab-red-cuttlefish-boot.cyclic.app/blog/edit`, blogPostEdit)
      .then((response) => {
        console.log(response);
        setRefresh(!refresh);
        setOpenEdit([false, ""]);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios
      .delete(`https://drab-red-cuttlefish-boot.cyclic.app/blog/${id}`)
      .then((response) => {
        setRefresh(!refresh);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  console.log(openEdit);

  return (
    <>
      <div className="flex flex-col justify-center bg-zinc-50 h-100vh">
      

        {isLoggedIn && (
          <div className="w-100wv mx-20 px-6 lg:px-8 my-12 bg-white border-8 border-pink rounded">
            <p className="text-3xl font-bold leading-7 text-center text-black m-5">
              New Post
            </p>
            <form action="" onSubmit={handleSubmitPost}>
              <div className="md:flex flex-col md:flex-row justify-center items-center mt-12  ">
                <div className="w-full md:w-2/4 flex flex-col">
                  <label className="font-semibold leading-none text-black ">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="w-full md:w-1/4 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none text-black">
                    Author
                  </label>
                  <input
                    type="text"
                    className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>

                <div className="w-full md:w-1/4 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none text-black">
                    Image
                  </label>
                  <input
                    type="file"
                    className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                    name="image"
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none text-black">
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="h-40 text-base leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-center w-full">
                <button
                  type="submit"
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-pink rounded hover:bg-pink focus:ring-2 focus:ring-offset-2 focus:ring-pink focus:outline-none m-5"
                >
                  Post Blog
                </button>
              </div>
            </form>
          </div>
        )}

        {blogPostList.map((blog) => {
          return (
            <div
              key={blog._id}
              className="border-b-pink border-4 mx-5 md:mx-28 xl:mx-80  p-5 justify-center text-left my-4 "
            >
              {isLoggedIn && (
                <div className="flex flex-row relative p-2 mb-5">
                  <svg
                    onClick={() => setOpenEdit([!openEdit[0], blog._id])}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="hover:cursor-pointer absolute top-0 right-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <svg
                    onClick={(e) => handleDelete(e, blog?._id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mx-10 hover:cursor-pointer absolute top-0 right-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              )}

              {openEdit[0] && openEdit[1] === blog._id && (
                <>
                  <form onSubmit={(e) => handleEdit(e, blog?._id)}>
                    <h1 className="text-lg py-2">
                      Posted by:
                      <input
                        placeholder={blog.author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="text-black border-pink border-2"
                      />
                    </h1>
                    <h2 className="text-base py-2">
                      Subject:{" "}
                      <input
                        placeholder={blog.subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="text-black border-pink border-2"
                      />
                    </h2>
                    <h2 className="text-base py-2">
                      Image:{" "}
                      <input
                        type="file"
                        name="image"
                        className="text-black border-pink border-2"
                      />
                    </h2>
                    <p className="text-xs leading-5">
                      <textarea
                        placeholder={blog.message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="text-black border-pink border-2 w-full"
                      />
                    </p>
                    <button
                      type="submit"
                      className="my-9 font-semibold leading-none text-white py-4 px-10 bg-pink rounded hover:bg-pink focus:ring-2 focus:ring-offset-2 focus:ring-pink focus:outline-none"
                    >
                      Edit Blog Post
                    </button>
                  </form>
                </>
              )}

              {
                // this to allow other post to be displayed when editing

                <div>
                  <div className="dark:bg-white dark:text-gray-50">
                    <div className="container grid grid-cols-12 mx-auto dark:bg-pink">
                      <div
                        className="bg-no-repeat bg-cover col-span-full lg:col-span-4"
                        style={{
                          backgroundImage: `url(${blog.image})`,
                          backgroundPosition: "center center",
                          backgroundBlendMode: "multiply",
                          backgroundSize: "cover",
                        }}
                      >
                        {" "}
                      </div>
                      <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                        <h1 className="text-3xl font-semibold">
                          {blog.subject}
                        </h1>
                        <p className="flex-1 pt-2">{blog.message}</p>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 dark:text-gray-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="self-center text-sm">
                              by {blog.author}
                            </span>
                          </div>
                          <span className="text-xs">3 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          );
        })}

        <div></div>
      </div>
    </>
  );
};

export default Blog;
