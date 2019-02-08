import { action } from "@ember-decorators/object";
import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";
import { CardCallback } from "../../types/ember-colorpalette/card";

export default class Stars extends Component {
  // Actions
  // ---------------------------------------------------------------------------
  @action
  vote(id: number) {
    this.votingCallback(id);
  }

  // Passed properties
  // ---------------------------------------------------------------------------
  votingCallback: (id: number) => undefined = () => undefined;
  stars: number = 0;

  layout = hbs`
    <button {{action "vote" 1}}>⭐</button>
    <button {{action "vote" 2}}>⭐</button>
    <button {{action "vote" 3}}>⭐</button>
    <button {{action "vote" 4}}>⭐</button>
    <button {{action "vote" 5}}>⭐</button>
    <p>stars: {{stars}}</p>
  `;
}
