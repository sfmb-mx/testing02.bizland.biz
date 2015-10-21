// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: ELEGANCE.
// Author: Designova.
// Version 1.0 - Initial Release
// Website: http://www.designova.net 
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {


     
    //Detecting viewpot dimension
     var vH = $(window).height();

     //Adjusting Intro Components Spacing based on detected screen resolution
     $('.fullheight').css('height',vH);
     $('.halfheight').css('height',vH/2);
     $('.fullheightmin').css('min-height',vH);
  
   

    //Mobile Menu (multi level)
    $('ul.slimmenu').slimmenu({
        resizeWidth: '1200',
        collapserTitle: 'menu',
        easingEffect:'easeInOutQuint',
        animSpeed:'medium',
    });



 //Navigation Sub Menu Triggering
    $('.trigger-sub-nav').click(function(){
        $('.sub-nav').slideUp('fast');
        $('.trigger-sub-nav').find('.main-nav').removeClass('nav-highlight');
        $(this).find('.main-nav').addClass('nav-highlight');
        $(this).find('.sub-nav').slideDown('slow');
    });


     
    //TWITTER INIT (Updated with compatibility on Twitter's new API):
    //PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
    $(function ($) {
              $('#ticker').tweet({
                  modpath: './twitter/',
                  count: 1,
                  loading_text: 'loading twitter update...',
                  username:'designovastudio'
                  /* etc... */
              });
    }); 




});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

