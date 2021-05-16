"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Training extends Model {
  //vários exercícios pertencem a um treino
  exercises() {
    return this.belongsToMany("App/Models/Exercise");
  }
}

module.exports = Training;
