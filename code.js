
const cards = document.querySelectorAll('.card')
const cardsArray = Array.from(cards)
let isActive = cardsArray[0]

cardsArray.forEach(card => {
    card.addEventListener("click", () => {
        if(isActive) {
            isActive.classList.remove("active")
        }

        card.classList.add("active")

        isActive = card

    })
})