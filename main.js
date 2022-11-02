let boomCounter = 0
let limit = 35
let buttonValue = 5

document.getElementById("visibleCounter").innerHTML = boomCounter
nmb = document.getElementById("visibleCounter")
document.getElementById("upBtn")
document.getElementById("dwnBtn")
document.getElementById("boom")
document.getElementById("btnChanger")
const nmberchnge = document.getElementById("newBtnValue")
const limitchnge = document.getElementById("newLimitValue")

upBtn.addEventListener("click", () => {
    boomCounter+=buttonValue
    boom()
    console.log(boomCounter)
});
dwnBtn.addEventListener("click", () => {
    boomCounter-=buttonValue
    boom()
    console.log(boomCounter)
});

const boom = () => {
    nmb.innerHTML = boomCounter
    var b = document.getElementById("boom")
if(boomCounter > limit || boomCounter < -limit) {
    b.innerHTML = "BOOOM!"
} else {
    b.innerHTML = ""
}
}

nmberchnge.addEventListener("keypress", (e) => {
    if(e.target.value.length === 0){
    }else{
        buttonValue = parseInt(e.target.value)}
        localStorage.setItem("storedValue", buttonValue)
})

if(localStorage.getItem("storedValue") != undefined){
    buttonValue = parseInt(localStorage.getItem("storedValue"))}

limitchnge.addEventListener("keypress", (l) => {
    if(l.target.value.length === 0){
    }else{
        limit = parseInt(l.target.value)}
        localStorage.setItem("storedLimit", limit)
})

if(localStorage.getItem("storedLimit") != undefined){
limit = parseInt(localStorage.getItem("storedLimit"))}