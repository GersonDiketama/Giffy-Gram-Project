import { getLoggedInUser } from "../data/DataManager.js";
import { setLoggedInUser } from "../data/DataManager.js";
import { getLikes } from "../data/DataManager.js";

//this needs to be located above the Post declaration
//this could also be imported to this module
const getNumberOfLikes = (postId) => {
  getLikes(postId)
  .then(response => {
    document.querySelector(`#likes__${postId}`).innerHTML = `👍 ${response.length}`;
  })
}


  export const Post = (postObject) => {
    if(getLoggedInUser().id == postObject.user.id)
    {
      console.log("thissss",getLoggedInUser().id)
      return `
      <section class="post">
        <header>
            <h1>${postObject.user.name}</h1>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <h4>${postObject.description}</h4>
      
 <p id="likes__${postObject.id}">👍${getNumberOfLikes(postObject.id)}</p>
        <button id="edit--${postObject.id}">Edit</button>
        <button id="delete__${postObject.id}">Delete</button>
        <button id="like__${postObject.id}">Like</button>

      </section>
     


    `
    }
    else if(getLoggedInUser().id != postObject.user.id)
    {  return `
    <section class="post">
      <header>
          <h1>${postObject.user.name}</h1>
          <h2 class="post__title">${postObject.title}</h2>
      </header>
      <img class="post__image" src="${postObject.imageURL}" />
      <h4>${postObject.description}</h4>
    
<p id="likes__${postObject.id}">👍${getNumberOfLikes(postObject.id)}</p>
<button id="like__${postObject.id}">Like</button>

</section>
`
  }}




//   export const Post = (postObject) => {

//     return `
//       <section class="post">
//         <header>
//             <h1>${postObject.user.name}</h1>
//             <h2 class="post__title">${postObject.title}</h2>
//         </header>
//         <img class="post__image" src="${postObject.imageURL}" />
//         <h4>${postObject.description}</h4>
      
//  <p id="likes__${postObject.id}">👍${getNumberOfLikes(postObject.id)}</p>
//         <button id="edit--${postObject.id}">Edit</button>
//         <button id="delete__${postObject.id}">Delete</button>
//         <button id="like__${postObject.id}">Like</button>

//       </section>
     


//     `

// }


