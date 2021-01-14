import React, { useRef } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageLogo from "../images/logo.png";
import { useNews } from "../news/NewsProvider";
import FilterAction from "./FilterAction";
import { newsCountry } from "../shared/newsOptions";

export default function NavigationBar() {
  const { state, ACTION, dispatch } = useNews();
  const { country, category } = state;

  const { SET_QUERY } = ACTION;
  const refSearch = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SET_QUERY, payload: refSearch.current.value });
  };
  return (
    <Navbar className="navTheme" variant="dark" expand="">
      <Link to="/">
        <Navbar.Brand>
          <img src={imageLogo} alt="Logo" style={{ height: "4vh" }}></img> News
        </Navbar.Brand>
      </Link>
      <Nav className="mr-2">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </Nav>
      <Nav className="mr-auto">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </Nav>

      <Form inline onSubmit={onSubmit} className="mr-5 mx-auto">
        <Form.Control
          ref={refSearch}
          type="text"
          placeholder="Search"
          className="mr-sm-3 col"
        />
        <Button variant="outline-success" onClick={onSubmit}>
          Search
        </Button>
      </Form>

      <Navbar.Toggle aria-controls="nav-toogle-colle" className="mx-auto">
        Filter Source: {newsCountry[country]} -
        <span style={{ textTransform: "capitalize" }}>
          {category ? category : "All"}
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id="nav-toogle-collapse">
        <FilterAction />
      </Navbar.Collapse>
    </Navbar>
  );
}
