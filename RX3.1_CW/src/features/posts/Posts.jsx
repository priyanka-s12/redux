import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => {
    // console.log(state.posts);
    return state.posts;
  });
  // state.posts is an object, inside it posts array
  return (
    <div>
      {posts.posts.map((post) => (
        <div key={post.postId}>
          <p>{post.caption}</p>
          <p>Likes: {post.likes}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
