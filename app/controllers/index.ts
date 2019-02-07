import { action } from '@ember-decorators/object'
import Controller from '@ember/controller'

export default class Domains extends Controller {
  // Actions
  // ---------------------------------------------------------------------------
  @action
  addColor() {
    console.log('adding a color...')
  }
}
