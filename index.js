let dummyJsonUrl = "https://dummyjson.com/posts";
let jsonPlaceHolderUrl = "https://jsonplaceholder.typicode.com/photos";

let images, articles;

const contentDiv = document.getElementById("content");
const dialog = document.getElementById("dialog");
const dialogContent = document.getElementById("dialog-content");
const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", () => {

    while(dialogContent.hasChildNodes()) {
        dialogContent.removeChild(dialogContent.children[0]);
    }
    dialog.close();
});

let getContent = async (id = "") => {
    const contentUrl = id == "" ? dummyJsonUrl : dummyJsonUrl + `/${id}`;

    const content = await fetch(contentUrl)
        .then((response) => response.json())
        .then((json) => {
            // console.log("all content");
            // console.log(id == "" ? json.posts : json);

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

            const contentImage = document.createElement("img");
            contentImage.src = images[i].thumbnailUrl;

            const titleHeading = document.createElement("h4");
            titleHeading.innerText = images[i].title;

            const watchButton = document.createElement("button");
            watchButton.innerText = "Watch";
            watchButton.addEventListener("click", () => {

                const content = document.createElement("img");
                content.src = images[i].thumbnailUrl;

                const title = document.createElement("h4");
                title.innerText = images[i].title;

                dialogContent.appendChild(content);
                dialogContent.appendChild(title);
                dialog.showModal();
            });

            articleElement.appendChild(contentImage);
            articleElement.appendChild(titleHeading);
            articleElement.appendChild(watchButton);

            contentDiv.appendChild(articleElement);
        }
    }
}

function displayArticles(content) {

    if (Array.isArray(content)) {

        for(let i = 0; 
            i <= 5; // Limited content displayed to only 6
            i++) {

            const articleElement = document.createElement("article");

            const titleHeading = document.createElement("h4");
            titleHeading.innerText = content[i].title;

            const bodyParagraph = document.createElement("p");
            // Displaying a short excerpt instead of the full text
            bodyParagraph.innerText = content[i].body.slice(0, 300) + "...";

            const readMoreButton = document.createElement("button");
            readMoreButton.innerText = "Read More";
            readMoreButton.addEventListener("click", () => {
                const title = document.createElement("h4");
                title.innerText = content[i].title;

                const body = document.createElement("p");
                // Displaying a short excerpt instead of the full text
                body.innerText = content[i].body.slice(0, 300) + "...";

                dialogContent.appendChild(title);
                dialogContent.appendChild(body);
                dialog.showModal();
            });

            articleElement.appendChild(titleHeading);
            articleElement.appendChild(bodyParagraph);
            articleElement.appendChild(readMoreButton);

            contentDiv.appendChild(articleElement);
        }
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    getContent();
    getImages();
  }
);

function handleTabClick(event, contentType) {
  
    // This is to clear the previous clicked content.
    while (contentDiv.hasChildNodes()) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
  
    // Set the tab to be "active".
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    switch (contentType) {
        case 'sermons':
            displaySermons(images);
        break;

        case 'articles':
            displayArticles(articles);
        break;
    }

    // Display the clicked tab and set it to active.
    event.currentTarget.className += " active";
}