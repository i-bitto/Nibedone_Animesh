console.log('Hello World!');
function scrollToSection(sectionId) {
            var element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                console.error("Element with id '" + sectionId + "' not found.");
            }
}
