import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

// number of pages around the current one is configurable via the mask
const mask = [-1, 0, 1];

const paginationMiddleDigits = (current, total) => mask.reduce((acc, p) => {
  if (current + p > 0 && current + p <= total) {
    acc.push(current + p);
  }
  return acc;
}, []);

const withPaginationItems = UIComponent => (props) => {
  const { currentPage, numberOfPages } = props;
  if (numberOfPages === 0) {
    return null;
  }

  return (
    <UIComponent
      listOfItems={paginationMiddleDigits(currentPage, numberOfPages)}
      numberOfPages={numberOfPages}
      currentPage={currentPage}
    />
  );
};

const mapStateToProps = (state, props) => {
  const pageTotal = Math.ceil((Object.keys(state.posts).length) / state.postsPerPage);
  let currentPage;

  if (pageTotal > 1) {
    const { url } = props.match;
    currentPage = +url.match(/\d+$/)[0];
  }

  return {
    currentPage,
    numberOfPages: pageTotal,
  };
};

export default compose(
  withRouter,
  (connect(mapStateToProps)),
  withPaginationItems,
);
