
// const projLinks = ("./data/projectLinks");
// console.log(projLinks);
// const projects = projLinks.map(x => x);
console.log(projectLinks);
projectLinks.forEach(function(element) {
    console.log(element);
    var cardImgEl = $("<img>").addClass("card-img").attr("src", element.image);
    var cardUrlEl = $("<a>").addClass("card-url").attr("href", element.url);
    var cardTitleEl = $("<div>").addClass("card-title").text(element.title);
    var cardDescEl = $("<div>").addClass("card-desc").text(element.description);

    $(".card").append(cardUrlEl);
    $(cardUrlEl).append(cardImgEl);
    $(cardUrlEl).append(cardTitleEl);
    $(cardUrlEl).append(cardDescEl);
})
// var headContainer = $("#headContainer");

// var intElemClientHeight = headContainer.clientHeight;
// var intElemClientWidth = headContainer.clientWidth;
// var intViewportHeight = window.innerHeight;
// var intVeiwportWidth = window.innerWidth;

// var bkgdDiv = $("<div>");
// var bkgdDivRow = headContainer.append(bkgdDiv) * 10;
// // var bkgdDivRow = bkgdDivApp.repeat(10);

// var row = setInterval(appendRow, 200);

// bkgdDiv.addClass("bkgdDiv");

// function appendRow() {
//     headContainer.append(bkgdDivRow);
    // if (headContainer.clientHeight > window.innerHeight) {
    //     clearInterval(row);
// }
// }



// const myName = ["C", "h", "a", "d"];

// var i = 0;

// var id = setInterval(addText, 500); 

// function addText() {
//         // for (var i = 0; i < myName.length; i++) {
//             document.getElementById("test").innerText += myName[i];
//             i++
//             if (i > myName.length - 1) {
//                 clearInterval(id);
//             }            
//     }

// const projectLinks = [
//     {
//         image: "../assets/images/monnaie.png",
//         url: "https://salty-forest-71574.herokuapp.com/",
//         title: "Monnaie Wedding Planner",
//         description: "Monnaie is an app to help newly engaged couples plan the perfect wedding. Each your will be to save and keep track of their budget and compare their planned cost with actual cost. They can break their budget down into categories and add items to each category. They are also able to schedule task with a due date and mark the task complete as they are completed."
//     }, {
//         image: "../assets/images/served.png",
//         url: "https://chad1281.github.io/served/",
//         title: "Served Recipe Generator",
//         description: "Use the ingredients you have on hand to find the perfect recipe for your next meal. With Served you can narrow down your search to fit within your diet restrictions and see how close each recipe matches the ingredients inputed."
//     }, {
//         image: "../assets/images/employee.png",
//         url: "https://chad-employee-directory.herokuapp.com/",
//         title: "Employee Directory",
//         description: "Save all of your employees information with a their picture with this employee directory. You can search employees by their name or sort them by their name, location, or country."
//     }, {
//         image: "../assets/images/burger.png",
//         url: "https://whispering-brook-47197.herokuapp.com/",
//         title: "Burger Chomper",
//         description: "What better than a way to add burgers that you would like to try and keep track of the ones that you're able to eat. Burger Chomper lets you add a burger name and mark which ones that you have devoured."
//     }, {
//         image: "../assets/images/star-wars.png",
//         url: "https://chad1281.github.io/star_wars_quiz/",
//         title: "Star Wars Quiz",
//         description: "Test your level of knowledge with this Star Wars Quiz. Answer question correctly and get 20 more seconds on the clock but answer them wrong then lose 20 seconds. Your score will be based on the number of seconds remaining when you finish the questions."
//     }, {
//         image: "",
//         url: "https://chad-online-offline-budget.herokuapp.com/",
//         title: "Online/Offline Budget Tracker",
//         description: "Rather you have an internet connection or not the online/offline budget tracker will let you add deposits and purhases to so you always know how much money you have to spend."
//     },
// ]

// console.log(projectLinks[0].image)