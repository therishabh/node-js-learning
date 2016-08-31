module.exports = {

    enable : function(app) {
        app.use(require('connect-livereload')({
            port: 35729
        }));
    }
}
