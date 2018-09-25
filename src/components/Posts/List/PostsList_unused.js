import React from 'react';
import _ from 'lodash';
import List from './List_unused';
import PostsListItem from './PostsListItem';

const PostsList = (props) => {
  const { itemsForCurrentPage } = props;

  return (
    <List source="postsList" itemsPerPage="postsNumberPerPage" itemsForCurrentPage={itemsForCurrentPage}>
      { itemsForCurrentPage => (
        <div>
          {Object.keys(itemsForCurrentPage).length === 0 && <div>Preloader</div>}
          {itemsForCurrentPage !== 'undefined' && <ul className="list-group">{_.map(itemsForCurrentPage, item => PostsListItem(item))}</ul>}
        </div>
      )}
    </List>
  );
};

export default PostsList;
