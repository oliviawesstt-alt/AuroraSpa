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

    // Hantera formulärinlämning (enkel alert, ingen riktig backend här)
    const bookingForm = document.getElementById('booking-form');
    
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Förhindra standardformulärinlämning

        // I en riktig applikation skulle du skicka data till en server här.
        const name = bookingForm.querySelector('input[type="text"]').value;

        alert(`Tack, ${name}! Din bokningsförfrågan har skickats. Vi återkommer snart för att bekräfta din tid.`);
        
        // Rensa formuläret
        bookingForm.reset();
    });
});