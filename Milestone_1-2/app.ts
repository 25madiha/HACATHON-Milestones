// Get the button and the skills section
const Togglebutton = document.getElementById("Togglebutton") as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLDivElement;

// Add event listener to toggle button
(Togglebutton && skills)
Togglebutton.addEventListener("click", () => {
    if (skills.style.display === "none") {
        skills.style.display = "block";
        Togglebutton.value ="hide skills";
    } else {
        skills.style.display = "none";
        Togglebutton.value = "show skills";
    }
});
