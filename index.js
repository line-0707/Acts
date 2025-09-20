back.onload = () => {
    back.style.display = 'block';
    back.style.opacity = 0;
    back.style.transition = 'opacity 0.5s';

    requestAnimationFrame(() => {
        back.style.opacity = 1;
        front.style.opacity = 0;
    });

    setTimeout(() => {
        front.src = back.src;
        front.style.opacity = 1;
        back.style.display = 'none';
    }, 500);
};
