"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ExerciseSchema extends Schema {
  up() {
    this.create("exercises", (table) => {
      table.increments();
      table.string("name", 50).notNullable();
      table.string("observation", 200);
      table.integer("series");
      table.integer("wait_time");
      table.string("url_image", 50);
      table.timestamps();
    });
  }

  down() {
    this.drop("exercises");
  }
}

module.exports = ExerciseSchema;
