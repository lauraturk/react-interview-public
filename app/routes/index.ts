import Route from "@ember/routing/route";

export default class Index extends Route {
  model() {
    return [{ color: "#4286f4", name: "blueish", stars: 0 }];
  }
}