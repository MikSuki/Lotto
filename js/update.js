function addForce(){
    for(var i = 0; i < ballArr.length; ++i){
        if(ballArr[i].position.y <= sceneTop || ballArr[i].position.y >= sceneBottom)
            continue;
        //左
        if (ballArr[i].position.x < (sceneLeft + sceneWidth * 0.33)) {
            if (ballArr[i].position.y < (sceneTop + sceneBottom) / 2)
                var vector2 = Vector.create(Common.random(-0.00001, -0.0003),
                                            Common.random(0.0005, 0.001));
            else
                var vector2 = Vector.create(Common.random(0.001,  0.002),
                                            Common.random(-0.00075, - 0.0015));

        }
        
        //中間
        else if (ballArr[i].position.x < (sceneLeft + sceneWidth * 0.66)) {
            if (ballArr[i].position.y < (sceneTop + sceneBottom) / 2) {
                if (ballArr[i].position.x < sceneWidth)
                    var vector2 = Vector.create(Common.random(-0.001, - 0.002),
                                                Common.random(-0.0025, - 0.005));
                else
                    var vector2 = Vector.create(Common.random(0.001, 0.002),
                                                Common.random(-0.0025, - 0.005));

            }
            else if (ballArr[i].position.y < (sceneTop + sceneBottom) * 0.75) {
                var vector2 = Vector.create(0, Common.random(-0.005, - 0.01));
            }
            else {
                var vector2 = Vector.create(0, Common.random(-0.005, - 0.01));
            }
        }
        //右
        else {
            if (ballArr[i].position.y < (sceneTop + sceneBottom) / 2)
                var vector2 = Vector.create(Common.random(0.00001, 0.0003),
                                            Common.random(0.0005, 0.001));
            else
                var vector2 = Vector.create(Common.random(-0.001, - 0.002),
                                            Common.random(-0.00075, - 0.0015));
        }
        
        Body.applyForce(ballArr[i], ballArr[i].position, vector2);
    }   
    if(blowOn){
        setTimeout(addForce, 50);
    }
}

//吸球
function suck(){
    Body.setVelocity(choosedBall, Vector.create(0, -5));

    if(!hookStart)
        setTimeout(suck, 100);

}
