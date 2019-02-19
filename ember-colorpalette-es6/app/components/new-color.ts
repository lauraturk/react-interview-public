import { Card, CardCallback } from "../../types/ember-colorpalette/card";
import { action } from "@ember-decorators/object";
import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

export default class NewColor extends Component {
  // Internal properties
  // ---------------------------------------------------------------------------
  public name: string = "";
  public color: string = "";

  public layout = hbs`
    {{#ui-form onSubmit=(action "save") as |form|}}
      <section>
        {{#form.label}}Color name:{{/form.label}}
        {{form.input placeholder="my cool color" value=name}}
      </section>

      <section>
        {{#form.label}}Color:{{/form.label}}
        {{form.input id="color-input" value=color type="color"}}
      </section>

      <section>
        {{#ui-button onClick=(action "reset")}}Reset{{/ui-button}}
        {{#form.submit}}Save{{/form.submit}}
      </section>
    {{/ui-form}}
  `;
  // Passed properties
  // ---------------------------------------------------------------------------
  public addCallback: CardCallback = () => undefined;

  @action
  public save() {
    const card: Card = { name: this.name, color: this.color, stars: 0 };
    this.addCallback(card);
    this.set("name", "");
    this.set("color", "");
  }

  @action
  public reset() {
    this.set("name", "");
  }
}
