import React from 'react';
import _ from 'lodash';
import withPerPageItems from './withPerPageItems';

const PostsPerPage = (props) => {
  const { postsPerPage, arrayOfVariants, pageTotal } = props;

  if (pageTotal === 0) {
    return <div />;
  }

  const renderButton = (number, currentValue) => {
    if (number !== currentValue) {
      return (
        <li key={number} className="page-item">
          <input className="page-link" type="button" value={number} onClick={props.handleChange(number)} />
        </li>
      );
    }
    return (
      <li key={number} className="page-item">
        <input className="page-link" type="button" value={number} style={{ background: 'yellow' }} />
      </li>
    );
  };

  return (
    <div className="mb-2">
      <div className="mb-2">Number of posts per page:</div>
      <ul className="pagination">
        {_.map(arrayOfVariants, item => renderButton(item, postsPerPage))}
      </ul>
    </div>
  );
};

export default withPerPageItems(PostsPerPage);
