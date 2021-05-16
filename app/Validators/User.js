"use strict";

class User {
  get validateAll() {
    return true;
  }
  get rules() {
    return {
      name: "required",
      username: "required",
      email: "required|email|unique:users",
      password: "required",
      type_user_id: "required",
    };
  }

  get messages() {
    return {
      "name.required": "Informe o campo name",
      "username.required": "Informe o campo username",
      "email.required": "Informe o campo email",
      "email.email": "Informe o campo de email válido",
      "email.unique": "Informe outro email",
      "password.required": "Informe o campo password",
      "type_user_id.required": "Informe o campo type_user_id",
    };
  }
}

module.exports = User;
