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
  return result
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
  return tokenFromStorage
}

export async function retrievePosts() {
  const response = await fetch(`${BASE}${COHORT}/posts`)
  const result = await response.json()
    return result
  
}

export async function getProfile (token) {
  const response = await fetch(`${BASE}${COHORT}/users/me`,
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  const result = await response.json()
  const data = result.data
  console.log(data)
  return data
}

export async function editPosts (token, titleAdd, descAdd, priceAdd, willDeliver, postId) {
  const response = await fetch(`${BASE}${COHORT}/posts/${postId}`, {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    post: {
      title: titleAdd,
      description: descAdd,
      price: priceAdd,
      location: "Somewhere over the rainbow",
      willDeliver: willDeliver
    }
  })
})
const result = await response.json()
}

export async function addPostings (token, titleAdd, descAdd, priceAdd, willDeliver) {
  const response = await fetch(`${BASE}${COHORT}/posts`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    post: {
      title: titleAdd,
      description: descAdd,
      price: priceAdd,
      willDeliver: willDeliver
    }
  })
})
const result= await response.json()
}