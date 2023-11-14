function updateText() {
    const words = ["a Web Developer!","a Tech Enthusiast! ", "an Engineer!"];
    const textElement = document.getElementById("words");
    let i = 0;

    setInterval(function () {
        textElement.style.opacity = 0;
        setTimeout(function () {
            textElement.textContent = words[i];
            textElement.style.opacity = 1;
            i = (i + 1) % words.length;
        }, 2000); // Change text after 1 second
    }, 2000); // Fade out and in every 2 seconds
}

updateText(); // Start the text rotation

// making tab visible and invisible
let tabLinks = document.getElementsByClassName("tab-link");
let tabContents = document.getElementsByClassName("tab-content");

function opentab(event, tabname){
    for(tablink of tabLinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}