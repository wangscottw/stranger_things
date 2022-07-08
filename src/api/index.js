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

export async function editPosts (token) {
  const response = await fetch(`${BASE}${COHORT}/posts/5e8d1bd48829fb0017d2233b`, {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    post: {
      title: "My favorite stuffed animal",
      description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
      price: "$480.00",
      location: "New York, NY",
      willDeliver: true
    }
  })
})
const result = await response.json()
console.log(result)
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