import { useParams } from "react-router-dom";
import Header from "./../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h1>News: {id}</h1>
    </div>
  );
};

export default News;
