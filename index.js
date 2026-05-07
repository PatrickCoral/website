var menuOpen = false
var menu

$(async function () {
    menu = document.getElementById("menu")
})

function openMenu() {
    menuOpen = !menuOpen
    if (!menuOpen) {
        menu.classList.add("hidden")
    } else {
        menu.classList.remove("hidden")
    }
}
