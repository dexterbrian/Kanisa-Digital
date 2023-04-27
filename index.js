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