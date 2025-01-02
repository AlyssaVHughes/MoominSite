
// function login(username, password) {
//     var userExixts = checkIfUser(username)
//     if (!userExists) {
//         return "Error - user name not found"
//     }

//     else {
//         var passwordCorrect = checkPassword(username, password)
//         if (!passwordCorrect) {
//             return "Error - password in valid"
//         }
//         else {
//             return "Successfully logged in"
//         }
//     }
// }

// function checkIfUser(username) {
//     // look in a database for a username
//     // if the name is in the database, return true.
//     // otherwise, return false.
//     return true;
// }



// Select the elements
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const carouselArticles = document.querySelector('.carousel-articles');

// Scroll the container by 20px on arrow click
const scrollAmount = 200;

leftArrow.addEventListener('click', () => {
    carouselArticles.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    console.log('Left arrow clicked');
});

rightArrow.addEventListener('click', () => {
    carouselArticles.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    console.log('Right arrow clicked');
});

const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        const currentSrc = heart.getAttribute('src');
        const filledSrc = heart.getAttribute('data-filled');


        if (currentSrc === filledSrc) {
            heart.setAttribute('src', 'Images/Heart.png'); 
        } else {
            heart.setAttribute('src', filledSrc); 
        }
    });
});



