// Can you explain what is being imported here?
import { getPosts, getUsers } from "./data/DataManager.js"
import { usePostCollection } from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js"
import { NavBar } from "./nav/navBar.js";
import { Footer } from "./nav/footer.js";


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


const startGiffyGram = () => {
    showNavBar()
	showPostList();
    shoowFooter()
}

startGiffyGram();

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
  