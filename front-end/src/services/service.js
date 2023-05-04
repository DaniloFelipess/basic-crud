import { AxiosResponse } from "axios";
import { UsersAPI } from "./api";

export default class UsersService {
  static getUsers() {
    return UsersAPI.get("/");
  }
  static addUser(item) {
    return UsersAPI.post("/add", item);
  }
  static updateUser(id, item) {
    return UsersAPI.put(`/${id}`, item);
  }
  static deleteUSer(id) {
    return UsersAPI.delete(`/${id}`);
  }
}
