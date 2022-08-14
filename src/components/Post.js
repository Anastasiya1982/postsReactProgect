import React  from "react";
import "../App.css";
import MyButton from "./MyButton/button";

import {Link} from 'react-router-dom';

const Post = ({ post, ...props }) => {
 
  return (
		<div className="post" data-testid={`post-${post.id}`}>
			<div className="post-content">
				<span>{post.id}. </span>
				<div> {post.title} </div>
				<div> {post.body} </div>
			</div>

			<div className="posts-btn">
				<MyButton
					onClick={() => {
						props.remove(post);
					}}
				>
					Delete
				</MyButton>
				<MyButton onClick={() => props.updateCurrentPostTitle(post)}>
					Update Post
				</MyButton>

				<Link to={`/posts/${post.id}/comments`}>See Comments</Link>
				{/* <MyButton onClick={()=>fetchAllComments(post.id)}> See Comments </MyButton> */}
			</div>
		</div>
  );
};

export default Post;
