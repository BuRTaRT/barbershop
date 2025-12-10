const select = document.getElementById('fonts');

select.addEventListener("change", (e) => {
    const value = e.target.value;
    console.log(value);

    // Применяем шрифт ко всем элементам
    document.querySelectorAll("*").forEach(elem => {
        elem.style.fontFamily = value;
    });
});

const select2 = document.getElementById('bg');

select2.addEventListener("change", (e) => {
    const value = e.target.value;
    console.log(value);

    // Применяем шрифт ко всем элементам
    document.querySelector(".hero").dataBg=`url('${value}.png')`
    document.querySelector(".hero").style.backgroundImage=`url('${value}')`
    console.log(document.querySelector(".hero"))
});
