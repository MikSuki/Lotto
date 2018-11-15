var lineBigTime = 0;
function createBackground(){

    //wall
    var scene = Bodies.rectangle(sceneWidth, (sceneTop + sceneBottom) / 2, sceneWidth, sceneHeight, sceneOption);
    var wallTopLeft = Bodies.rectangle((sceneLeft + sceneWidth - 23) / 2, sceneTop + 10, sceneWidth / 2 - 23, 20, wallOption);
    var wallTopRight = Bodies.rectangle((sceneRight + sceneWidth + 23) / 2, sceneTop + 10, sceneWidth / 2 - 23, 20, wallOption);
    var wallBottom = Bodies.rectangle(sceneWidth, sceneBottom + 15, sceneWidth + 60, 30, wallOption);
    var wallLeft = Bodies.rectangle(sceneLeft - 15, (sceneTop + sceneBottom) / 2, 30, sceneHeight + 60, wallOption);
    var wallRight = Bodies.rectangle(sceneRight + 15, (sceneTop + sceneBottom) / 2 + 20, 30, sceneHeight + 20, wallOption);
    
    //passageway
    var passArr = [];
    var passagewayWall = [];
    var x = sceneWidth;
    var y = sceneTop;
    var vector = Vector.create(sceneWidth + 20, sceneTop - canvasHeight * 0.125);
    var angle = 15 / 180 * Math.PI;

    passArr[0] = Bodies.rectangle(x, y, 40, canvasHeight * 0.25, passOption);
    Body.set(passArr[0], "label", "passWay");
    passArr[1] = Bodies.rectangle(sceneWidth + canvasWidth * 0.1 + 20, 
                                    sceneTop - canvasHeight * 0.125 - 20, 
                                    canvasWidth * 0.2, 40, passOption);
    Body.rotate(passArr[1], angle, vector);

    passArr[2] = Bodies.rectangle(x - 22, y, 4, canvasHeight * 0.25, passWallOption);
    passArr[3] = Bodies.rectangle(x + 22, y + 1, 4, canvasHeight * 0.25 - 1, passWallOption);

    var passageway = Body.create({
            parts: passArr,
            isStatic: true
    });

    
    //passagewayWall
    passagewayWall[0] = Bodies.rectangle(sceneWidth + canvasWidth * 0.1 + 21,
                            sceneTop - canvasHeight * 0.125 + 2,
                            canvasWidth * 0.2, 4, passWallOption);
    passagewayWall[1] = Bodies.rectangle(sceneWidth + canvasWidth * 0.1 + 20,
                            sceneTop - canvasHeight * 0.125 - 40,
                            canvasWidth * 0.2, 4, passWallOption);
    passagewayWall[2] = Bodies.rectangle(sceneWidth + canvasWidth * 0.2 + 20,
                            sceneTop - canvasHeight * 0.125 - 20,
                            4, 40, passWallOption);
    

    var passagewayWall = Body.create({
        parts: passagewayWall,
        isStatic: true
    });      
    Body.rotate(passagewayWall, angle, vector);               


    //door
    y = sceneTop + canvasHeight * 0.125;
    //紅色門
    passWallDoor[0] = Bodies.rectangle(x, y, 46, 6, {
        isStatic: true,
        isSensor: true,
        render:{
            fillStyle: 'red'
        }
    });
    //sensor
    passWallDoor[1] = Bodies.rectangle(x, y, 20, 6, {
        isStatic: true,
        isSensor: true,
        label: "passDoor"
    });
    //隱形牆
    passWallDoor[2] = Bodies.rectangle(x, y - 7, 46, 20, {
        render: {
            fillStyle: 'blue',
            opacity: 0
        },
        isStatic: true,
    });

    passDoor = Body.create({
        parts: passWallDoor,
        isStatic: true
    });

    World.add(world, [scene, passageway, passagewayWall, wallTopLeft, wallTopRight, wallBottom, wallLeft, wallRight, passDoor]);

}

function bigLine(line){
    setTimeout(function(){
        Body.scale(line, 1.1, 1);
        if(++lineBigTime < 67){
            if(lineBigTime < 10)
                Body.scale(line, 1.0025, 1);
            else if(lineBigTime < 30)
                Body.scale(line, 1.0001, 1);
            else
                Body.scale(line, 1.00001, 1);
            bigLine(line);
        }
        else
            hookPower();
    }, 30);

}


function showTime(doorOpenTime){

    if(doorOpenTime != 0)
        setTimeout(function () {
            showTime(doorOpenTime);
        }, 1000);

    console.log(doorOpenTime--);
}
