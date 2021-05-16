"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

// Route.get("/users", "UserController.index");
// Route.get("/users/:id", "UserController.show");
// Route.post("/users", "UserController.store");
// Route.put("/users/:id", "UserController.update");
// Route.delete("/users/:id", "UserController.destroy");
Route.resource("users", "UserController")
  .apiOnly()
  .validator(new Map([[["users.store"], ["User"]]]))
  .middleware(["auth:jwt", "is:manager"]);
Route.resource("clients", "ClientController").apiOnly().middleware("auth:jwt");
Route.resource("exercises", "ExerciseController")
  .apiOnly()
  .middleware("auth:jwt");
Route.resource("trainings", "TrainingController")
  .apiOnly()
  .middleware("auth:jwt");

//Login gerar token e um refreshtoken pra quando o token expirar
Route.post("/sessions", "SessionController.create");
Route.put("/sessions", "SessionController.refreshToken");

//permissoes que o usuário terá no sistema
Route.resource("/permissions", "PermissionController")
  .apiOnly()
  .middleware("auth:jwt");
Route.resource("/roles", "RoleController").apiOnly().middleware("auth:jwt");
