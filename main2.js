
startBtn.addEventListener("onClick", function () {
    console.log("this");
    if (this.innerText == 'Start') {
        para.disabled = false;
        this.innerText = "End";
        console.log("Start");
        //playGame();
      }

    
    else if (this.innerText == "End") {
        para.disabled = true;
        this.innerText = "Start";
        console.log("end");
    }

});