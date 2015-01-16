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
                   baseUrl: '../../components',
                   // Except if the file begins with any of the names listed here.
                   // In that case, RequireJS will load this path (relative to the
                   // baseUrl).
                   paths  : {
                     // JQuery and JQuery UI
                     jquery   : 'jquery/jquery',
                     // THD styled radio button
                     radioBtn : 'radioButton/radioButton',
                     // THD stylesheets
                     styles   : 'radioButton/radioButtonStyles',
                     // Stylesheet loader
                     cssLoader: 'cssLoader/js/cssLoader',
                   }
                 });

require(['radioBtn', 'styles'], function (radioButton) {
  radioButton.init($('#vendorRadioRow input[type=radio]'));
});
//@ sourceURL=radioButtonMain.js
