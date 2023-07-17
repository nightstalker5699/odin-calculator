function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}

function divide (a,b){
    return a/b
}
function operator(a,b,op) {
    if (op == "+") return add(a,b)
    else if (op == "-") return sub(a,b)
    else if (op == "x") return multiply(a,b)
    else if (op == "÷") return divide(a,b)
}
let firstNumber,op,secondNumber,secondOP,count = 0;
let expre = ""
const bord = document.querySelector(".small")
document.querySelectorAll(".button").forEach((btn)=>{
        btn.addEventListener("click",(event)=>{
        let value = event.target.textContent
        if(value == "=") {
            [firstNumber,op,secondNumber] = expre.split(" ")
            const result = operator(parseFloat(firstNumber),parseFloat(secondNumber),op)
            if(result){
                document.querySelector(".main").textContent= result
                expre = `${result}`
                bord.textContent = result
                count = 0
            }
            else alert("you can't do that")
        }
        else{
            if(value.match(/[-+x÷]/)) count++
            if(count == 2) {
                count = 1;
                [firstNumber,op,secondNumber] = expre.split(" ")
                const result = operator(parseFloat(firstNumber),parseFloat(secondNumber),op)
                document.querySelector(".main").textContent= `${result}`
                expre = `${result}`
                bord.textContent = result
            }
            bord.textContent += value
            expre +=value
            }
        })
})


document.querySelector(".clear").addEventListener("click",(event)=>{
    expre = ""
    bord.textContent = ""
    count = 0
    document.querySelector(".main").textContent= ""

})
document.querySelector(".delete").addEventListener("click",(event)=>{
    let content = bord.textContent.split("")
    content.pop()
    let final = content.join("")
    if(final.match(/[-+x÷]/)) count = 0
    expre = final
    bord.textContent = final
})