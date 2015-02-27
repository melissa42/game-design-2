define(['app/config', 'app/platform'],
function(config, platform) {

    "use strict";

    var Environment = function() {}
    
    Environment.prototype.build = function(game)
    {
        game.physics.startSystem(Phaser.Physics.ARCADE)

        this.game = game;
        this.backdrop = game.add.tileSprite(0, 0, 5000, config.game.height,
            'background');

        platform.init(game);

        platform.create(
            { x: 0,
              y: config.game.height - 150 },
            { height: 150,
              width: config.game.width },
            'ground', true, true);

        platform.create(
            { x: config.game.width - 200,
              y: 0 },
            { height: config.game.height,
              width: config.game.width},
            'ground');

        platform.create(
            { x: config.platform.bare.x,
              y: config.platform.bare.y },
            { height: config.platform.bare.height,
              width: config.platform.bare.width},
            'ground');

    }

    Environment.prototype.getPlatform = function()
    {
        return platform;
    }

    Environment.prototype.move = function(direction, platforms)
    {
        this.backdrop.x -= (direction / (direction - (direction / 2)))
                         * (direction / Math.abs(direction))
        platforms.move(direction);
    }

    return new Environment();

});
