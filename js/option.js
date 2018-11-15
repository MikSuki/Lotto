var sceneOption = {
    isStatic: true,
    isSensor: true,
    collisionFilter:{
        mask: 0x0002
    },
    render: {
        fillStyle: '#DDDDDD',
        opacity: 0.1
    }
};

var wallOption = {
    isStatic: true,
    friction: 0,
    frictionStatic: 0,
    render: {
        visible: false
    }
};

var groundOption = {
    isStatic: true,
    render:{
        fillStyle: 	'#0066FF'
    },
    friction: 1,
};

var circleOption = {
    render: {
        fillStyle: 'yellow'
    },
    restitution: 0.8,
    label: "ball"
};

var textOption = {
    render: {
        fillStyle: 'black'
    }
};

var passOption = {
    render: {
        fillStyle: '#DDDDDD',
        opacity: 0.2
    },
    isSensor: true
};

var passWallOption = {
    render: {
        fillStyle: 'black'
    }
};

var passDoorOption = {
    isStatic: true,
    isSensor: true,
};

var hookOption = {
    render:{
        fillStyle: 'blue'
    },
};

var hookJointOption = {
    render:{
        fillStyle: 'black',
        strokeStyle: "white",
        lineWidth: 3
    },
}
