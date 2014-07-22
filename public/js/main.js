'use strict';
var worldWidth = document.documentElement.clientWidth;
var worldHeight = document.documentElement.clientHeight;
var socket = io.connect('/');

// World Variables
var land,
    tanks = [],
    cursors,
    tank1,
    currentSpeed;

var game = new Phaser.Game(worldWidth, worldHeight, Phaser.AUTO, 'world',
    { preload: preload,
        create: create,
        update: update,
        render: render
    });


function preload() {
    game.load.atlas('tank', '/images/tanks.png', '/tanks.json');
    game.load.image('earth', '/images/scorched_earth.png');
    game.load.image('bullet', '/images/bullet.png');
    // game.add.text(16, 16, 'Room', {font: '32px arial', fill: '#000'});

}
function create() {
    game.stage.disableVisibilityChange = true;
    game.world.setBounds(-1000, -1000, worldWidth, worldHeight);


    land = game.add.tileSprite(0, 0, worldWidth, worldHeight, 'earth');
    land.fixedToCamera = true;

    for (var i = 0; i < 1; i++) {

        tanks.push(new Tank("1"));
    }

    console.log(tanks[0]);

    cursors = game.input.keyboard.createCursorKeys();
}
function update() {
    tanks.map(function (tank) {
        tank.animate();
    });

    var forwardKey = game.input.keyboard.addKey(Phaser.Keyboard.W),
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A),
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

    // Move Tank forward
    if (forwardKey.isDown || cursors.up.isDown) {
        currentSpeed = 300;
    }

    // Rotate Tank left
    if (leftKey.isDown || cursors.left.isDown) {
        tanks.map(function (tank) {
            tank.rotateLeft();
        });
    }

    // Rotate Tank right
    if (rightKey.isDown || cursors.right.isDown) {
        tanks.map(function (tank) {
            tank.rotateRight();
        });
    }
    if (game.input.activePointer.isDown) {
        tanks.map(function (tank) {
            tank.fire();
        })
    }

    if (currentSpeed >= 0) {
        tanks.map(function (tank) {
            tank.move(currentSpeed);
            currentSpeed -= 5;
        })
    }


}
function render() {
}
