import classes from './Feed.module.scss';
import NewPostForm from './NewPostForm/NewPostForm';
import Posts from './Posts/Posts';

const dummyData = [
  {
    "_id": "635ff374a78561f4a28fe2fd",
    "title": "Post #1",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1201/900",
    "hidden": false,
    "createdAt": "2022-10-31T16:10:28.674Z",
    "updatedAt": "2022-10-31T16:10:28.674Z",
    "__v": 0
  },
  {
    "_id": "635ff37aa78561f4a28fe2ff",
    "title": "Post #2",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/904",
    "hidden": false,
    "createdAt": "2022-10-31T16:10:34.251Z",
    "updatedAt": "2022-10-31T16:10:34.251Z",
    "__v": 0
  },
  {
    "_id": "635ff397a78561f4a28fe301",
    "title": "Post #3",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/901",
    "hidden": false,
    "createdAt": "2022-10-31T16:11:03.143Z",
    "updatedAt": "2022-10-31T16:11:03.143Z",
    "__v": 0
  },
  {
    "_id": "635ff3e5a78561f4a28fe303",
    "title": "Post #4",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1203/900",
    "hidden": false,
    "createdAt": "2022-10-31T16:12:21.508Z",
    "updatedAt": "2022-10-31T16:12:21.508Z",
    "__v": 0
  },
  {
    "_id": "635ff3f0a78561f4a28fe305",
    "title": "Post #5",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/903",
    "hidden": false,
    "createdAt": "2022-10-31T16:12:32.296Z",
    "updatedAt": "2022-10-31T16:12:32.296Z",
    "__v": 0
  },
  {
    "_id": "636041433cd7ea8e23f0b75a",
    "title": "Post #6",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/905",
    "hidden": false,
    "createdAt": "2022-10-31T21:42:27.244Z",
    "updatedAt": "2022-10-31T21:42:27.244Z",
    "__v": 0
  }
]

const Feed = () => {
  return (
    <div className={classes["feed-wrapper"]}>
      {/* FORMULARIO */}
      <NewPostForm />

      {/* POSTS */}
      <Posts posts={dummyData} />
    </div>
  );
}

export default Feed;