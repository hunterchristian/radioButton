/**
 * Created by HXH6025 on 1/15/2015.
 */

/**
 * Created by HXH6025 on 11/13/2014.
 */
/*
 * Define the configuration for RequireJS
 */
requirejs.config({
                   // By default load any module IDs from js/bower_components for easier loading of third-party files
                   baseUrl: '../../bower_components',
                   // Except if the file begins with any of the names listed here.
                   // In that case, RequireJS will load this path (relative to the
                   // baseUrl).
                   paths  : {
                     // JQuery and JQuery UI
                     jquery   : 'jquery/dist/jquery',
                     // THD styled radio button
                     radioBtn : '../app/scripts/radioButton',
                     // THD stylesheets
                     styles   : '../app/scripts/radioButton/radioButtonStyles',
                     // Stylesheet loader
                     cssLoader: 'cssLoader/js/cssLoader'
                   }
                 });

require(['radioBtn', 'styles'], function (radioButton) {
  radioButton.init($('#vendorRadioRow').find($('input[type=radio]')));
});
//@ sourceURL=radioButtonMain.js
