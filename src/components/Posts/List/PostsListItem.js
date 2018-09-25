import React from 'react';
import { Link } from 'react-router-dom';

const PostsListItem = post => (
  <li key={post.id} className="list-group-item">
    <Link to={`/posts/${post.id}`}>
      {post.title}
    </Link>
  </li>
);

export default PostsListItem;
