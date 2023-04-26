let baseUrl = "https://dummyjson.com/posts";

let getContent = async (contentId = "") => {
    baseUrl = contentId == "" ? baseUrl : baseUrl + `/${contentId}`;
    const allContent = await fetch(baseUrl)
        .then((response) => response.json())
        .then((json) => {
            console.log("base url");
            console.log(baseUrl);
            console.log("all content");
            console.log(contentId == "" ? json.posts : json);
            return json;
        })
    ;
    return allContent;
};

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    getContent();
  }
);

// async function getContent() {
//     return await fetch(baseUrl)
//         .then((response) => response.json())
//         .then((json) => {
//             return json;
//         })
//     ;
// }

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