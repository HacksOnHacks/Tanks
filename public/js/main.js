'use strict';
var worldWidth = document.documentElement.clientWidth;
var worldHeight = document.documentElement.clientHeight;
var socket = io.connect('/');

// World Variables
var land;

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
    game.add.text(16, 16, 'Room', {font: '32px arial', fill: '#000'});

}
function create() {
    game.stage.disableVisibilityChange = true;
    game.world.setBounds(-1000, -1000, 2000, 2000);


    land = game.add.tileSprite(0, 0, worldWidth, worldHeight, 'earth');
    land.fixedToCamera = true;
}
function update() {

}
function render() {
}