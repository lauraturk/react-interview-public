import { action } from "@ember-decorators/object";
import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

interface Card {
  name: string;
  color: string;
  stars: number;
}

type Callback = (card: Card) => undefined;

export default class NewColor extends Component {
  // Passed properties
  // ---------------------------------------------------------------------------
  addCallback: Callback = () => undefined;

  // Internal properties
  // ---------------------------------------------------------------------------
  name: string = "";

  @action
  save() {
    console.log("saving form");
  }

  @action
  reset() {
    // TODO: use this.name = ""
    this.set("name", "");
  }

  layout = hbs`
    {{#ui-form onSubmit=(action "save") as |form|}}
      {{#form.label}}Color name:{{/form.label}}
      {{form.input placeholder="my cool color" value=name}}

      {{#form.label}}Color:{{/form.label}}
      {{form.input type="color"}}

      {{#ui-button onClick=(action "reset")}}Reset{{/ui-button}}

      {{#form.submit}}Save{{/form.submit}}
    {{/ui-form}}
  `;
}
