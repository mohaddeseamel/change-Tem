let themes = document.querySelector('.themes');
let selection = document.querySelector("#selection");

let selectedThem = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark";
selection.textContent = selectedThem;
document.body.className = selectedThem;

Array.from(themes.children).forEach(theme =>{
    theme.addEventListener("click" , e =>{
        let color = e.target.dataset.color;
        document.body.className = color;
        selection.textContent = color;

        localStorage.setItem("theme" , color);
    })
})


