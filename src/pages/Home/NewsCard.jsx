import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
const NewsCard = ({ aNews }) => {
  const { _id, title, image_url, details } = aNews;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {details.length > 200 ? (
            <p>{details.slice(0, 200)}</p>
          ) : (
            <p>{details}</p>
          )}{" "}
          <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
            Read More ...
          </Link>
        </p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  aNews: PropTypes.object,
};

export default NewsCard;
