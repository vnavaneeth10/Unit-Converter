const unitInput = document.getElementById("unit-input")
const length = document.querySelector(".length")
const volume = document.querySelector(".volume")
const mass = document.querySelector(".mass")


unitInput.addEventListener("input", () => {
    
    const units = {
        meters: "meters",
        feet: "feet",
        liters: "liters",
        gallons: "gallons",
        kilos: "kilos",
        pounds: "pounds",
    }
    
    if (unitInput.value == 0) {
        length.textContent = ""
        volume.textContent = ""
        mass.textContent = ""
    } else {
        
    length.textContent = 
    `${unitInput.value} ${unitInput.value > 1 ? units.meters : "meter"} = ${Math.round(unitInput.value * 3.2808 * 1000) / 1000} feet | 
    ${unitInput.value} ${unitInput.value > 1 ? units.feet : "foot"} = ${Math.round(unitInput.value * 0.3048 * 1000) / 1000} meters`
    
    volume.textContent = 
    `${unitInput.value} ${unitInput.value > 1 ? units.liters : "liter"} = ${Math.round(unitInput.value * 0.264172 * 1000) / 1000} gallons | 
    ${unitInput.value} ${unitInput.value > 1 ? units.gallons : "gallon"} = ${Math.round(unitInput.value * 4.54609 * 1000) / 1000} liters`
    
    mass.textContent =
    `${unitInput.value} ${unitInput.value > 1 ? units.kilos : "kilo"} = ${Math.round(unitInput.value * 2.20462 * 1000) / 1000} pounds | 
    ${unitInput.value} ${unitInput.value > 1 ? units.pounds : "pound"} = ${Math.round(unitInput.value * 0.453592 * 1000) / 1000} kilos`
}
}
)