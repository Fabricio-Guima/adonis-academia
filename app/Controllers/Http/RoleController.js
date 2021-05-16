"use strict";

const Role = use("Role");

class RoleController {
  async index() {
    return await Role.all();
  }

  async show({ params }) {
    const role = await Role.findOrFail(params.id);
    await role.load("permissions");
    return role;
  }

  async store({ request }) {
    const data = request.only(["name", "slug", "description"]);
    const permissions = request.input("permissions");
    const role = await Role.create(data);

    if (permissions) {
      await role.permissions().attach(permissions);
    }

    await role.load("permissions");
    return role;
  }

  async update({ params, request }) {
    const data = request.only(["name", "slug", "description", "permissions"]);
    const role = await Role.findOrFail(params.id);

    role.merge(data);
    await role.save;

    if (permissions) {
      await role.permissions().sync(permissions);
    }
    await role.load("permissions");

    return role;
  }

  async destroy({ params }) {
    const role = await Role.findOrFail(params.id);
    return role.delete();
  }
}

module.exports = RoleController;
