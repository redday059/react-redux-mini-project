import React from 'react';
import { Link } from 'react-router-dom';
import withData from './withData';

const Post = (props) => {
  const { post, handleDeleteBtn } = props;
  if (!post) {
    return (
      <div> Loading... </div>
    );
  }

  return (
    <div>
      <Link to="/" className="btn btn-primary">
        Back to index
      </Link>
      <button
        className="btn btn-primary btn-danger"
        type="button"
        onClick={handleDeleteBtn}
      >
          Delete
      </button>
      <h4>
        Title:
        {' '}
        { post.title }
      </h4>
      <h6>
        Categories:
        {' '}
        {post.categories}
      </h6>
      <p>
        Content:
        {' '}
        {post.content}
      </p>
    </div>
  );
};

export default withData(Post);
