videojs.registerPlugin('annotoDev', function () {
    var player = this;
    var config = {
        widgets: [
            {
                player: {
                    type: 'videojs',
                    element: player.el()
                }
            }
        ],
        demoMode: true
    };

    window.Annoto.boot(config);
});