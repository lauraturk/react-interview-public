import { Card, CardCallback } from "../../types/ember-colorpalette/card";
import { action } from "@ember-decorators/object";
import { attribute } from "@ember-decorators/component";
import { computed } from "@ember-decorators/object";
import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

export default class ColorCard extends Component {
  // Computed properties
  // ---------------------------------------------------------------------------
  @computed("card.color")
  @attribute
  get style() {
    return `background-color: ${this.card.color};`;
  }

  // Actions
  // ---------------------------------------------------------------------------
  @action
  deleteCard(e) {
    console.log("card wants to delete");
    this.deleteCallback(this.card);
  }

  // Passed properties
  // ---------------------------------------------------------------------------
  deleteCallback: CardCallback = () => undefined;
  card: Card = null;

  layout = hbs`
    <section class="{{styleNamespace}}__main">
      <h1>name: {{card.name}}</h1>
      <p>color: {{card.color}}</p>
      <p>stars: {{card.stars}}</p>
    </section>
    <section class="{{styleNamespace}}__actions">
      {{#ui-button onClick=(action "deleteCard")}}Delete{{/ui-button}}
    </section>
  `;
}
