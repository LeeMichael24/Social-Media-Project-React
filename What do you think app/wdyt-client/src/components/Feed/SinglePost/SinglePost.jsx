import classes from './SinglePost.module.scss';

import { MdFavoriteBorder, MdBookmarkBorder } from 'react-icons/md';

const SinglePost = ({ title = "No Title", description = "No Desc.", image }) => {
  /* const title = props.title || "No title";
  const description = props.description || "No Desc.";
  const image = props.image; */

  /* const { title = "No Title", description = "No Desc.", image } = props; */

  return (
    <article className={classes["post"]}>
      <h4> {title} </h4>
      <p>
        {description}
      </p>

      <figure>
        <img src={image} alt="Post image" />
      </figure>

      <div className={classes["actions"]}>
        <div>
          <MdFavoriteBorder /> 1550 likes
        </div>

        <div>
          <MdBookmarkBorder /> Bookmark
        </div>
      </div>
    </article>
  );
}

export default SinglePost;