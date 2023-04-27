let dummyJsonUrl = "https://dummyjson.com/posts";
let jsonPlaceHolderUrl = "https://jsonplaceholder.typicode.com/photos";

let images, articles;

const contentDiv = document.getElementById("content");

let getContent = async (id = "") => {
    const contentUrl = id == "" ? dummyJsonUrl : dummyJsonUrl + `/${id}`;

    const content = await fetch(contentUrl)
        .then((response) => response.json())
        .then((json) => {
            console.log("all content");
            console.log(id == "" ? json.posts : json);
            // Display single post content if id isn't empty
            return id == "" ? json.posts : json;
        })
    ;

    articles = content;
    displayArticles(content);
    return content;
};

let getImages = async (id = "") => {

    const imagesUrl = id == "" ? jsonPlaceHolderUrl : jsonPlaceHolderUrl + `/${id}`;

    const allImages = await fetch(imagesUrl)
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
    ;
    images = allImages;
    return allImages;
};

function displaySermons(images) {

    if (Array.isArray(images)) {

        for(let i = 0; 
            i <= 5; // Limited content displayed to only 6
            i++) {

            const articleElement = document.createElement("article");
            //articleElement.className = "tabcontent";

            const contentImage = document.createElement("img");
            contentImage.src = images[i].thumbnailUrl;

            const titleHeading = document.createElement("h4");
            titleHeading.innerText = images[i].title;

            const readMoreButton = document.createElement("button");
            readMoreButton.innerText = "Watch";

            articleElement.appendChild(contentImage);
            articleElement.appendChild(titleHeading);
            articleElement.appendChild(readMoreButton);

            contentDiv.appendChild(articleElement);
        }
    }
}

function displayArticles(content) {

    const contentDiv = document.getElementById("content");

    // Check if content is an array
    if (Array.isArray(content)) {

        for(let i = 0; 
            i <= 5; // Limited content displayed to only 6
            i++) {

            const articleElement = document.createElement("article");

            const titleHeading = document.createElement("h4");
            titleHeading.innerText = content[i].title;

            const bodyParagraph = document.createElement("p");
            bodyParagraph.innerText = content[i].body.slice(0, 300) + "...";

            const readMoreButton = document.createElement("button");
            readMoreButton.innerText = "Read More";

            articleElement.appendChild(titleHeading);
            articleElement.appendChild(bodyParagraph);
            articleElement.appendChild(readMoreButton);

            contentDiv.appendChild(articleElement);
        }
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    getContent();
  }
);

function handleTabClick(event, contentType) {
    let tabcontent, tablinks;
  
    // This is to clear the previous clicked content.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Set the tab to be "active".
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Display the clicked tab and set it to active.
    document.getElementById(contentType).style.display = "block";
    event.currentTarget.className += " active";
  }