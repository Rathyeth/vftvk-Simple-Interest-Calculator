//This function retrieves the rate of the slider, then display it as a number on the side
function updateRate(){
    var rate_val = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rate_val + "%";
}
//This function retrieves the amount, rate and years user entered, if amount is empty
//0, or negative, it will return false and an alert, while focusing back to Amount field
//else, it will compute the result, highlight and return it in the html.
function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100
    var year = new Date().getFullYear()+parseInt(years);
    if (principal<=0||principal==""){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    document.getElementById("result").innerHTML = 
    "<br>If you deposit <mark>" + principal + "</mark>" +
    ",<br>at an interest rate of <mark>" + rate + "%</mark>" +
    ".<br>You will receive an amount of <mark>" + interest + "</mark>" +
    ",<br>in the year <mark>" + year + "</mark>";
}
