// Script for product search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Product search functionality
    var search = document.getElementById('search');
    if (search) {
        search.addEventListener('keyup', function(event) {
            var enteredValue = event.target.value.toUpperCase();
            
            // Hide category headers if searching
            var categoryHeaders = document.querySelectorAll('h2.mb-4');
            for (let header of categoryHeaders) {
                header.style.display = enteredValue.trim() !== '' ? "none" : "block";
            }
            
            // Search in all product cards
            var productCards = document.querySelectorAll('.card');
            
            productCards.forEach(function(card) {
                var productName = card.querySelector(".card-text")?.textContent || "";
                var productAlt = card.querySelector("img")?.alt || "";
                
                if (productName.toUpperCase().indexOf(enteredValue) > -1 || 
                    productAlt.toUpperCase().indexOf(enteredValue) > -1) {
                    card.closest('.col-6').style.display = "block";
                } else {
                    card.closest('.col-6').style.display = "none";
                }
            });
            
            // Show "No results" message if no matches
            var visibleCards = document.querySelectorAll('.col-6[style="display: block;"]');
            var noResultsMessage = document.getElementById('no-results');
            
            if (visibleCards.length === 0 && enteredValue.trim() !== '') {
                if (!noResultsMessage) {
                    noResultsMessage = document.createElement('div');
                    noResultsMessage.id = 'no-results';
                    noResultsMessage.className = 'col-12 text-center my-5';
                    noResultsMessage.innerHTML = '<p class="fs-5">No products match your search.</p>';
                    document.querySelector('.container.py-4').appendChild(noResultsMessage);
                } else {
                    noResultsMessage.style.display = 'block';
                }
            } else if (noResultsMessage) {
                noResultsMessage.style.display = 'none';
            }
        });
    }
});