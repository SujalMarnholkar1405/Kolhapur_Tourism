document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
});

function searchPlaces() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let places = document.querySelectorAll('.place');

    places.forEach(place => {
        let text = place.textContent.toLowerCase();
        if (text.includes(input)) {
            place.style.display = "block";
        } else {
            place.style.display = "none";
        }
    });
}
