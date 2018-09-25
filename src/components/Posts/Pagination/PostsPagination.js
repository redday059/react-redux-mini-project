import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import withPaginationItems from './withPaginationItems';

const Pagination = (props) => {
  const { numberOfPages, currentPage, listOfItems } = props;

  if (numberOfPages === 0) {
    return null;
  }

  const renderPreviousBtn = () => {
    if (currentPage > 1) {
      return (
        <li key="previous" className="page-item">
          <Link to={`/posts/page/${currentPage - 1}`} className="page-link" aria-label="next page">
            Previous
          </Link>
        </li>
      );
    }
    return (
      <li key="previous" className="page-item disabled">
        <span className="page-link">Previous</span>
      </li>
    );
  };

  const renderNextBtn = () => {
    if (currentPage < numberOfPages) {
      return (
        <li key="next" className="page-item">
          <Link to={`/posts/page/${currentPage + 1}`} className="page-link" aria-label="next page">
            Next
          </Link>
        </li>
      );
    }
    return (
      <li key="next" className="page-item disabled">
        <span className="page-link">Next</span>
      </li>
    );
  };

  const renderLinkItem = page => (
    <li key={page} className="page-item">
      <Link to={`/posts/page/${page}`} className="page-link" aria-label={page}>
        {page}
      </Link>
    </li>
  );

  const renderSpanItem = page => (
    <li key={page} className="page-item active">
      <span className="page-link">
        {page}
      </span>
    </li>
  );

  const renderGap = page => (
    <li key={page} className="page-item">
      <span className="page-link">
          ...
      </span>
    </li>
  );

  const renderPaginationLeft = () => (listOfItems[0] > 1 ? renderLinkItem(1) : null);

  const renderPaginationRight = () => (numberOfPages - listOfItems.slice(-1) >= 1 ? renderLinkItem(numberOfPages) : null);

  const renderGapLeft = () => (listOfItems[0] > 2 ? renderGap('leftGap') : null);

  const renderGapRight = () => (numberOfPages - listOfItems.slice(-1) > 1 ? renderGap('rightGap') : null);

  const renderPaginationItems = () => _.map(listOfItems, (pageNum) => {
    if (pageNum === currentPage) {
      return renderSpanItem(pageNum);
    }

    return renderLinkItem(pageNum);
  });

  return (
    <nav aria-label="Navigation through posts">
      <div className="mb-2">Pagination:</div>
      <ul className="pagination">
        {renderPreviousBtn()}
        {renderPaginationLeft()}
        {renderGapLeft()}
        {renderPaginationItems()}
        {renderGapRight()}
        {renderPaginationRight()}
        {renderNextBtn()}
      </ul>
    </nav>
  );
};

export default withPaginationItems(Pagination);
