import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { addTag } from "../../actions/index";
import TextInputUI from "../UI/TextInputUI";

class NewTagForm extends Component {
  onSubmit = (values) => {
    const {reset} = this.props;
    this.props.addTag(values.inputAddTag);
    reset();
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form key='form-add-tag' id='form-add-tag' onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="inputAddTag"
          label="Add tag"
          maxLength={10}
          component={TextInputUI}
        />
        <div>
          <button type="submit" disabled={pristine || submitting} className="btn btn-primary">
            Add tag
          </button>
          <button type="button" disabled={pristine || submitting} className="btn btn-warning" onClick={reset}>
            Clear
          </button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.inputAddTag) {
    errors.inputAddTag = "Please, enter a tag"
  }
  return errors;
}

export default compose(
  connect(null, {addTag}),
  reduxForm({validate, form: "PostsAddNewTag"})
)(NewTagForm);
