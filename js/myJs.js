const select = document.getElementById('fonts');

select.addEventListener("change", (e) => {
    const value = e.target.value;
    console.log(value);

    // Применяем шрифт ко всем элементам
    document.querySelectorAll("*").forEach(elem => {
        elem.style.fontFamily = value;
    });
});
