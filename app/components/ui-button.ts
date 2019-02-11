// import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";
import { action } from "@ember-decorators/object";
import { tagName, attribute } from "@ember-decorators/component";
import { computed } from "@ember-decorators/object";

const DEFAULT_BLUE = "#147fbd";

@tagName("button")
export default class UiButton extends Component {
  // Computed properties
  // ---------------------------------------------------------------------------
  @computed("backgroundColor", "color")
  @attribute
  get style() {
    return `background-color: ${this.backgroundColor}; color: ${this.color};`;
  }

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
  backgroundColor: string = DEFAULT_BLUE;
  color: string = "#fff";
  @attribute type = "button";

  // Passed properties
  // ---------------------------------------------------------------------------
  task = null;
}
