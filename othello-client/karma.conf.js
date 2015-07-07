module.exports = function(config){
  config.set({

    basePath : './',

    files : [
        'node_modules/karma-requirejs/lib/*.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      //'app/components/**/*.js',
      //'app/view*/**/*.js',
        'app/othello-ui/othello-ui.js',
        'app/app.js',
        'app/components/services/*.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine', 'mocha', 'chai'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-requirejs',
            'karma-mocha',
            'karma-chai'
                ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
