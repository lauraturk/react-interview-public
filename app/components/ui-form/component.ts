import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";
import { tagName } from "@ember-decorators/component";

// TODO: Pull the submit() handler out and see the form reload
// TODO: Pull `form` out and see things break.
@tagName("form")
export default class UiForm extends Component {
  // Passed properties
  // ---------------------------------------------------------------------------
  onSubmit = () => undefined;

  // Internal methods
  // ---------------------------------------------------------------------------
  submit(e) {
    e.preventDefault();
  }

  // Template
  // ---------------------------------------------------------------------------
  // TODO: take out pre-wiring of submit button
  layout = hbs`
    {{yield (hash
      label=(component 'ui-form/label')
      input=(component 'ui-form/input')
      submit=(component 'ui-button' onClick=onSubmit type='submit')
    )}}
  `;
}
