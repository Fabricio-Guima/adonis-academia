"use strict";

const Training = use("App/Models/Training");

class TrainingController {
  async index() {
    return await Training.all();
  }
  async show({ params }) {
    const training = await Training.findOrFail(params.id);
    //pegar informações da outra tabela
    await training.load("user");
    return training;
  }
  async store({ request }) {
    const data = request.only(["client_id", "name", "observation"]);
    const exercises = request.input("exercises");

    const training = await Training.create(data);

    if (exercises) {
      // isso vai vincular o id de treino aos id de exercícios na tabela pivo (intermediária)
      await training.exercises().attach(exercises);
    }

    //nome exercises tem que ser igual a função de relacionamento que está na model training para ele puxar o treino + os exercícios
    await training.load("exercises");

    return training;
  }

  async update({ params, request }) {
    const training = await Training.findOrFail(params.id);
    const data = request.only([
      "client_id",
      "name",
      "observation",
      "exercises",
    ]);
    training.merge(data);
    await training.save();

    return training;
  }
  async destroy({ params }) {
    const training = await Training.findOrFail(params.id);
    return await training.delete();
  }
}

module.exports = TrainingController;
