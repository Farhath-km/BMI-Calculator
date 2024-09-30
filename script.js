
    function calculateBMI() {


        let height = parseInt(document
            .querySelector("#height").value);
    

        let weight = parseInt(document
            .querySelector("#weight").value);
    
        let result = document.querySelector("#result");
    
    

    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

    // If both input is valid, calculate the bmi
    else {

        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height)
            / 10000)).toFixed(2);

        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `<span style="color: yellow;">Under Weight : <span style="color: yellow;">${bmi}</span>`;

        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
                `<span style="color: green;">Normal : <span style="color: green;">${bmi}</span>`;

        else result.innerHTML =
            `<span style="color: red;">Over Weight : <span style="color: red;">${bmi}</span>`;
    }
}
