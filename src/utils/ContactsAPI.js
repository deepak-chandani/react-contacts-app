const api = process.env.REACT_APP_CONTACTS_API_URL || 'https://jsonplaceholder.typicode.com'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () =>
  fetch(`${api}/users`, { headers })
    .then(res => res.json())
    .then(contacts => {
       return contacts.map(element => {
          element.avatarUrl = 'http://lorempixel.com/200/200/people'+'?keyId='+element.id;
          return element;
       });
    })    

export const remove = (contact) =>
  fetch(`${api}/users/${contact.id}`, { method: 'DELETE', headers })
    .then(res => res.json())    

export const create = (body) =>
  fetch(`${api}/users`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
