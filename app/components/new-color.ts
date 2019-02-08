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

  @action
  save() {
    this.addCallback({ name: this.name, color: this.color, stars: 0 });
    this.set("name", "");
    this.set("color", "");
  }

  @action
  reset() {
    // TODO: use this.name = ""
    this.set("name", "");
  }

  // Internal properties
  // ---------------------------------------------------------------------------
  name: string = "";
  color: string = "";

  layout = hbs`
    {{#ui-form onSubmit=(action 'save') as |form|}}
      <section>
        {{#form.label}}Color name:{{/form.label}}
        {{form.input placeholder='my cool color' value=name}}
      </section>

      <section>
        {{#form.label}}Color:{{/form.label}}
        {{form.input value=color type='color'}}
      </section>

      <section>
        {{#ui-button onClick=(action 'reset')}}Reset{{/ui-button}}
        {{#form.submit}}Save{{/form.submit}}
      </section>
    {{/ui-form}}
  `;
}
