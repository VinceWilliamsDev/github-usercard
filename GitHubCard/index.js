/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/VinceWilliamsDev")
  .then(response => {
    const card = cardMaker(response)
    document.querySelector(".cards").appendChild(card)
  })
  .catch(err => {
    console.log("unable to create the card")
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArray.forEach(name => {
  axios.get(`https://api.github.com/users/${name}`)
  .then(response => {
    const card = cardMaker(response)
    document.querySelector(".cards").appendChild(card)
  })
  .catch(err => {
    console.log("unable to create the card")
  })
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(githubProfile) {
  const cardWrapper = document.createElement("div")
  const userImg = document.createElement("img")
  const userInfoWrapper = document.createElement("div")
  const userHeader = document.createElement("h3")
  const userName = document.createElement("p")
  const location = document.createElement("p")
  const profile = document.createElement("p")
  const profileURL = document.createElement("a")
  const followerCount = document.createElement("p")
  const followingCount = document.createElement("p")
  const bio = document.createElement("p")

  // class names
  cardWrapper.className = "card"
  userInfoWrapper.className = "card-info"
  userHeader.className = "name"
  userName.className = "username"

  //other attributes
  userImg.src = `${githubProfile.data.avatar_url}`
  profileURL.href = `${githubProfile.data.html_url}`

  // text content
  userHeader.textContent = `${githubProfile.data.name}`
  userName.textContent = `${githubProfile.data.login}`
  location.textContent = `Location: ${githubProfile.data.location}`
  profileURL.textContent = `Profile: ${githubProfile.data.html_url}`
  followerCount.textContent = `Followers: ${githubProfile.data.followers}`
  followingCount.textContent = `Following: ${githubProfile.data.following}`
  bio.textContent = `${githubProfile.data.bio}`

  cardWrapper.appendChild(userImg)
  cardWrapper.appendChild(userInfoWrapper)
  userInfoWrapper.appendChild(userHeader)
  userInfoWrapper.appendChild(userName)
  userInfoWrapper.appendChild(location)
  userInfoWrapper.appendChild(profile)
  profile.appendChild(profileURL)
  userInfoWrapper.appendChild(followerCount)
  userInfoWrapper.appendChild(followingCount)
  userInfoWrapper.appendChild(bio)

  return cardWrapper
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
