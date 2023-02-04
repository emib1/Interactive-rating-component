const thankState = document.querySelector(".thank-state");
const rateState = document.querySelector(".rate-state");
const submitBtn = document.querySelector(".submit");
const rate = document.querySelectorAll(".numbers button");
const displayedRate = document.querySelector(".select span");
const error = document.getElementById("error-msg");

let selected= "";


/******************/

rate.forEach(btn => {
    btn.addEventListener("click", (e) => {
        removeSelectedClasses()
        selected = e.target.textContent
    })
});

submitBtn.addEventListener("click",  (e) => {
    if (selected === "") {
        addButtonErrors()
        setTimeout(() => {
            removeButtonErrors()
        }, 3000);
        return
    }


    else{
        displayedRate.textContent = selected;
        rateState.classList.add("hide");
        thankState.classList.remove("hide");
    }   
    
});




/*************** ******************** */

function addButtonErrors(){
    error.classList.remove("hide")
    rate.forEach(btn => {
        btn.classList.add("error")
    })
};

function removeButtonErrors(){
    error.classList.add("hide")
    rate.forEach(btn => {
        btn.classList.remove("error");
    })
};

function removeSelectedClasses(){
    rate.forEach(btn => {
        btn.classList.remove("selected");
    })
};