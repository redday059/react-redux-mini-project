import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, deletePost } from "../../actions";

function mapStateToProps(state, props) {
  const { posts } = state;
  return {
    post: posts[props.match.params.id],
    id: props.match.params.id
  }
}

const withData = WrappedComponent =>
  class extends Component {
    componentDidMount() {
      if (!this.props.post) {
        this.props.fetchPost(this.props.id);
      }
    }

    handleDeleteBtn = () => {
      this.props.deletePost(this.props.id, () => {
        this.props.history.push('/');
      });
    };

    render() {
      return (
        <WrappedComponent
          post = {this.props.post}
          handleDeleteBtn = {this.handleDeleteBtn}
          {...this.props}
        />
      )
    }
};

export default compose (
  withRouter,
  connect(mapStateToProps, {fetchPost, deletePost}),
  withData
);
