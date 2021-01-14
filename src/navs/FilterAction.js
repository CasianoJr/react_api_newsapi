import React, { useRef } from "react";
import { Nav, Form } from "react-bootstrap";
import { useNews } from "../news/NewsProvider";
import { newsCountry, newsCategory } from "../shared/newsOptions";

export default function FilterAction() {
  const { ACTION, dispatch, state } = useNews();
  const { SET_CATEGORY, SET_COUNTRY } = ACTION;
  const refCountry = useRef();
  const refCategory = useRef();

  const onChangeCountry = () => {
    dispatch({ type: SET_COUNTRY, payload: refCountry.current.value });
  };
  const onChangeCategory = () => {
    dispatch({ type: SET_CATEGORY, payload: refCategory.current.value });
  };

  return (
    <Nav className="mr-auto col-lg-6 mx-auto">
      <div className="row">
        <div className="col">
          <Form.Group controlId="Country">
            <Form.Label className="text-white">Country:</Form.Label>
            <Form.Control
              as="select"
              value={state.country}
              ref={refCountry}
              onChange={onChangeCountry}
            >
              <option value="">All</option>
              {Object.keys(newsCountry).map((key) => (
                <option value={key} key={key}>
                  {newsCountry[key]}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </div>
        <div className="col">
          <Form.Group controlId="Category">
            <Form.Label className="text-white">Category:</Form.Label>
            <Form.Control
              onChange={onChangeCategory}
              as="select"
              value={state.category}
              ref={refCategory}
              style={{ textTransform: "capitalize" }}
            >
              <option value="">All</option>
              {Object.keys(newsCategory).map((key) => (
                <option
                  style={{ textTransform: "capitalize" }}
                  value={key}
                  key={key}
                >
                  {newsCategory[key]}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </div>
      </div>
    </Nav>
  );
}
