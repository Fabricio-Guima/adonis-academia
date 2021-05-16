"use strict";

const Exercise = use("App/Models/Exercise");

class ExerciseController {
  async index() {
    return await Exercise.all();
  }
  async show({ params }) {
    const exercise = await Exercise.findOrFail(params.id);

    return exercise;
  }
  async store({ request }) {
    const data = request.only([
      "name",
      "observation",
      "series",
      "wait_time",
      //   "url_image",
    ]);

    const exercise = await Exercise.create(data);
    return exercise;
  }

  async update({ params, request }) {
    const exercise = await Exercise.findOrFail(params.id);
    const data = request.only([
      "name",
      "observation",
      "series",
      "wait_time",
      //   "url_image",
    ]);

    exercise.merge(data);
    await exercise.save();

    return exercise;
  }
  async destroy({ params }) {
    const exercise = await Exercise.findOrFail(params.id);
    return await exercise.delete();
  }
}

module.exports = ExerciseController;
