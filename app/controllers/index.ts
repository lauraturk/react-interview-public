import { action } from "@ember-decorators/object";
import Controller from "@ember/controller";

export default class Domains extends Controller {
  // Actions
  // ---------------------------------------------------------------------------
  @action
  addColor(value) {
    console.log("adding a color...", value);
    this.model.pushObject(value);
  }
}
