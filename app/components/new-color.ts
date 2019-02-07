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

  layout = hbs`
    <form>
      <h1>name: {{card.name}}</h1>
      <h1>color: {{card.color}}</h1>
      <h1>stars: {{card.stars}}</h1>
    </form>
  `;
}
