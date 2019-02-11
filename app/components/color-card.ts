import {
  Card,
  CardCallback,
  VotingCallback
} from "../../types/ember-colorpalette/card";
import { action } from "@ember-decorators/object";
import { attribute } from "@ember-decorators/component";
import { computed } from "@ember-decorators/object";
import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

const TEST = false;

function brightness(color: string): number {
  // parse card.color into three variables
  const redness = (parseInt(color.slice(1, 3), 16) + 1) / 256;
  const blueness = (parseInt(color.slice(3, 5), 16) + 1) / 256;
  const greenness = (parseInt(color.slice(5, 7), 16) + 1) / 256;
  // A bunch of color theory here: different colors don't contribute equally to brightness
  const redMultiplier = 77 / 255; // because science
  const blueMultiplier = 150 / 255;
  const greenMultiplier = 28 / 255;
  return (
    redMultiplier * redness +
    blueMultiplier * blueness +
    greenMultiplier * greenness
  );
}

function toGrayscale(color: string): string {
  return `hsl(0, 0%, ${brightness(color) * 100}%)`;
}

export default class ColorCard extends Component {
  // Computed properties
  // ---------------------------------------------------------------------------
  @computed("card.color")
  @attribute
  get style() {
    const color = brightness(this.card.color) > 0.5 ? "black" : "white";
    if (TEST) {
      const backgroundColor = toGrayscale(this.card.color);
      return `background-color: ${backgroundColor}; color: ${color};`;
    }
    return `background-color: ${this.card.color}; color: ${color};`;
  }

  // Actions
  // ---------------------------------------------------------------------------
  @action
  editColor() {
    this.set("isEditing", !this.isEditing);
  }

  @action
  deleteCard() {
    console.log("card wants to delete");
    this.deleteCallback(this.card);
  }

  @action
  voteOnCard(value: number) {
    this.votingCallback(this.card, value);
  }

  // Passed properties
  // ---------------------------------------------------------------------------
  deleteCallback: CardCallback = () => undefined;
  votingCallback: VotingCallback = () => undefined;
  card: Card = null;

  // Internal properties
  // ---------------------------------------------------------------------------
  isEditing: boolean = false;

  // TODO: click on the text field to edit the text value directly
  // Template
  // ---------------------------------------------------------------------------
  layout = hbs`
    <section class="{{styleNamespace}}__main">
      <h1>name: {{card.name}}</h1>
      <section class="{{styleNamespace}}__colorField">
        <p>color: {{card.color}}</p>
        {{input value=card.color type="color"}}
      </section>
      <Stars @stars={{card.stars}} @votingCallback={{action "voteOnCard"}}/>
    </section>
    <section class="{{styleNamespace}}__actions">
      <UiButton @onClick={{action "deleteCard"}}>Delete</UiButton>
    </section>
  `;
}
