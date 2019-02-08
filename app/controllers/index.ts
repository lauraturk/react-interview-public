import { action } from "@ember-decorators/object";
import { Card } from "../../types/ember-colorpalette/card";
import Controller from "@ember/controller";

export default class Domains extends Controller {
  // Actions
  // ---------------------------------------------------------------------------
  @action
  addColor(value: Card) {
    this.model.pushObject(value);
  }

  @action
  deleteColor(value: Card) {
    const index = this.model.reduce(
      (memo, card, idx) => (memo = card.name === value.name ? idx : memo),
      null
    );
    this.model.removeAt(index);
  }
}
