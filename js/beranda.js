const profileBtn = document.getElementById("profile-btn")

profileBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    profileBtn.classList.toggle("active")
})

document.addEventListener("click", (e) => {
    if (!profileBtn.contains(e.target)) {
        profileBtn.classList.remove("active")
    }
})

function scrollLeftHandler(sectionId) {
    document
        .getElementById(sectionId)
        .scrollBy({ left: -200, behavior: "smooth" })
}

function scrollRightHandler(sectionId) {
    document
        .getElementById(sectionId)
        .scrollBy({ left: 200, behavior: "smooth" })
}
