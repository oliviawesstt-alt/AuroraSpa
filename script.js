document.addEventListener('DOMContentLoaded', function() {
    // Hämtar "Boka Nu" knappen från Hero-sektionen
    const bookNowBtn = document.getElementById('book-now-btn');
    // Hämtar boknings/kontakt sektionen
    const contactSection = document.getElementById('contact');

    // Lägger till en klickhändelse på knappen
    bookNowBtn.addEventListener('click', function() {
        // Rullar smidigt till kontaktsektionen när knappen klickas
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    
});