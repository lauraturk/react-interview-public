import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

export default class ColorCard extends Component {
  // Passed properties
  // ---------------------------------------------------------------------------
  card = null;

  layout = hbs`
    <h1>name: {{card.name}}</h1>
    <h1>color: {{card.color}}</h1>
    <h1>stars: {{card.stars}}</h1>
  `;
}
