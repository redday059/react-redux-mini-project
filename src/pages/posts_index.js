import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index.js';
import Pagination from '../components/Posts/Pagination/PostsPagination';
import PostPerPage from '../components/Posts/PerPage/PostsPerPage';
import PostsList from '../components/Posts/List/PostsList';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <PostsList />
        <Pagination />
        <PostPerPage />
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
