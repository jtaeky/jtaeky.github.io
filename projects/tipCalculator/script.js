



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