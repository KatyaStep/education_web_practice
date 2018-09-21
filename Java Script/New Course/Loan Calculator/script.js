const loanAmount = document.querySelector("#loan-amount");
const  annualInterest = document.querySelector("#annual-interest");
const  repaymentYears = document.querySelector("#repayment-years");
const  calculateBtn = document.querySelector("#calculate-btn");
const  monthlyPayment = document.querySelector("#monthly-payment");
const  totalPayment = document.querySelector("#total-payment");
const  totalInterest = document.querySelector("#total-interest");




calculateBtn.addEventListener("click",function(e){
    //Show loader
    document.getElementById('loader').style.display = 'block';
    //Hide results
    document.getElementById('results').style.display = 'none';

    setTimeout(calculate,2000);

    e.preventDefault();
});


// Calculate
function calculate(){

    var interestCalculating = parseFloat(annualInterest.value) /100/12;
    var yearCalculating = parseFloat(repaymentYears.value) *12;
    var loanCalculating = parseFloat(loanAmount.value);

    //Numerator and Monthly payement
    var numerator = Math.pow((1+interestCalculating),yearCalculating);
    var payementMonthly  = loanCalculating * ((interestCalculating*numerator)/(numerator - 1));


    if(isFinite(payementMonthly)){
        //Print on Monthly Payment field
        monthlyPayment.value = payementMonthly.toFixed(2);
        //Total Payement
        const paymentTotal = payementMonthly.toFixed(2) * yearCalculating;
        // Print on Total field
        totalPayment.value = paymentTotal.toFixed(2);
        //Total Interest
        const interestTotal  = paymentTotal - loanCalculating;
        //Print Total Interest
        totalInterest.value = interestTotal.toFixed(2);
        //Hide loader
        document.getElementById('loader').style.display = 'none';
        //Show results
        document.getElementById('results').style.display = 'block';
    }
    else{
        showError();
    }

}

function showError(error){
    //Hide loader
    document.getElementById('loader').style.display = 'none';
    //Hide results
    document.getElementById('results').style.display = 'none';
    
    //Create div
    const errorDiv = document.createElement('div');
    //Create class
    errorDiv.className = "alert alert-danger";
    //Create text node
    node = document.createTextNode("Please, check your numbers");
    //Append child
    errorDiv.appendChild(node);
    //Insert error before heading
    const card = document.querySelector(".card-body");
    const heading = document.querySelector(".heading-display-5");
    card.insertBefore(errorDiv,heading);

    //Set timeout
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector(".alert").remove();
}
