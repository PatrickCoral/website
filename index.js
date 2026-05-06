var menuOpen = false
var menu

$(async function () {
    menu = document.getElementById("menu")

    let lorem = document.getElementById("lorem")
    const url = "https://lorem-api.com/api/lorem"
    const response = await fetch(url)
    if (response.ok) {
        const result = await response.text()

        lorem.innerText = result
    }
})

function openMenu() {
    menuOpen = !menuOpen
    if (!menuOpen) {
        menu.classList.add("hidden")
    } else {
        menu.classList.remove("hidden")
    }
}
