// make keypad clickable
// fill selected input area with keypad presses
// 


const inputs = document.querySelectorAll("input")
const numpad = document.getElementById("numpad")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const splitNum = document.getElementById("split-num")
const bill = document.getElementById("bill")
const tip = document.getElementById("tip-percentage")
const total = document.getElementById("total")

let activeInput = null;

inputs.forEach(input=>{
    input.addEventListener("focus", ()=>{
        activeInput = input
    })
})

// find which input is active, then add click event to numpad and insert num values into input


numpad.addEventListener("click", (e)=>{
    if(!activeInput)return
    const value = e.target.dataset.value

    if(e.target.classList.contains("num")){
        if(activeInput.id === "tip-percentage"){
            let input = activeInput.value.replace("%", "")
            input += value
            activeInput.value = input + "%"
        }else{
        activeInput.value += `${value}`
        }
        calcTotal()
    }

    if(e.target.closest(".del") &&  activeInput.value.length>0){
        let input = activeInput.value.replace("%", "")
        if(activeInput.id === "tip-percentage"){
            const trimmed = input.slice(0,-1) 
            activeInput.value = trimmed? trimmed + "%":""
        }else{
            activeInput.value = input.slice(0, -1)
        }
        calcTotal()
    }

})

let split = Number(splitNum.textContent)

minus.addEventListener("click", ()=>{
    if(split>1){
        split --
        splitNum.textContent = split
        calcTotal()
    }
})

plus.addEventListener("click", ()=>{
    split++
    splitNum.textContent = split
    calcTotal()
})

function calcTotal(){
    const trimmedTip = tip.value.replace("%", "")
    console.log(trimmedTip)
    total.textContent = (+bill.value + +(bill.value * (trimmedTip/100)))/split
}











// const billWrap = document.querySelector(".bill-input")
// const tipWrap = document.querySelector(".tip-percentage-input")

// const billCap = document.querySelector(".bill-caption")
// const tipCap = document.querySelector(".tip-caption")
// const finCap = document.querySelector(".final-caption")

// const bill = document.getElementById("bill")
// const tipPercent = document.getElementById("tip-percent")
// const tipDisplay = document.getElementById("tip-display")

// const reset = document.getElementById("reset")

// let billVal = ""
// let tipVal = ""

// const STATE = {
//     BILL: "bill",
//     TIP: "tip",
//     RESULT: "result"
// }

// const stateConfig = {
//     bill: {
//         show: [billWrap, billCap],
//         hide: [tipWrap, tipCap, finCap, tipDisplay]
//     },
//     tip: {
//         show: [tipWrap, tipCap],
//         hide: [billWrap, billCap, finCap, tipDisplay]
//     },
//     result: {
//         show: [finCap, tipDisplay],
//         hide: [billWrap, billCap, tipWrap, tipCap]
//     }
// }

// function onOff(state){
//     Object.values(stateConfig).forEach(({show, hide}) => {
//         show.forEach(el=>el.classList.add("hidden"))
//         hide.forEach(el=>el.classList.add("hidden"))
//         })   

//     stateConfig[state].show.forEach(el=>el.classList.remove("hidden"))
// }

// bill.addEventListener("keydown", (e)=>{
//     const val = Number(bill.value)
//     if(e.key === "Enter" && !Number.isNaN(val) && val>0){
//         billVal = val
//         onOff(STATE.TIP)
//         bill.value = ""
//         }
// })

// tipPercent.addEventListener("keydown", (e)=>{
//     const val = Number(tipPercent.value)
//     if(e.key === "Enter" && !Number.isNaN(val) && val>0 && val<=100){
//         tipVal = val
//         onOff(STATE.RESULT)
//         tipPercent.value = ""
//         tipDisplay.textContent = calcTip()
//         }
// })

// reset.addEventListener("click", ()=>{
//     console.log("fire")
//         onOff(STATE.BILL)
// })

// function calcTip(){
//     return `$${(billVal * (tipVal/100)).toFixed(2)}`
// }