import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost, fetchTags } from '../../actions/index.js';

function mapStateToProps(state) {
  return {
    previousTags: state.previousTags
  }
}

const withTags = UIComponent =>
  class extends Component {
    componentDidMount() {
      this.props.fetchTags();
    }

    createPost = (values) => {
      this.props.createPost(values, () => {
        this.props.history.push('/');
      });
    };

    render() {
      const {previousTags, createPost} = this.props;

      return <UIComponent
        previousTags={previousTags}
        createPost={this.createPost}
      />
    }
};

export default compose(
  withRouter,
  connect(mapStateToProps, {createPost, fetchTags}),
  withTags
);
