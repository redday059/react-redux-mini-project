import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setNumberPerPage } from '../../../actions/index';

const mapStateToProps = (state, props) => {
  const goToIndexPage = () => {
    props.history.push('/');
  };
  const pageTotal = Math.ceil((Object.keys(state.posts).length) / state.postsPerPage);
  return {
    postsPerPage: state.postsPerPage,
    pageTotal,
    arrayOfVariants: [1, 2, 3],
    goToIndexPage,
  };
};

const withPerPageItems = UIComponent => (props) => {
  const handleChange = num => () => {
    props.setNumberPerPage(num);
    props.goToIndexPage();
  };

  const { postsPerPage, arrayOfVariants, pageTotal } = props;

  return (
    <UIComponent
      postsPerPage={postsPerPage}
      arrayOfVariants={arrayOfVariants}
      handleChange={handleChange}
      pageTotal={pageTotal}
    />
  );
};

export default compose(
  withRouter,
  connect(mapStateToProps, { setNumberPerPage }),
  withPerPageItems,
);
