
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