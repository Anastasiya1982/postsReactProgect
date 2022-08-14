import { CSSTransition, TransitionGroup } from "react-transition-group";
import Post from "./Post";

const PostList = ({ posts, remove, updateCurrentPostTitle }) => {
  return (
    <div>
      <TransitionGroup>
        {posts.map((post) => {
          return (
            <CSSTransition   key={post.id} classNames='post' timeout={500}>
            <Post
              post={post}
            
              remove={remove}
              updateCurrentPostTitle={updateCurrentPostTitle}
            />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};
export default PostList;
