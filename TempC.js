
const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);

    const celToFah = (cel) => {
        let fehrenheit = Math.round((cel * 9/5) + 32);
        return fehrenheit;
    }

    const fahToCel = (fahr) => {
        let celsius = Math.round((fahr - 32) * 5/9);
        return celsius;
    }

    let result;
    
    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Fahrenheit`;
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Celcius`;
    }
}


// selectedIndex : This property sets or returns the index of the selected option in adrop-down list.
// The index starts at 0.
// NOTE: 1. if the drop-down list allows multiple selections it will only return the index of the first option selected.
// 2. The value '-1' will deselect all options (if any).
// 3. If no option is selected, the selectionIndex property will return -1.