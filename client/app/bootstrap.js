'use strict';

(function(window) {

    require.config({
        baseUrl: "app",
        paths: {
            'jasmine_f': '../libs/jasmine/lib/jasmine-core',
            'specs': '../test/specs',
            'angular-mocks': '../libs/angular-mocks/angular-mocks',
            'mocks': '../test/mocks',
            '$Libs': '../libs',
            '$App': '../libs/apperyio',
            '$Screens': 'pages',
            '$Modals': 'modals',
            '$Directives': 'directives',
            '$Services': 'services',
            "text": "../libs/text",
            "require": "../libs/requirejs/require",
            "angular": "../libs/angular/angular.min",
            "angular-touch": "../libs/angular-touch/angular-touch.min",
            "angular-route": "../libs/angular-route/angular-route.min",
            "angular-animate": "../libs/angular-animate/angular-animate.min",
            "ui-bootstrap": "../libs/angular-bootstrap/ui-bootstrap-tpls.min",
            "lodash": "../libs/lodash/dist/lodash.min",
            "gmaps": "../libs/angular-google-maps/angular-google-maps.min",
            "Apperyio": "../libs/apperyio/Apperyio",
            "q": "../libs/ms_sdk_bundle/q/q",
            "localforage": "../libs/ms_sdk_bundle/localforage/dist/localforage",
            "EventEmitter": "../libs/ms_sdk_bundle/EventEmitter.js/EventEmitter",
            "tv4": "../libs/ms_sdk_bundle/tv4/tv4",
            "ms-client-sdk": "../libs/ms_sdk_bundle/client-sdk",
            "CryptoJS": "../libs/ms_sdk_bundle/crypto-js-md5/crypto-js-md5",
            "moment": "../libs/ms_sdk_bundle/moment/moment",
            "cordova": "../libs/cordova",
            "x2js": "../libs/x2js/xml2json",
            "$App/crouterconfig": "../libs/apperyio/crouterconfig",
            "backButton": "directives/backButton",
            "navigateTo": "directives/navigateTo",
            '$myCommitments': 'pages/myCommitments'
        },
        waitSeconds: 100,
        shim: {
            "angular": {
                exports: "angular"
            },
            "angular-touch": {

                deps: ["angular"]
            },
            "angular-route": {

                deps: ["angular"]
            },
            "angular-animate": {

                deps: ["angular"]
            },
            "ui-bootstrap": {

                deps: ["angular"]
            },
            "lodash": {
                exports: "_"
            },
            "gmaps": {

                deps: ["angular"]
            },
            "CryptoJS": {
                exports: "CryptoJS"
            },
            "x2js": {
                exports: "X2JS"
            },

            'jasmine_f/boot': {
                deps: ['jasmine_f/jasmine-html']
            },
            'jasmine_f/jasmine-html': {
                deps: ['jasmine_f/jasmine']
            },
            'angular-mocks': {
                deps: ['angular', 'jasmine_f/boot']
            }
        }
    });

    define('angular', [], function() {
        return window.angular;
    });

    window.__APPLICATION_NAME = "AppModule_Habitizer";

    if (window.location.href.indexOf('tests.html') > -1) {
        require(["require", "angular", "app", '../test/tests_asset'], function() {});
    } else {
        require(["require", "angular", "app", "ui-bootstrap"], function(require, angular) {
            // Run APP
            angular.bootstrap(document.documentElement, [window.__APPLICATION_NAME]);
        });
    }

})(this);