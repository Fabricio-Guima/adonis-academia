"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Client extends Model {
  // um cliente é necessariamente um usuário
  user() {
    return this.belongsTo("App/Models/User");
  }

  //um cliente pode ter muitos treinos
  trainings() {
    return this.hasMany("App/Models/Training");
  }
}

module.exports = Client;
