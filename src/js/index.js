
function toggleLanguageMenu() {
    let langSelect = document.getElementById('language-select');
    let chevronIcon = document.getElementById('chevron');
    
    langSelect.parentElement.classList.toggle("visible");

    if (chevronIcon.innerHTML == "arrow_drop_up") {
        chevronIcon.innerHTML = "arrow_drop_down";
    } else {
        chevronIcon.innerHTML = "arrow_drop_up"; 
    }
}

function cancelForm() {
    document.getElementById('form').reset();
}

function cardnumber(inputtxt) {
    const cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

    if (inputtxt.value.match(cardno)) {
        window.location = "bedankt.html";
    } else {
        alert("Not a valid Visa credit card number!");
        inputtxt.preventDefault;
        return false;
    }
}
