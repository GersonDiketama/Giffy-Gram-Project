// Can you explain what is being imported here?
import { getPosts, getUsers } from "./data/DataManager.js"
import { usePostCollection } from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js"
import { createPost } from "./data/DataManager.js";
import { NavBar } from "./nav/navBar.js";
import { Footer } from "./nav/footer.js";
import { PostEntry } from "./data/PostEntry.js";


// const showUsers = (ee) =>
// {
//        ee = getLoggedInUser()

//        let jj = ""

//        for(const gg of ee)
//        {
//            const showme = (tt) =>
//            {
//                return `<li>${tt.name}</li>`
//            }

//            jj += showme(gg)
//        }
// document.querySelector('.postList').innerHTML = jj
// }



const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}


const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}
 const shoowFooter = () =>
 {
     const footerS = document.querySelector('footer')
     footerS.innerHTML = Footer()
 }




const applicationElement = document.querySelector(".giffygram");


applicationElement.addEventListener("click", event => {
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})

//I copied this code from the book chapter 12


applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
      console.log(`User wants to see posts since ${yearAsNumber}`)
      //invoke a filter function passing the year as an argument
      showFilteredPosts(yearAsNumber);
    }
  })
  
  const showFilteredPosts = (year) => {
    //get a copy of the post collection
    const epoch = Date.parse(`01/01/${year}`);
    //filter the data
    const filteredData = usePostCollection().filter(singlePost => {
      if (singlePost.timestamp >= epoch) {
        return singlePost
      }
    })
    const postElement = document.querySelector(".postList");
    postElement.innerHTML = PostList(filteredData);
  }
  
  




applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see posts since ${yearAsNumber}`)
    }
  })
  


//Just copied the code now

  applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__cancel") {
        //clear the input fields
    }
  })
  
  applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
    //collect the input values into an object to post to the DB
      const title = document.querySelector("input[name='postTitle']").value
      const url = document.querySelector("input[name='postURL']").value
      const description = document.querySelector("textarea[name='postDescription']").value
      //we have not created a user yet - for now, we will hard code `1`.
      //we can add the current time as well
      const postObject = {
          title: title,
          imageURL: url,
          description: description,
          userId: 1,
          timestamp: Date.now()
      }
  
    // be sure to import from the DataManager
        createPost(postObject)
    }
  })
  




  const showPostEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".entryForm");
    entryElement.innerHTML = PostEntry();
  }
  


  const startGiffyGram = () => {
    showNavBar()
	showPostList();
    shoowFooter()
    showPostEntry()
}

startGiffyGram();