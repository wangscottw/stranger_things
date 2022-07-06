const BASE = "https://strangers-things.herokuapp.com/api/";
const COHORT = "2206-FTB-ET-WEB-FT-A";

export async function registerPerson(username, password) {
  const response = await fetch(`${BASE}${COHORT}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const result = await response.json();
  const token = result.data.token;
  localStorage.setItem("token", token);
  const tokenFromStorage = localStorage.getItem("token");
  console.log(tokenFromStorage);
}

export async function loginPerson(username, password) {
  const response = await fetch(`${BASE}${COHORT}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const result = await response.json();
  const token = result.data.token;
  localStorage.setItem("token", token);
  const tokenFromStorage = localStorage.getItem("token");
  console.log(result);
  console.log(tokenFromStorage);
  return tokenFromStorage
}

