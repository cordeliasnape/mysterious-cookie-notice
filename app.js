const approve = document.querySelector(".approve")
const reject = document.querySelector(".reject")
cookieNotice = document.querySelector(".cookie-notice")

reject.addEventListener("click", function () {
    document.cookie = "cookiesAccepted-false"
    cookieNotice.classList.add("hidden")
})

approve.addEventListener("click", function () {
document.cookie = "cookiesAccepted-true"
cookieNotice.classList.add("hidden")
})

function checkCookiesAccepted () {
    const cookiesAccepted = document.cookies.includes("cookiesAccepted");
    if (!cookiesAccepted) {
        cookieNotice.classList.remove("hidden")
    }
}

checkCookiesAccepted();