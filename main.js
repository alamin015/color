let firstColor = document.getElementById("first_color");
let secondColor = document.getElementById("second_color");
let result = document.querySelector(".result_div")



const common = () => {
    let f_value = firstColor.value;
    let s_value = secondColor.value;
    result.style.background = `linear-gradient(to right bottom,${f_value},${s_value})`;

    document.querySelector(".f_c").innerHTML = firstColor.value;
    document.querySelector(".s_c").innerHTML = secondColor.value;
}
firstColor.addEventListener("input",(e)=> {
    let getColor = e.target.value;
    firstColor.setAttribute("value",`${getColor}`)
    common();
})

secondColor.addEventListener("input",(e)=> {
    let getColor = e.target.value;
    secondColor.setAttribute("value",`${getColor}`)
    common();
})


    document.querySelector(".f_c").innerHTML = firstColor.value;
    document.querySelector(".s_c").innerHTML = secondColor.value;