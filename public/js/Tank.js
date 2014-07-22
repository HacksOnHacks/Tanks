'use strict';
function Tank(name) {
    this.x = game.world.randomX;
    this.y = game.world.randomY;
    this.name = name;

    this.tank = game.add.sprite(this.x, this.y, 'tank', 'tank1');

    // Enable physics for this object
    game.physics.enable(this.tank, Phaser.Physics.ARCADE);

    this.tank.anchor.setTo(0.5, 0.5);
    this.tank.animations.add('move', ['tank1', 'tank2', 'tank3', 'tank4', 'tank5', 'tank6'], 20, true);

    this.tank.turret = game.add.sprite(this.x, (this.y - 2), 'tank', 'turret');
    this.tank.turret.anchor.setTo(0.3, 0.3);

}

Tank.prototype.rotateLeft = function () {
    this.tank.angle -= 3;
    this.tank.turret.angle -= 3;
};

Tank.prototype.rotateRight = function () {
    this.tank.angle += 3;
    this.tank.turret.angle += 3;
};

// Move forward
Tank.prototype.move = function (currentSpeed) {
    this.tank.turret.x = this.tank.x;
    this.tank.turret.y = this.tank.y;
    game.physics.arcade.velocityFromRotation(this.tank.rotation, currentSpeed, this.tank.body.velocity);
};

Tank.prototype.fire = function () {
    // Create new instance of Bullet
};

Tank.prototype.animate = function () {
    this.tank.animations.play('move');
};

Tank.prototype.name = function () {
    return this.name;
};
