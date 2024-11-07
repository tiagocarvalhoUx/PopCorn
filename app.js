document.querySelectorAll ('.gallery-container img').forEach(gallery => {
    gallery.onclick = () =>{
        document.querySelector ('.popup-imag') .style.display = 'block'; 
        document.querySelector ('.popup-imag img') .src = gallery.getAttribute ('src');
    }
});

document.querySelector('.popup-imag span').onclick = () =>{
    document.querySelector ('.popup-imag') .style.display = 'none'; 
}