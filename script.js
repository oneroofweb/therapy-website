
// Function to handle See More / See Less functionality
document.addEventListener('DOMContentLoaded', function() {
    
    const buttons = document.querySelectorAll('.see-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Find the hidden content div relative to the clicked button
            const cardBody = this.closest('.card-body');
            const moreContent = cardBody.querySelector('.more-content');

            // 2. Toggle the class 'd-none' (Bootstrap class for display: none)
            if (moreContent.classList.contains('d-none')) {
                // SHOW CONTENT
                moreContent.classList.remove('d-none');
                // Change Button Text
                this.innerHTML = 'See Less <i class="fas fa-chevron-up ms-1"></i>';
            } else {
                // HIDE CONTENT
                moreContent.classList.add('d-none');
                // Change Button Text
                this.innerHTML = 'See More <i class="fas fa-chevron-down ms-1"></i>';
            }
        });
    });

});

// =================== FAQ Load More Logic =====================
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('loadMoreFaq');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Select all currently hidden FAQs
            const hiddenFaqs = document.querySelectorAll('.faq-hidden.d-none');
            
            // Determine how many to show (Max 5)
            const itemsToShow = 5;
            
            for (let i = 0; i < itemsToShow; i++) {
                if (hiddenFaqs[i]) {
                    // Remove the 'd-none' class to make it visible
                    // Add a fade-in animation class if desired
                    hiddenFaqs[i].classList.remove('d-none');
                    hiddenFaqs[i].classList.add('fade-in-up'); 
                }
            }

            // If no more hidden items exist after this batch, hide the button
            const remainingHidden = document.querySelectorAll('.faq-hidden.d-none');
            if (remainingHidden.length === 0) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
});