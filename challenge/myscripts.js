
document.addEventListener('keydown', (e) => {
    if (e.key == "b" && e.ctrlKey) {
        const element = document.querySelector('.blur'); // Replace '
        alert('you find the secret key binding');
        element.classList.remove('blur');
        document.getElementById('title').style.display = "none";
    }
});