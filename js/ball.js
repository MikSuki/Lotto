var bigTime;
function initialBall(){
    for (var i = 0; i < 50; ++i) {
        var x = sceneLeft + 20 + Math.random() * sceneWidth * 0.95;
        var y = sceneTop * 1.5 + 20 + Math.random() * sceneHeight * 0.3;
        createBall(x, y, i, true);
    }
}


function createBall(x, y, i, initialOrNot){

    var circleA = Bodies.circle(x, y, 15, circleOption);
    var part = [circleA];
    var part2 = drawNumber(x, y, i);
    for (var j = 0; j < part2.length; ++j)
        part.push(part2[j]);

    if(initialOrNot){
        var ballBody = Body.create({
            parts: part,
            id: 10000 + i
        });
        ballArr.push(ballBody);
    }
    else{
        var ballBody = Body.create({
            parts: part,
            isStatic: true
        });
        bigTime = 0;
        Body.setAngle(ballBody, 90 / 180 * Math.PI);
        becomeBig(ballBody);
    }

    World.add(world, ballBody);

}


function drawNumber(x, y, i){
    var circleA = Bodies.circle(x, y, 15, circleOption);
    var part = [];

    if (i == 0) {
        var b = Bodies.rectangle(x, y - 4, 3, 10, textOption);
        var c = Bodies.rectangle(x, y + 4, 3, 10, textOption);
        part.push(b, c);
    }
    else if (i < 9) {
        var a = Bodies.rectangle(x, y - 8, 10, 3, textOption);
        var b = Bodies.rectangle(x + 4, y - 4, 3, 10, textOption);
        var c = Bodies.rectangle(x + 4, y + 4, 3, 10, textOption);
        var d = Bodies.rectangle(x, y + 8, 10, 3, textOption);
        var e = Bodies.rectangle(x - 4, y + 4, 3, 10, textOption);
        var f = Bodies.rectangle(x - 4, y - 4, 3, 10, textOption);
        var g = Bodies.rectangle(x, y, 10, 3, textOption);
        var sevenDisplay = [a, b, c, d, e, f, g];

        for(var j = 0; j < number[i].length; ++j){
            part.push(sevenDisplay[number[i][j]]);
        }
    }
    else {
        var ones = ((i + 1) % 10 == 0) ? 9 : (i + 1) % 10 - 1;
        var tens = Math.floor((i + 1) / 10) - 1;

        var a = Bodies.rectangle(x - 6, y - 8, 10, 3, textOption);
        var b = Bodies.rectangle(x - 2, y - 4, 3, 10, textOption);
        var c = Bodies.rectangle(x - 2, y + 4, 3, 10, textOption);
        var d = Bodies.rectangle(x - 6, y + 8, 10, 3, textOption);
        var e = Bodies.rectangle(x - 10, y + 4, 3, 10, textOption);
        var f = Bodies.rectangle(x - 10, y - 4, 3, 10, textOption);
        var g = Bodies.rectangle(x - 6, y, 10, 3, textOption);

        var a2 = Bodies.rectangle(x + 6, y - 8, 10, 3, textOption);
        var b2 = Bodies.rectangle(x + 10, y - 4, 3, 10, textOption);
        var c2 = Bodies.rectangle(x + 10, y + 4, 3, 10, textOption);
        var d2 = Bodies.rectangle(x + 6, y + 8, 10, 3, textOption);
        var e2 = Bodies.rectangle(x + 2, y + 4, 3, 10, textOption);
        var f2 = Bodies.rectangle(x + 2, y - 4, 3, 10, textOption);
        var g2 = Bodies.rectangle(x + 6, y, 10, 3, textOption);

        if(tens == 0){
            var b = Bodies.rectangle(x - 6, y - 4, 3, 10, textOption);
            var c = Bodies.rectangle(x - 6, y + 4, 3, 10, textOption);
        }
        if(ones == 0){
            var b2 = Bodies.rectangle(x + 6, y - 4, 3, 10, textOption);
            var c2 = Bodies.rectangle(x + 6, y + 4, 3, 10, textOption);
        }

        var sevenDisplay = [a, b, c, d, e, f, g, a2, b2, c2, d2, e2, f2, g2];

        for(var j = 0; j < number[ones].length; ++j){
            part.push(sevenDisplay[number[ones][j] + 7]);
        }
        for(var k = 0; k < number[tens].length; ++k){
            part.push(sevenDisplay[number[tens][k]]);
        }
    }

    return part;

}

function becomeBig(body){

    setTimeout(function () {
        Body.scale(body.parts[1], 1.1, 1.1);
        Body.scale(body, 1.1, 1.1);
        Body.rotate(body, -9 / 180 * Math.PI);

        if (++bigTime < 10)
            becomeBig(body);
    }, 50);

}
