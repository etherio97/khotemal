import admin from "../plugins/admin";

class HeroModel {
  constructor() {}
}

export default class Hero {
  constructor(snapshot) {
    this.$id = null;
    this.$snapshot = snapshot;
    this.$initialValue = null;
    Object.freeze(this.$initialValue);
  }

  toJSON() {
    this.$initialData = this.$initialValue || this.$snapshot.val() || {};
    return {
      $id: this.$id || this.$snapshot.key,
      ...this.$initialData
    };
  }

  get exists() {
    return this.$snapshot.exists();
  }

  static ref() {
    return admin()
      .database()
      .ref("v1")
      .child("heroes");
  }

  static all() {
    return Hero.ref()
      .get()
      .then(snapshot => snapshot.val());
  }

  static get(id) {
    return Hero.ref()
      .child(id)
      .get()
      .then(snapshot => new Hero(snapshot));
  }
}
