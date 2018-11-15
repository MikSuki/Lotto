var vector1 = Vector.create(2000,0);
var vector2 = Vector.create(-2000,0);

moveBtn.style.left = canvasWidth * 0.05 + "px";
hookBtn.style.left = canvasWidth * 0.05 + "px";
blowBtn.style.left = canvasWidth * 0.05 + "px";
lotteryBtn.style.left = canvasWidth * 0.05 + "px";
testBtn.style.left = canvasWidth * 0.05 + "px";

moveBtn.style.top = canvasHeight * 0.1 + "px";
hookBtn.style.top = canvasHeight * 0.25 + "px";
blowBtn.style.top = canvasHeight * 0.4 + "px";
lotteryBtn.style.top = canvasHeight * 0.55 + "px";
testBtn.style.top = canvasHeight * 0.7 + "px";

moveBtn.style.width = canvasWidth * 0.15 + "px";
hookBtn.style.width = canvasWidth * 0.15 + "px";
blowBtn.style.width = canvasWidth * 0.15 + "px";
lotteryBtn.style.width = canvasWidth * 0.15 + "px";
testBtn.style.width = canvasWidth * 0.15 + "px";

moveBtn.style.height = canvasHeight * 0.1 + "px";
hookBtn.style.height = canvasHeight * 0.1 + "px";
blowBtn.style.height = canvasHeight * 0.1 + "px";
lotteryBtn.style.height = canvasHeight * 0.1 + "px";
testBtn.style.height = canvasHeight * 0.1 + "px";


if(canvasWidth < 700){
    moveBtn.style.fontSize = "20px";
    hookBtn.style.fontSize = "20px";
    blowBtn.style.fontSize = "20px";
    lotteryBtn.style.fontSize = "20px";
    testBtn.style.fontSize = "20px";
}
else if(canvasWidth < 950){
    moveBtn.style.fontSize = "25px";
    hookBtn.style.fontSize = "25px";
    blowBtn.style.fontSize = "25px";
    lotteryBtn.style.fontSize = "25px";
    testBtn.style.fontSize = "25px";
}


function moveBall(){
    if(!blowOn)
        canMoveBall = !canMoveBall;
    else
        alert("power on !");

    if(canMoveBall){
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        World.add(world, mouseConstraint);
        moveBtn.innerHTML = "moveOff";
    }
    else{
        World.remove(world, mouseConstraint);
        moveBtn.innerHTML = "moveOn";
    }
}


function hookPower(){
    if(lotteryArr >= 6)
        return;
    hookPowerOn = !hookPowerOn;
    if(hookPowerOn){
        hookOnOff(1);
    }
    else{
        hookOnOff(-1);
        blowOn = false;
    }
}

function blow(){
    if(!hookPowerOn){
        alert("hook off");
        return;
    }

    blowOn = !blowOn;
    if(blowOn){
        canMoveBall = false;
        blowBtn.innerHTML = "blowOff";
        moveBtn.innerHTML = "moveOn";
        addForce();
        setTimeout(lottery, doorOpenTime);
        showTime(doorOpenTime / 1000);
    }
    else
        blowBtn.innerHTML = "blowOn";

}

function lottery(){
    doorOpen = !doorOpen;
    if(doorOpen){
        Body.translate(passWallDoor[1], vector1);
        Body.translate(passWallDoor[3], vector1);
    }
    else{
        Body.translate(passWallDoor[1], vector2);
        Body.translate(passWallDoor[3], vector2);
    }
}
