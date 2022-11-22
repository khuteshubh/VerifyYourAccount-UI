let bodyTag = document.body;
document.addEventListener("keydown",(e)=>{
    console.log(0)
})

let otpInputBoxesTag = document.querySelectorAll(".otp-num")
console.log(otpInputBoxesTag)

otpInputBoxesTag.forEach((element,index)=>{
    element.addEventListener("keydown",(e)=>{
        if(e.key >= 0 && e.key<10){
            otpInputBoxesTag[index].value = " ";
            setTimeout({} => {
                otpInputBoxesTag[index+1],focus();
            },0);
        }
        else if(e.key === 'Backspace'){
            otpInputBoxesTag[index-1].focus();
        }
        console.log(index);
    })
});