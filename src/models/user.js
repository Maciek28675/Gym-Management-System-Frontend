export default class User {
  constructor(employee_id, gym_id, password, role, first_name, last_name) {
    this.employee_id = employee_id;
    this.gym_id = gym_id;
    this.password = password;
    this.role = role;
    this.first_name = first_name;
    this.last_name = last_name;
  }
}