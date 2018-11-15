var hookTime = 0;
function createHook(){

    // ★hooks[] 要 + 1 ★
    x = sceneWidth - 28;
    y = sceneTop - canvasHeight * 0.125 - 15;
    
    
    hooks[0] = Bodies.rectangle(x, y, 5, 30, {
        render:{
            fillStyle: '#33CCFF'
        },
        label: "hook"
    });
    
    hooks[1] = Bodies.rectangle(x + 12.5, y - 17.5, 20, 5, {
        render:{
            fillStyle: '#33CCFF'
        },
        label: "hook"
    });

    hooks[2] = Bodies.rectangle(x + 25, y - 5, 5, 20, {
        render:{
            fillStyle: '#33CCFF'
        },
        label: "hook"
    });

    hooks[3] = Bodies.rectangle(x + 25, y + 17.5, 5, 25, {
        render:{
            fillStyle: '#33CCFF'
        }
    });

    hooks[4] = Bodies.rectangle(x + 25, y + 40, 5, 20, {
        render:{
            fillStyle: '#33CCFF'
        }
    });

    hooks[5] = Bodies.circle(x + 2.5, y + 15, 1, hookJointOption);
    hooks[6] = Bodies.circle(x + 2.5, y - 15, 1, hookJointOption);
    hooks[7] = Bodies.circle(x + 22.5, y - 15, 1, hookJointOption);
    hooks[8] = Bodies.circle(x + 25, y + 5, 1, hookJointOption);
    hooks[9] = Bodies.circle(x + 25, y + 30, 1, hookJointOption);

    hook = Body.create({
        parts: hooks,
        isStatic: true
    });

    World.add(world, hook);

    Body.rotate(hook, -180 / 180 * Math.PI, hooks[6].position);

    Body.rotate(hooks[2], 90 / 180 * Math.PI, hooks[7].position);
    Body.rotate(hooks[3], 90 / 180 * Math.PI, hooks[7].position);
    Body.rotate(hooks[4], 90 / 180 * Math.PI, hooks[7].position);
    Body.rotate(hooks[5], 90 / 180 * Math.PI, hooks[7].position);
    Body.rotate(hooks[7], 90 / 180 * Math.PI, hooks[7].position);
    Body.rotate(hooks[8], 90 / 180 * Math.PI, hooks[7].position);
    Body.rotate(hooks[9], 90 / 180 * Math.PI, hooks[7].position);
    Body.rotate(hooks[10], 90 / 180 * Math.PI, hooks[7].position);

    Body.rotate(hooks[3], -90 / 180 * Math.PI, hooks[8].position);
    Body.rotate(hooks[4], -90 / 180 * Math.PI, hooks[8].position);
    Body.rotate(hooks[5], -90 / 180 * Math.PI, hooks[8].position);
    Body.rotate(hooks[8], -90 / 180 * Math.PI, hooks[8].position);
    Body.rotate(hooks[9], -90 / 180 * Math.PI, hooks[8].position);
    Body.rotate(hooks[10], -90 / 180 * Math.PI, hooks[8].position);

    Body.rotate(hooks[4], 90 / 180 * Math.PI, hooks[9].position);
    Body.rotate(hooks[5], 90 / 180 * Math.PI, hooks[9].position);
    Body.rotate(hooks[9], 90 / 180 * Math.PI, hooks[9].position);
    Body.rotate(hooks[10], 90 / 180 * Math.PI, hooks[9].position);

    Body.rotate(hooks[5], 180 / 180 * Math.PI, hooks[10].position);
    Body.rotate(hooks[10], 180 / 180 * Math.PI, hooks[10].position);

}

function hookOnOff(value){
        
    setTimeout(function(){
        if(hookTime < 20){
            Body.rotate(hooks[5], value * -9 / 180 * Math.PI, hooks[10].position);
            Body.rotate(hooks[10], value * -9 / 180 * Math.PI, hooks[10].position);
        }
        else if(hookTime < 40){
            Body.rotate(hooks[4], value * -4.5 / 180 * Math.PI, hooks[9].position);
            Body.rotate(hooks[5], value * -4.5 / 180 * Math.PI, hooks[9].position);
            Body.rotate(hooks[9], value * -4.5 / 180 * Math.PI, hooks[9].position);
            Body.rotate(hooks[10], value * -4.5 / 180 * Math.PI, hooks[9].position);
        }
        else if(hookTime < 60){
            Body.rotate(hooks[3], value * 4.5 / 180 * Math.PI, hooks[8].position);
            Body.rotate(hooks[4], value * 4.5 / 180 * Math.PI, hooks[8].position);
            Body.rotate(hooks[5], value * 4.5 / 180 * Math.PI, hooks[8].position);
            Body.rotate(hooks[8], value * 4.5 / 180 * Math.PI, hooks[8].position);
            Body.rotate(hooks[9], value * 4.5 / 180 * Math.PI, hooks[8].position);
            Body.rotate(hooks[10], value * 4.5 / 180 * Math.PI, hooks[8].position);
            
            Body.rotate(hooks[2], value * -4.5 / 180 * Math.PI, hooks[7].position);
            Body.rotate(hooks[3], value * -4.5 / 180 * Math.PI, hooks[7].position);
            Body.rotate(hooks[4], value * -4.5 / 180 * Math.PI, hooks[7].position);
            Body.rotate(hooks[5], value * -4.5 / 180 * Math.PI, hooks[7].position);
            Body.rotate(hooks[7], value * -4.5 / 180 * Math.PI, hooks[7].position);
            Body.rotate(hooks[8], value * -4.5 / 180 * Math.PI, hooks[7].position);
            Body.rotate(hooks[9], value * -4.5 / 180 * Math.PI, hooks[7].position);
            Body.rotate(hooks[10], value * -4.5 / 180 * Math.PI, hooks[7].position);
           
            Body.rotate(hook, value * 9 / 180 * Math.PI, hooks[6].position);
        }
        else{
            Body.rotate(hook, value * 1.5 / 180 * Math.PI, hooks[6].position);

            Body.rotate(hooks[3], value * -3 / 180 * Math.PI, hooks[8].position);
            Body.rotate(hooks[4], value *  -3 / 180 * Math.PI, hooks[8].position);
            Body.rotate(hooks[8], value *  -3 / 180 * Math.PI, hooks[8].position);
            Body.rotate(hooks[5], value *  -3 / 180 * Math.PI, hooks[8].position);
            Body.rotate(hooks[9], value *  -3 / 180 * Math.PI, hooks[8].position);
            Body.rotate(hooks[10], value *  -3 / 180 * Math.PI, hooks[8].position);

            Body.rotate(hooks[4], value *  1.5 / 180 * Math.PI, hooks[9].position);
            Body.rotate(hooks[9], value *  1.5 / 180 * Math.PI, hooks[9].position);
            Body.rotate(hooks[5], value *  1.5 / 180 * Math.PI, hooks[9].position);
            Body.rotate(hooks[10], value *  1.5 / 180 * Math.PI, hooks[9].position);
        }

        if(++hookTime < 80){
            hookOnOff(value);
        }
        else{
            hookTime = 0;
        }
    }, 75);
}


//勾住球
function hookRotate(){
    if(!hookPowerOn){
        alert("hook off");
        return;
    }

    Body.rotate(hooks[4], 30 / 180 * Math.PI, hooks[9].position);
    Body.rotate(hooks[9], 30 / 180 * Math.PI, hooks[9].position);
    Body.rotate(hooks[5], 30 / 180 * Math.PI, hooks[9].position);
    Body.rotate(hooks[10], 30 / 180 * Math.PI, hooks[9].position);
    Body.rotate(hooks[5], 80 / 180 * Math.PI, hooks[10].position);

    setTimeout(hookRotateUp, 1000);
}

function hookRotateUp(){
    
    setTimeout(function(){
        Body.rotate(hook, -3 / 180 * Math.PI, hooks[6].position);
        ++hookTime;
        if(hookTime >= 50){
            hookTime = 0;
            setTimeout(function(){
                Body.rotate(hooks[5], -80 / 180 * Math.PI, hooks[10].position);
            }, 500);
            setTimeout(hookRotateShoot, 1000);
        }
        else {
            hookRotateUp();
        }
    }, 30);
}

function hookRotateShoot(){

    setTimeout(function(){
        Body.rotate(hook, 3 / 180 * Math.PI, hooks[6].position);
        ++hookTime;
        if(hookTime >= 10){
            hookTime = 0;
            setTimeout(function(){
                Body.rotate(hooks[5], 80 / 180 * Math.PI, hooks[10].position);
            }, 500);
            setTimeout(hookRotateBack, 1000);

        }
        else {
            hookRotateShoot();
            Body.setVelocity(choosedBall, Vector.create(hookTime, 0));
        }
    }, 30);
}

function hookRotateBack(){
    setTimeout(function(){
        Body.rotate(hook, 3 / 180 * Math.PI, hooks[6].position);
        ++hookTime;
        if(hookTime >= 40){
            hookTime = 0;
            hookStart = false;
            suckABall = false;
            if(lotteryArr.length == 6){
                var X = Math.pow(1.1, 10);
                var line = Bodies.rectangle(canvasWidth * 0.3 + X * 30 * 1.2 * 2.5,
                                            canvasHeight * 0.85 + X * 18, 
                                            1 , 5, {
                                                render:{
                                                    fillStyle: '#FF3333'
                                                },
                                                isStatic: true
                                            });
                setTimeout(function(){
                    World.add(world, line);
                    bigLine(line);
                }, 1500);
            }
            setTimeout(function(){
                Body.rotate(hooks[4], -30 / 180 * Math.PI, hooks[9].position);
                Body.rotate(hooks[9], -30 / 180 * Math.PI, hooks[9].position);
                Body.rotate(hooks[5], -30 / 180 * Math.PI, hooks[9].position);
                Body.rotate(hooks[10], -30 / 180 * Math.PI, hooks[9].position);
                Body.rotate(hooks[5], -80 / 180 * Math.PI, hooks[10].position);
            }, 500);

            //draw lotteryball
            setTimeout(function(){
                showTime(doorOpenTime / 1000);
                setTimeout(lottery, doorOpenTime);

                createBall(canvasWidth * 0.3 + Math.pow(1.1, 10) * 30 * 1.2 * (lotteryArr.length - 1), 
                            canvasHeight * 0.85, lotteryArr[lotteryArr.length - 1] ++, false);
                console.log(lotteryArr);
            }, 1000);
        }
        else {
            hookRotateBack();
        }
    }, 30);
}
    