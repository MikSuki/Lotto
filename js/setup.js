var mainCanvas = document.getElementById("mainCanvas");
var moveBtn = document.getElementById("moveBtn");
var hookBtn = document.getElementById("hookBtn");
var blowBtn = document.getElementById("blowBtn");
var lotteryBtn = document.getElementById("lotteryBtn");
var testBtn = document.getElementById("testBtn");
var sceneTop, sceneRight, sceneBottom, sceneLeft;
canvasWidth = window.innerWidth;
canvasHeight = window.innerHeight;
mainCanvas.width = canvasWidth;
mainCanvas.height = canvasHeight;
sceneTop = Math.floor(canvasHeight * 0.2);
sceneRight = Math.floor(canvasWidth * 0.75);
sceneBottom = Math.floor(canvasHeight * 0.7);
sceneLeft = Math.floor(canvasWidth * 0.25);
sceneWidth = Math.floor(canvasWidth * 0.5);
sceneHeight = Math.floor(canvasHeight * 0.5);



var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Body = Matter.Body;
var Bodies = Matter.Bodies;
var Composite = Matter.Composite;
var Constraint = Matter.Constraint;
var Events = Matter.Events;
var Vector = Matter.Vector;
var Runner = Matter.Runner;
var Pairs = Matter.Pairs;
var Common = Matter.Common;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;
var mouse = Mouse.create(mainCanvas);
var mouseConstraint;


//sevenDisplay
var one = [1, 2];
var two = [0, 1, 3, 4, 6];
var three = [0, 1, 2, 3, 6];
var four = [1, 2, 5, 6];
var five = [0, 2, 3, 5, 6];
var six = [0, 2, 3, 4, 5, 6];
var seven = [0, 1, 2, 5];
var eight = [0, 1, 2, 3, 4, 5, 6];
var nine = [0, 1, 2, 5, 6];
var zero = [0, 1, 2, 3, 4, 5];
var number = [one, two, three, four, five, six, seven, eight, nine, zero];

var ballArr = [];
var lotteryArr = []

var passWallDoor = [];
var passDoor;
var hook;
var hooks = [];
var choosedBall;

var blowOn = false;
var hookPowerOn = false;
var canMoveBall = false;
var suckABall = false;
var doorOpen = false;
var hookStart = false;
var doorOpenTime = 3000;

var engine = Engine.create();
var world = engine.world;


var render = Render.create({
    engine: engine,
    canvas: mainCanvas,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false
    }
});
Engine.run(engine);
Render.run(render);

createBackground();
initialBall();
createHook()



