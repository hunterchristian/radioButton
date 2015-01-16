/**
 * Created by HXH6025 on 1/15/2015.
 */

/**
 * Initialize a set of radio buttons
 */
define(['jquery'], function ($) {

    // Return object
    var exports = {};

    //Creates custom radio button and slider controls
    exports.init = function (thdFormSelector){

        $(thdFormSelector).each(function() {

            var $cbRadio = $(this);
            $cbRadio.addClass('radio-hidden');

            if ($cbRadio.is(':disabled') && !($cbRadio.is(':checked'))) {

                $cbRadio.next().prepend(function () {
                    return '<div class="radio-custom radio-custom-disabled" />';
                });

            } else if ($cbRadio.is(':disabled') && $cbRadio.is(':checked')) {

                $cbRadio.next().prepend(function () {
                    return '<div class="radio-custom radio-custom-disabled-checked"></div>';
                });

            } else {

                $cbRadio.next().prepend(function () {
                    return ($cbRadio.is(':checked')) ? '<div class="radio-custom radio-custom-active" />' : '<div class="radio-custom" />';
                });
            }

            // and finally bind the click event to update the new radio control's state graphics
            $cbRadio.click(function () {
                var getName = $(this).attr('name');
                $('input[name=' + getName + ']').next().children('div.radio-custom').removeClass('radio-custom-active');
                $cbRadio.next().children().first().toggleClass('radio-custom-active');
            });
        }); //end each loop

        $('#vendorRadio1').click(function() {
            var getName = $(this).find('.radio-custom').parent().prev().attr('name');
            $('input[name=' + getName + ']').next().children('div.radio-custom').removeClass('radio-custom-active');
            $(this).find('.radio-custom').toggleClass('radio-custom-active');
        });
        $('#vendorRadio2').click(function() {
            var getName = $(this).find('.radio-custom').parent().prev().attr('name');
            $('input[name=' + getName + ']').next().children('div.radio-custom').removeClass('radio-custom-active');
            $(this).find('.radio-custom').toggleClass('radio-custom-active');
        });
    };

    return exports;
});