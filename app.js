var billAmount = document.querySelector(".bill-amount");
var givenAmount = document.querySelector(".given-amount");
var checkButton = document.querySelector(".btn-check");
var errorMessage = document.querySelector(".error-msg");
var avilableNotes = document.querySelectorAll(".no-of-notes");

var numberOfNotes = [2000, 500, 100, 20, 10, 5, 1];

// var amountOfBill = billAmount.target.value;
// var amountGiven = givenAmount.value;

checkButton.addEventListener("click",()=>{
    errorMessage.style.display="none";
    if (billAmount.value > 0) {

        if (billAmount.value <= givenAmount.value) {
            var checkAmount = givenAmount.value - billAmount.value;
            checkOut(checkAmount);

        } else {
            showMessage("Amount will be equal or greater than bill amount");
            
        }
    } else {
        if (isNaN(billAmount.value)) {
            showMessage("Amount is only in numbers");

        } else {
            showMessage("Amount will be gretaer than 0");
        }
    }
});

function checkOut(amnt){
    for (var i= 0; i < numberOfNotes.length; i++) {
        var notes= Math.trunc(amnt / numberOfNotes[i]);
        var amnt = amnt % numberOfNotes[i];
        avilableNotes[i].innerText = notes;
    }
}
function showMessage(msg) {
    errorMessage.style.display="block";
    errorMessage.innerText = msg;
}