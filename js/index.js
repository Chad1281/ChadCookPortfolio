
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

    $("#projectCards").append(cardEl);
    $(cardEl).append(cardUrlEl);
    $(cardUrlEl).append(cardImgEl);
    $(cardUrlEl).append(cardGhEl);
    $(cardGhEl).append(cardGhImgEl);
    $(cardUrlEl).append(cardTitleEl);
    $(cardUrlEl).append(cardDescEl);
})

setTimeout(printText, 1000);

function printText() {
    const myName = ["H", "i", ",", " ", "m", "y", " ",  "n", "a", "m", "e", " ",  "i", "s", " ", "C", "h", "a", "d", "."];
    const myDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae purus cursus, vulputate augue sed, mattis dolor. Mauris vitae ultrices metus. Fusce id mollis elit. Sed iaculis erat urna, viverra scelerisque erat ultricies vel. Duis aliquam augue vitae placerat rhoncus. Nam dictum mi eu quam feugiat, a vestibulum est mollis. Quisque eu tortor purus. Nulla non justo erat. Duis convallis turpis nec dui maximus venenatis. Aenean luctus velit purus, ac sollicitudin purus volutpat ac. Phasellus tempor non nibh sed venenatis. Aliquam tempor fringilla erat, eu imperdiet arcu tincidunt quis. Suspendisse tempus, turpis ut accumsan sagittis, nulla justo blandit ipsum, nec pellentesque mi est nec lectus. Nullam molestie tortor ut nulla egestas, in viverra dolor cursus. Donec mattis consequat tincidunt."
    
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
        setTimeout(appendDown, 500);
    }

    function appendDown() {        
        var downArrow = $("<a>").attr("href", "#projects");
        var downArrowImg = $("<img>").attr("src", "./assets/images/down.png");        

        $("#down").append(downArrow);
        $(downArrow).append(downArrowImg);
    }
}
