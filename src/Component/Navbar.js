import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { searchPost } from "../RTK/ProductSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
import { Button, Col, Form, Row } from "react-bootstrap";
import { RiSearchFill } from "react-icons/ri";
const NavbarComp = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const post = useSelector((state) => state.post.posts);

  return (
    <div className="bg-primary p-2 navbar-1 ">
      {/* <Navbar className="bg-body-tertiary justify-content-between"> */}
      <Row className="d-flex align-items-center justify-content-between">
        <Col xs="3">
          <h3 className="text-white mb-0">Posts</h3>
        </Col>
        <Col xs="6">
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            onChange={(e) => setId(e.target.value)}
          />
        </Col>
        <Col className="d-flex" xs="3">
          <Button
            variant="success"
            onClick={() => dispatch(searchPost(id))}
            type="button"
            className="d-none d-md-flex"
          >
            search
          </Button>
          <RiSearchFill
            onClick={() => dispatch(searchPost(id))}
            className="fs-3 text-white d-flex d-md-none"
          />
        </Col>
      </Row>
      {/* </Navbar> */}
    </div>
  );
};

export default NavbarComp;
