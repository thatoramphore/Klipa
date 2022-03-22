//get the values from the input
//CONTROLLER (start) function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let numbers = [];

    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //validate numbers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        numbers = generateNumbers(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers)
    } else {
        alert("Enter only integers");
    }

}

//generate numbers form the start value to the end value
//LOGIC function(s)
function generateNumbers(start, end){
    let numbers = [];
    
    //get all numbers from start to end
    for(let i=start; i<=end; i++){
        numbers.push(i);
    }

    return numbers;
}

//display numbers and mark even numbers bold
//VIEW function(s)
function displayNumbers(numbers){
    let templateRows = "";

    for (let i=0; i<numbers.length; i++) {
        let className = "even";
        let number = numbers[i];

        if (number % 2 === 0){
            className = "even";
        } 
        else{
            className = "odd";
        }
        //This does not render correctly with prism
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}
