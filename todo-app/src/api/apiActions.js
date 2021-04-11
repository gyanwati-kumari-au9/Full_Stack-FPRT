import { publicFetch } from "./fetch";

export async function login(user) {
  let data = await publicFetch
    .post("users/login", user)
    .then((response) => response.data)
    .catch(() => false);

  return data;
}

export async function signup(user) {
  let data = await publicFetch
    .post("users/signup", user)
    .then((response) => response.data)
    .catch(() => false);

  return data;
}

export async function getUserTodos(id) {
  let data = await publicFetch
    .get(`todos/${id}`)
    .then((response) => response.data)
    .catch(() => false);

  return data;
}

export async function updateUser({ id, user, token }) {
  let data = await publicFetch
    .put(`users/${id}`, user, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    })
    .then((response) => response.data)
    .catch((err) => false);

  return data;
}

export async function deleteTodos({ id, token }) {
  let data = await publicFetch
    .delete(`todos/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    })
    .then((response) => response.data)
    .catch((err) => false);

  return data;
}

// 
export async function addTodos(todo) {
  let data = await publicFetch
    .post("todos", todo)
    .then((response) => response.data)
    .catch(() => false);

  return data;
}

export async function updateTodoStatus(id, todo, token) {
  let data = await publicFetch
    .put(`todos/${id}`, todo)
    .then((response) => response.data)
    .catch(() => false);

  return data;
}