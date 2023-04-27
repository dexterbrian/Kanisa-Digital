let dummyJsonUrl = "https://dummyjson.com/posts";
let jsonPlaceHolderUrl = "https://jsonplaceholder.typicode.com/photos";

let getContent = async (contentId = "") => {
    const contentUrl = contentId == "" ? dummyJsonUrl : dummyJsonUrl + `posts/${contentId}`;
    const imagesUrl = contentId == "" ? jsonPlaceHolderUrl : jsonPlaceHolderUrl + `photos/${contentId}`;

    const content = await fetch(contentUrl)
        .then((response) => response.json())
        .then((json) => {
            console.log("base url");
            console.log(imagesUrl);
            console.log("all content");
            console.log(contentId == "" ? json.posts : json);
            return contentId == "" ? json.posts : json;
        })
    ;

    const images = await fetch(imagesUrl)
        .then((response) => response.json())
        .then((json) => {
            console.log("images");
            console.log(json);
            return json;
        })
    ;

    displayContent(content, images);
    return {
        content: content,
        images: images
    };
};

function displayContent(content) {

    const contentDiv = document.getElementById("content");

    // Check if content is an array
    if (Array.isArray(content)) {

        // content.forEach(content => {

        //     const titleHeading = document.createElement("h2");
        //     const titleNode = document.createTextNode(content.title);
        //     titleHeading.appendChild(titleNode);

        //     const contentImage = document.createElement("img");
        //     contentImage.src = 
        //     const bodyNode = document.createTextNode(content.body);
        //     contentImage.appendChild(bodyNode);

            // const bodyParagraph = document.createElement("p");
            // const bodyNode = document.createTextNode(content.body);
            // bodyParagraph.appendChild(bodyNode);

        //     articleElement.appendChild(titleHeading);
        //     articleElement.appendChild(bodyParagraph);

        //     contentDiv.appendChild(articleElement);
        // });

        for(let i = 0; 
            i <= 5; // Limited content displayed to only 6
            i++) {

            const articleElement = document.createElement("article");

            // const contentImage = document.createElement("img");
            // contentImage.src = images[i].thumbnailUrl;

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

    // Get the content div

    // If content is an array, loop through it and create h2 and p tags for the content title and body
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