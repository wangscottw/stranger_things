const BASE = "https://strangers-things.herokuapp.com/api/";
const COHORT = "2206-FTB-ET-WEB-FT";

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
  localStorage.setItem("username", username);
  return result;
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
  localStorage.setItem("username", username);
  return token;
}

export async function retrievePosts() {
  const response = await fetch(`${BASE}${COHORT}/posts/`);
  const result = await response.json();
  return result;
}

export async function getProfile(token) {
  const response = await fetch(`${BASE}${COHORT}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const data = result.data;
  return data;
}

export async function editPosts(
  token,
  titleAdd,
  descAdd,
  priceAdd,
  willDeliver,
  locationAdd,
  postId
) {
  const response = await fetch(`${BASE}${COHORT}/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: titleAdd,
        description: descAdd,
        price: priceAdd,
        location: locationAdd,
        willDeliver: willDeliver,
      },
    }),
  });
  const result = await response.json();
  return result;
}

export async function addPostings(
  token,
  titleAdd,
  descAdd,
  priceAdd,
  locationAdd,
  willDeliver
) {
  const response = await fetch(`${BASE}${COHORT}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: titleAdd,
        description: descAdd,
        price: priceAdd,
        location: locationAdd,
        willDeliver: willDeliver,
      },
    }),
  });
  await response.json();
}

export async function deletePosts(token, postId) {
  const response = await fetch(`${BASE}${COHORT}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  await response.json();
}

export async function processMessages(token, postId, messageContent) {
  const response = await fetch(`${BASE}${COHORT}/posts/${postId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      message: {
        content: messageContent,
      },
    }),
  });
  await response.json();
}
