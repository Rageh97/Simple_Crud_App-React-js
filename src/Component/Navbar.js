import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { searchPost } from "../RTK/ProductSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navbar } from 'react-bootstrap';
import { Button, Col, Form, Row } from "react-bootstrap";

const NavbarComp = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const post = useSelector((state) => state.post.posts);

  return (
    <div className="bg-primary p-2 navbar-1">
      <Navbar className="bg-body-tertiary justify-content-between">
        <h3 className="text-white">Posts</h3>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={(e) => setId(e.target.value)}
              /> 
            </Col>
            <Col xs="auto">
              <Button variant="success" onClick={() => dispatch(searchPost(id))} type="submit">
                search
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
     </div>
  );
};

export default NavbarComp;
