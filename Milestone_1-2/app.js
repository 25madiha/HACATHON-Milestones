// Get the button and the skills section
var Togglebutton = document.getElementById("Togglebutton");
var skills = document.getElementById("skills");
// Add event listener to toggle button
(Togglebutton && skills);
Togglebutton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
        Togglebutton.value = "hide skills";
    }
    else {
        skills.style.display = "none";
        Togglebutton.value = "show skills";
    }
});
