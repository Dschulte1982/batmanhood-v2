import PropTypes from "prop-types";

export const NewsItem = ({ newsItem }) => {
  const redirect = () => {
    window.location.href = newsItem.url;
  };
  return (
    <div id={"news-item"} onClick={redirect}>
      <div id={"news-source"}>{newsItem.source}</div>
      <div id={"news-headline"}>{newsItem.headline}</div>
      <div id={"news-summary"}>{newsItem.summary}</div>
      <img id={"news-image"} src={newsItem.image} alt="" />
    </div>
  );
};

NewsItem.propTypes = {
  newsItem: {
    source: PropTypes.string,
    headline: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
  },
};
