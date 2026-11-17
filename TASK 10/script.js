let count=0;
const countDisplay=document.getElementById("count");
const  message=document.getElementById("message");
function updateCounter() {
    countDisplay.textContent = count;
    if(count>0) {
        countDisplay.style.color="#0e1010";
        countDisplay.style.textShadow = "none";
    } else if(count === 0){
        countDisplay.style.color="#0b0c0c";
        message.textContent="Ready to start?";
    }
}
function increaseCount() {
    count++;
    updateCounter();
}
function decreaseCount() {
    if(count>0) {
        count --;
        updateCounter();
    } else {
        message.textContent = "Cannot go below Zero!";
    }
}
function increaseFive() {
    count += 5;
    updateCounter();
}
function resetCount() {
    count = 0;
    updateCounter();
}