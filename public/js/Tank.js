var tank = {
    turret: {},
    x: null,
    y: null,
    persona: null
};

var self;

function Tank(name) {
    // Create a new
    self = this;
    self.name = name;

    self.x = game.world.randomX;
    self.y = game.world.randomY;


    self = game.add.sprite(self.x, self.y, 'tank', 'tank1');
    self.anchor.setTo(0.5, 0.5);
    self.animations.add('move', ['tank1', 'tank2', 'tank3', 'tank4', 'tank5', 'tank6'], 20, true);

    self.turret = game.add.sprite(self.x, (self.y - 2), 'tank', 'turret');
    self.turret.anchor.setTo(0.3, 0.3);

    return this;
}

Tank.prototype.rotateLeft = function () {
    self.angle -= 2;
};

Tank.prototype.rotateRight = function () {
    self.angle += 2;
};

Tank.prototype.move = function () {
    // Move forward
};

Tank.prototype.fire = function () {
    // Create new instance of Bullet
};

Tank.prototype.animate = function () {
    self.animations.play('move');
};

Tank.prototype.name = function () {
    return self.name;
};