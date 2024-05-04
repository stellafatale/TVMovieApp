document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', function() {
        const movieTitle = this.previousElementSibling.textContent;
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (favorites.includes(movieTitle)) {
            // Remove from favorites
            const newFavorites = favorites.filter(fav => fav !== movieTitle);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            this.textContent = 'Add to Favorites';
            this.classList.remove('favorite');
        } else {
            // Add to favorites
            favorites.push(movieTitle);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            this.textContent = 'Remove from Favorites';
            this.classList.add('favorite');
        }
    });
});

// Initialize favorites on page load
document.addEventListener('DOMContentLoaded', () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    document.querySelectorAll('.movie h3').forEach(h3 => {
        if (favorites.includes(h3.textContent)) {
            const button = h3.nextElementSibling;
            button.textContent = 'Remove from Favorites';
            button.classList.add('favorite');
        }
    });
});