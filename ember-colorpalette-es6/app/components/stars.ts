import { action } from "@ember-decorators/object";
import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

export default class Stars extends Component {
  public stars: number = 0;

  public layout = hbs`
    <button {{action "vote" 1}}>⭐</button>
    <button {{action "vote" 2}}>⭐</button>
    <button {{action "vote" 3}}>⭐</button>
    <button {{action "vote" 4}}>⭐</button>
    <button {{action "vote" 5}}>⭐</button>
    <p>stars: {{stars}}</p>
  `;
  // Actions
  // ---------------------------------------------------------------------------
  @action
  public vote(id: number) {
    this.votingCallback(id);
  }

  // Passed properties
  // ---------------------------------------------------------------------------
  public votingCallback: (id: number) => undefined = () => undefined;
}
