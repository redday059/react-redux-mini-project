import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class List extends Component {
  static sourceMapping(source) {
    const mapping = { postsList: 'posts' };
    return mapping[source];
  }

  static numberPerPageMapping(itemsPerPage) {
    const mapping = { postsNumberPerPage: 'postsPerPage' };
    return mapping[itemsPerPage];
  }

  render() {
    const { itemsForCurrentPage } = this.props;
    return this.props.children(itemsForCurrentPage);
  }
}

const mapStateToProps = (state, props) => {
  const defineItemsForCurrentPage = () => {
    const { source, itemsPerPage } = props;
    const posts = state[List.sourceMapping(source)];
    const perPage = state[List.numberPerPageMapping(itemsPerPage)];
    const { url } = props.match;
    const page = +url.match(/\d+$/)[0];
    const first = perPage * (page - 1);
    const last = first + perPage;

    return Object.keys(posts).slice(first, last).reduce((acc, cur) => {
      acc[cur] = posts[cur];
      return acc;
    }, {});
  };

  const itemsForCurrentPage = defineItemsForCurrentPage();
  return {
    itemsForCurrentPage,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps),
)(List);
