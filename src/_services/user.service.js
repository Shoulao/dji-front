import { config } from "../_urls/config";
import { endpoints } from "../_urls/urls";

/* LOGOUT USER */
const logout = () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${config.apiUrl}${endpoints.logout}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      if (data.status === 201) {
        localStorage.removeItem("user");
        console.log(data.msg);
      }
    });
};

/* RESPONSE HANDLER */
const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    return data;
  });
};

/* REGISTER NEW USER */
const register = user => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`${config.apiUrl}${endpoints.register}`, requestOptions)
    .then(handleResponse)
    .then(data => data)
    .catch(error => console.log);
};

/* LOGIN USER */
const login = data => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(`${config.apiUrl}${endpoints.login}`, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
};

export const userService = {
  login,
  logout,
  register,
};
