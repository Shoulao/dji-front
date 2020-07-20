import { config } from "../_urls/config";
import { endpoints } from "../_urls/urls";
import { history } from "../_helpers/history";

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

    if (!response.ok) {
      if (response.status === 401) {
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

/* REGISTER NEW USER */
const register = ({ email, password, username }) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, username }),
  };

  return fetch(`${config.apiUrl}${endpoints.register}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      if (data.status === 201) {
        console.log("SUCCESS REGISTRATION");
      }
    })
    .catch(error => console.log);
};

/* LOGIN USER */
const login = ({ username, password }) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`${config.apiUrl}${endpoints.login}`, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem("user", JSON.stringify(user));
    });
};

export const userService = {
  login,
  logout,
  register,
};
