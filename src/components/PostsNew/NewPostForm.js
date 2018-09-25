import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import withTags from './withTags';
import TextInputUI from '../UI/TextInputUI';
import DropdownUI from '../UI/DropdownUI';

class NewPostForm extends Component {
  renderPreviousTags() {
    const { previousTags } = this.props;
    if (previousTags && previousTags.length) {
      return previousTags.map(tag => (
        <option key={tag} value={tag}>{tag}</option>
      ));
    }
  }

  render() {
    const { handleSubmit, createPost } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(createPost)}>
          <Field
            name="title"
            label="Title"
            maxLength={30}
            component={TextInputUI}
          />
          <Field
            name="categories"
            label="Tags"
            component={DropdownUI}
          >
            { this.props.previousTags.length
              ? <option hidden value="Choose tag">Choose tag</option>
              : <option hidden value="First add tag">Tags are loading...</option>}
            {this.renderPreviousTags()}
          </Field>
          <Field
            name="content"
            label="Description"
            maxLength={500}
            component={TextInputUI}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Please, enter a title.';
  }
  if (!values.categories || (values.categories === 'Tags are loading...'
    || values.categories === 'Choose tag')) {
    errors.categories = 'Please, choose a tag.';
  }
  if (!values.content) {
    errors.content = 'Please, enter a content.';
  }
  return errors;
}

export default compose(
  withTags,
  reduxForm({ validate, form: 'PostsNewForm' }),
)(NewPostForm);
