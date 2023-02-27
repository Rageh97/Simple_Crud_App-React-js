import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addPost, deletePost, updatePost } from "../RTK/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const id = Math.floor(Math.random() * 500);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [Id, setId] = useState(null);
  const [updateTitle, setupdateTitle] = useState("");
  const [updateDescription, setupdateDescription] = useState("");
  const post = useSelector((state) => state.post.posts);
  return (
    <>
      <div className="container mb-5">
        <div className="mb-3 mt-5 row d-flex flex-column align-items-center justify-content-center">
          <div className="col-6 mb-5">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Your title"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-6 mb-5">
            <input
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter Your body"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <button
              onClick={() => dispatch(addPost({ id, title, body }))}
              className="w-100 btn btn-primary"
            >
              Add Post
            </button>
          </div>
        </div>
      </div>
      {/*  */} <hr></hr>
      <div className="container mb-5">
        <h4 className="text-center mt-5 mb-5 text-success">All posts</h4>
        <div className="table-products">
          <table className="table table-striped border bg-white">
            <th className="p-2">Id</th>
            <th className="p-2">Title</th>
            <th className="p-2">Description</th>
            <th className="p-2">Operations</th>
            <tbody>
              {post.map((item) => (
                <>
                  <tr key={item.id}>
                    <td className="p-3 text-success">{item.id}</td>
                    <td className="p-3">{item.title}</td>
                    <td className="p-3">{item.body}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          onClick={() => dispatch(deletePost(item))}
                          type="button"
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => {
                            setIsUpdate(true);
                            setId(item.id);
                          }}
                          type="button"
                          className="btn btn-primary"
                        >
                          Update
                        </button>
                      </div>
                      {isUpdate && Id == item.id && (
                        <>
                          <input
                            className="form-control me-4 mb-4 mt-4"
                            type="text"
                            placeholder="update title"
                            value={updateTitle}
                            onChange={(e) => setupdateTitle(e.target.value)}
                          />
                          <input
                            className="form-control me-2"
                            type="text"
                            value={updateDescription}
                            onChange={(e) =>
                              setupdateDescription(e.target.value)
                            }
                            placeholder="update description"
                          />
                          <button
                            className="me-4 mb-4 mt-4 btn btn-dark text-white"
                            onClick={() => {
                              dispatch(
                                updatePost({
                                  id: item.id,
                                  title: updateTitle,
                                  body: updateDescription,
                                })
                              )
                              setIsUpdate(false)
                            }
                        }
                          >
                            Update
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
