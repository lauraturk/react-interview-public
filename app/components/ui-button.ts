// import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";
import { action } from "@ember-decorators/object";
import { tagName, attribute } from "@ember-decorators/component";

@tagName("button")
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
  @attribute type = "button";

  // Passed properties
  // ---------------------------------------------------------------------------
  task = null;
}
