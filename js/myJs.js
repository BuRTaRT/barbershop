const select = document.getElementById('video');

select.addEventListener("change", (e) => {
    const value = e.target.value;
    const hero = $("#home"); // обязательно через jQuery для взаимодействия с плагином

    // 1. Удаляем старое видео
    hero.data('vide').destroy();

    // 2. Задаём новое видео
    hero.vide(`/video-bg/${value}`, {
        posterType: 'none'
    });

    console.log("Video changed to:", value);
});