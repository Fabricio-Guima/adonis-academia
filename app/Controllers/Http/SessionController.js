"use strict";

class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.all();
    console.log("email: ", email);
    console.log("password: ", password);
    return await auth.withRefreshToken().attempt(email, password);
  }

  async refreshToken({ request, auth }) {
    const refreshToken = request.input("refresh_token");
    return await auth
      .newRefreshToken()
      .generateForRefreshToken(refreshToken, true);
  }
}

module.exports = SessionController;
