import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { searchPost } from "../RTK/ProductSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const post = useSelector((state) => state.post.posts);

  return (
    <div className="bg-primary p-2 navbar-1">
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link className="navbar-brand text-white fs-4" to="/">
                Crud App
              </Link>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Search By id"
                  aria-label="Search"
                />
                <button
                  onClick={() => dispatch(searchPost(id))}
                  className="btn btn-dark btn-outline-success text-white"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
