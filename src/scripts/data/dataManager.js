
export const getUsers = () =>
{
    return fetch ("https://localhost:8088/users")
    .then(response => response.json)

}

// export const getPosts = () => {

//     return fetch("http://localhost:8088/posts")
//     .then(response => response.json())
//     .then(parsedResponse => {
//         // do something with response here
//         return parsedResponse;
//     })
// }



let postCollection = [];

export const usePostCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...postCollection];
}
export const getPosts = () => {
  return fetch("http://localhost:8088/posts")
    .then(response => response.json())
    .then(parsedResponse => {
      postCollection = parsedResponse
      return parsedResponse;
    })
}



export const getLoggedInUser = () => 
{
    return loggedInUser
}

const loggedInUser = 
{
//     id = 2,
    name: "Bryan",
    email: "bryan@nss.com"
}

