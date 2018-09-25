import React from 'react';
import _ from 'lodash';
import List from './List';
import PostsListItem from './PostsListItem';

const PostsList = props => (
  <List
    source="postsList"
    itemsPerPage="postsNumberPerPage"
    render={({ itemsForCurrentPage = [] }) => (
      <div>
        {Object.keys(itemsForCurrentPage).length === 0 && <div>Preloader</div>}
        <ul className="list-group">
          {_.map(itemsForCurrentPage, item => PostsListItem(item))}
        </ul>
      </div>
    )}
  />
);

export default PostsList;
