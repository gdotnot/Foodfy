const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")
const cardFrame = document.querySelector(".modal").querySelector("#frame").querySelector("#card")


for (let card of cards) {
    const image = card.querySelector("img").getAttribute("src")
    const alternative = card.querySelector("img").getAttribute("alt")
    const title = card.querySelector(".card-info").querySelector("h4").innerHTML
    const author = card.querySelector(".card-info").querySelector("p").innerHTML
    console.log(title)
    card.addEventListener("click", () => {
        modalOverlay.classList.add("active")
        cardFrame.querySelector("img").src = image
        cardFrame.querySelector("img").alt = alternative
        cardFrame.querySelector(".card-info").querySelector("h2").innerText = title
        cardFrame.querySelector(".card-info").querySelector("p").innerText = author
    })
}

document.querySelector("#close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active")
})





