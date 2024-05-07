import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToFavouriteAction } from "../redux/actions";

const Job = ({ data }) => {
  console.log(data);
  const dispatch = useDispatch();
  const [showElement, setShowElement] = useState(true);
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <FaRegStar
          key={data.i}
          onClick={() => {
            setShowElement(!showElement);
            dispatch(addToFavouriteAction(data));
          }}
        />

        <FaStar
          onClick={() => {
            setShowElement(!showElement);
            dispatch({ type: "REMOVE_FROM_FAVOURITE", payload: data });
          }}
        />

        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};
export default Job;
