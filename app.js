var billAmount = document.querySelector(".bill-amount");
var givenAmount = document.querySelector(".given-amount");

var checkButton = document.querySelector(".btn-check");
var nextButton = document.querySelector(".btn-next");

var errorMessage = document.querySelector(".error-msg");

var avilableNotes = document.querySelectorAll(".no-of-notes");

var outputTable = document.querySelector(".output-table");
var givenInput = document.querySelector(".input-given");


var numberOfNotes = [2000, 500, 100, 20, 10, 5, 1];

errorMessage.style.display="none";
givenInput.style.display="none";
outputTable.style.display="none";


nextButton.addEventListener("click",()=>{
    
    if (Number(billAmount.value) > 0) {
        nextButton.style.display="none";
        givenInput.style.display="block";
        errorMessage.style.display="none";
    } else {
        // if (!Number.isInteger(bill)) {
            //     showMessage("Amount is only in numbers");
            
            // } else {
                showMessage("Enter Valid amount");
                // }
            }
        });
        
        checkButton.addEventListener("click",()=>{
            outputTable.style.display="none";
            errorMessage.style.display="none";
            let bill= Number(billAmount.value);
            let cash= Number(givenAmount.value);
            if(cash > 0 && bill > 0){
                
        if(!Number.isInteger(cash)){
            showMessage("Enter amount not characters");
            return;
        }
        if (cash < bill) {
        showMessage("Enter amount greater or equal cash");
        return;
        }
        checkOut(bill, cash);
    }else {
        showMessage("Amount will be equal or greater than bill amount");
        
    }
});

function checkOut(a, c){
    var amnt = c - a;
    for (var i= 0; i < numberOfNotes.length; i++) {
        var notes= Math.trunc(amnt / numberOfNotes[i]);
        var amnt = amnt % numberOfNotes[i];
        avilableNotes[i].innerText = `${notes}`;
        outputTable.style.display="table";

    }
}
function showMessage(msg) {
    errorMessage.style.display="block";
    errorMessage.innerText = msg;
}