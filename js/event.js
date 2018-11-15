Events.on(engine, "collisionStart", function(event){
    var pairs = event.pairs;
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];

        //passDoor
        if (hookPowerOn && doorOpen && !suckABall) {
            if (pair.bodyA.label == "passDoor" && pair.bodyB.label == "ball") {
                suckABall = true;
                choosedBall = pair.bodyB.parent;
                Body.setPosition(choosedBall, Vector.create(passWallDoor[2].position.x, passWallDoor[1].position.y - 4));
                suck();
            }
        }

        //hook
        if(!hookStart){
            if(pair.bodyA.label == "ball" && pair.bodyB.label == "hook"){
                choosedBall = pair.bodyA.parent;
                lotteryArr.push(choosedBall.id - 10000);

                if(lotteryArr.length == 6)
                    blow();
    
                hookStart = true;
                hookRotate();
            }
        }

        //push other ball
        if(suckABall && doorOpen){
            if (pair.bodyA.label == "passWay" && pair.bodyB.label == "ball"
                    && pair.bodyB.parent.id != choosedBall.id) {

                if (pair.bodyB.parent.position < sceneWidth)
                    Body.translate(pair.bodyB.parent, Vector.create(-5, 10));
                else
                    Body.translate(pair.bodyB.parent, Vector.create(5, 10));
            }
        }
    }
});


Events.on(engine, "collisionEnd", function(event){
    var pairs = event.pairs;
    if(suckABall && doorOpen){
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];

            //passDoor
            if(pair.bodyA.label == "passDoor" && pair.bodyB.label == "ball"){
                lottery();
            }
        }
    }
});


Events.on(engine, 'collisionActive', function(event) {
    var pairs = event.pairs;
    if(doorOpen){
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];

            //passDoor
            if (hookPowerOn && doorOpen && !suckABall) {
                if (pair.bodyA.label == "passDoor" && pair.bodyB.label == "ball") {
                    suckABall = true;
                    choosedBall = pair.bodyB.parent;
                    Body.setPosition(choosedBall, Vector.create(passWallDoor[2].position.x, passWallDoor[1].position.y - 4));
                    suck();
                }
            }

            //push other ball
            if(pair.bodyA.label == "passWay" && pair.bodyB.label == "ball" 
                && pair.bodyB.parent.id != choosedBall.id ){

                if(pair.bodyB.parent.position < sceneWidth)
                    Body.translate(pair.bodyB.parent, Vector.create(-5, 10));
                else
                    Body.translate(pair.bodyB.parent, Vector.create(5, 10));
            }
        }
    }
});