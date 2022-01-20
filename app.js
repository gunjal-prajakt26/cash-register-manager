var billAmount = document.querySelector(".bill-amount");
var givenAmount = document.querySelector(".given-amount");
var checkButton = document.querySelector(".btn-check");
var errorMessage = document.querySelector(".error-msg");
var numberOfNotes = document.querySelectorAll(".no-of-notes");

 numberOfNotes = [2000, 500, 100, 20, 10, 5, 1];

// var amountOfBill = billAmount.target.value;
// var amountGiven = givenAmount.value;

checkButton.addEventListener("click",()=>{

    if (billAmount.value > 0) {

        if (givenAmount.value >= billAmount.value) {

            

            for (var i = 0; i < availabeNotes.length; i++) {
                var checkAmount = givenAmount.value - billAmount.value;
                var notes= Math.trunc(checkAmount / availabeNotes[i]);
                var remainingAmount = checkAmount % availabeNotes[i];
                console.log(availabeNotes+ notes);
                // numberOfNotes[i].innerText = notes;
            }

        } else {
            console.log("not-ok");
        }
    } else {
        if (isNaN(billAmount.value)) {
            errorMessage.innerText = "amount is only in numbers";

        } else {
            errorMessage.innerText = "Amount can't be Negative";
        }
    }
});

function calculate(notes) {
    numberOfNotes.innerText = notes;
}