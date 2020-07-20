export const authHeader = () => {
  const user_obj = localStorage.getItem("user");
  let user = user_obj ? JSON.parse(user_obj) : false;

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
};
