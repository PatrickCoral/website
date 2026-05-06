$(async function () {
    let lorem = document.getElementById("lorem")
    const url = "https://lorem-api.com/api/lorem"
    const response = await fetch(url)
    if (response.ok) {
        const result = await response.text()

        lorem.innerText = result
    }
})