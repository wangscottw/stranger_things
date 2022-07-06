export function getCurrentToken(){
    const token = JSON.parse(localStorage.getItem('token'))
    return token
}