import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";
import { action } from "@ember-decorators/object";

// TODO: Tagname= ''
export default class UiButton extends Component {
  // Callbacks
  // ---------------------------------------------------------------------------
  onClick = () => undefined;

  // Actions
  // ---------------------------------------------------------------------------
  // TODO: remove preventDefault here and see the reset button submit the form
  @action
  click(e) {
    e.preventDefault();
    if (this.task) {
      this.task.perform();
    } else {
      console.log("calling ui-button onClick method...");
      this.onClick();
    }
  }

  // Passed properties
  // ---------------------------------------------------------------------------
  type: string = "button";
  task = null;

  // Template
  // ---------------------------------------------------------------------------
  // TEST use <button type={{type}} onClick={{action 'click'}}>{{yield}}</button> and have it fire twice
  layout = hbs`
    <button type={{type}}>{{yield}}</button>
  `;
}
