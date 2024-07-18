document.addEventListener('DOMContentLoaded', function () {
    // Example: Toggle dropdown menu
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdown && dropdownContent) {
        dropdown.addEventListener('click', function () {
            dropdownContent.classList.toggle('hidden');
        });
    }

    // Additional JS for other interactions can be added here
});
