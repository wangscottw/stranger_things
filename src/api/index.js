import axios from 'axios'

const BASE = 'https://strangers-things.herokuapp.com/api/'
const COHORT = '2206-FTB-ET-WEB-FT-A'


export async function registerPerson(event){
    let registerUsername = event.target[0].value
    let registerPassword = event.target[1].value
    const response = await fetch (`${BASE}${COHORT}/users/register`,
    {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: {registerUsername},
            password: {registerPassword}
          }
        })
      })
      const result = response.json()
      const token = result.data.token
      localStorage.setItem('token', token)
      const tokenFromStorage = localStorage.getItem('token')
      console.log(tokenFromStorage)
    }
