
console.log(projectLinks);
projectLinks.forEach(function(element) {
    console.log(element);
    var cardEl = $("<div>").addClass("card cyan-theme");
    var cardImgEl = $("<img>").addClass("card-img").attr("src", element.image);
    var cardUrlEl = $("<a>").addClass("card-url").attr("href", element.url);
    var cardGhEl = $("<a>").addClass("card-gh").attr("href", element.github);
    var cardGhImgEl = $("<img>").addClass("card-gh-img").attr("src", "./assets/images/GitHub.png");
    var cardTitleEl = $("<div>").addClass("card-title").text(element.title);
    var cardDescEl = $("<div>").addClass("card-desc").text(element.description);

    $("#projects").append(cardEl);
    $(cardEl).append(cardUrlEl);
    $(cardUrlEl).append(cardImgEl);
    $(cardUrlEl).append(cardGhEl);
    $(cardGhEl).append(cardGhImgEl);
    $(cardUrlEl).append(cardTitleEl);
    $(cardUrlEl).append(cardDescEl);
})

setTimeout(printText, 2000);

function printText() {
    const myName = ["H", "i", ",", " ", "m", "y", " ",  "n", "a", "m", "e", " ",  "i", "s", " ", "C", "h", "a", "d", "."];
    const myDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    var i = 0;

    var id = setInterval(addText, 150); 

    function addText() {
            document.getElementById("aboutName").innerHTML += myName[i];
            i++
            if (i > myName.length - 1) {
                clearInterval(id);
                setTimeout(printDesc, 1000);
            }                        
        }

    function printDesc() {
        document.getElementById("aboutDesc").innerHTML += myDesc;
    }
}
