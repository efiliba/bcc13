import { Typography, Button } from '@mui/material';

const Tile = ({article}) =>
  <div className="tile">
    <img
      className="tile__article-image"
      src={`/images/${article.image.source}`}
      alt={article.image.text}
    />
    {/* <a className="tile__article-heading" href={article.link}> */}
      <Typography className="tile__article-heading" variant="h6">{article.heading}</Typography>
    {/* </a> */}
    <Typography className="tile__article-description" variant="body2">
      {article.description}
    </Typography>
    {/* <Button className="tile__article-button" variant="outlined" color="primary">
      Read More
    </Button> */}
  </div>;

export const News = ({articles}) =>
  <div className="home-news">
    <h2>News &amp; Articles</h2>
    <div className="home-news__container">
      {articles.map((article, index) =>
        <Tile article={article} key={`article${index}`} />
      )}
    </div>
  </div>;