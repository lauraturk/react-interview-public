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
    debugger;
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
  layout = hbs`
    <button type={{type}} onClick={{action 'click'}}>{{yield}}</button>
  `;
}
