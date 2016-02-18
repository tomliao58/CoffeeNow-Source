'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-html-snapshot');

    grunt.initConfig({
        htmlSnapshot: {
            all: {
                options: {
                    snapshotPath: 'snapshots/',
                    sitePath: 'http://www.coffeenow.com.tw/',
                    urls: ['#', '#/about', '#/coffee', '#/producers', '#/shopping', '#/contact'],
                    sanitize: function (requestUri) {
                        //returns 'index.html' if the url is '/', otherwise a prefix
                        if (/\#$/.test(requestUri)) {
                            return 'index';
                        } else {
                            //return requestUri.replace(/\//g, 'prefix-');
                            return requestUri.replace(/\#\//g, '');
                        }
                    },
                    //if you would rather not keep the script tags in the html snapshots
                    //set `removeScripts` to true. It's false by default
                    removeScripts: true,
                }
            }
        }
    });

    grunt.registerTask('default', ['htmlSnapshot']);
};
