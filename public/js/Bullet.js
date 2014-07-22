'use strict';

//var bullets;
//bullets = game.add.group();
//bullets.enableBody = true;
//bullets.physicsBodyType = Phaser.Physics.ARCADE;
//bullets.createMultiple(30, 'bullet', 0, false);
//bullets.setAll('anchor.x', 0.5);
//bullets.setAll('anchor.y', 0.5);
//bullets.setAll('outOfBoundsKill', true);
//bullets.setAll('checkWorldBounds', true);

function Bullet(startX, startY, angle) {
    this.x = startX;
    this.y = startY;
    this.angle = angle;

    this.bullet = game.add.sprite(this.x, this.y, 'bullet', 'bullet');
    game.physics.enable(this.bullet, Phaser.Physics.ARCADE);
    this.bullet.anchor.setTo(-0.9, 0.6);
    this.bullet.enableBody = true;
    this.bullet.physicsBodyType = Phaser.Physics.ARCADE;
    this.bullet.rotation = game.physics.arcade.moveToPointer(this.bullet, 1000, game.input.activePointer, 500);
}