/* Script for AMNH scorpions website */
/* Website visual design and front-end development by Isadora Williams, copyright 2018 */

// Header nav appears on scroll
$(window).scroll(function () {
    let offset = $(window).scrollTop();

    if (offset > 550) {
      // remove class .bg-trans from #nav-header, add class .bg-dark, and slide down
      $('#nav-header').addClass('bg-dark').removeClass('bg-trans').css({'margin-top':'0','transition':'all 1s'});
      // show .navbar-brand img
      $('.navbar-brand img').css({'opacity':'1','transition':'all 1s'});
    } else {
      $('#nav-header').addClass('bg-trans').removeClass('bg-dark').css({'margin-top':'-55px','transition':'all 1s'});
      $('.navbar-brand img').css({'opacity':'0','transition':'all 1s'}); 
    }
  })

// ScrollMagic controller
let controller = new ScrollMagic.Controller();

  // Scene: reveal #homepage-header background image
  // create scene triggered by reaching px location
  let sceneHomepageHeader = new ScrollMagic.Scene({
    offset: 0, // start scene after scrolling for 0px
    duration: 600 // pin the element for 600px of scrolling
  })
  .setPin('main') // the element we want to pin
  .addTo(controller); // add scene to controller

  // Scene: #reasons-grid icons animate with fadeInDown
  // create scene trigged by reaching element
  let sceneReasonsGrid = new ScrollMagic.Scene({
    triggerElement: '#reasons-grid', // starting scene when reaching this element
    duration: 0 // pin the element for a total of 0px, i.e. don't pin anything
  })
  .triggerHook(1) // triggerHook 0 is top of window, .5 is middle, 1 is bottom
  .setClassToggle('#reasons-grid i','fadeInDown')
  .addTo(controller);
  // but don't animate '#reasons-grid i' within the modal dialog
  $('#reasons-grid a').on('click', function () {  // listen for click on '#reasons-grid a'
    $('#reasons-grid i').removeClass('fadeInDown'); // removeClass .fadeInDown from '#reasons-grid i'
  })

  // Scene: #science360-video animates with pulse when it reaches center of screen
  let sceneScience360Video = new ScrollMagic.Scene({
    triggerElement: '#science360-video',
    duration: 0
  })
  .triggerHook(.7)
  .setClassToggle('#science360-video div.animated','pulse')
  .addTo(controller);

  // Scene: #related-projects cards animate with fadeInRight one at a time
  let sceneRelatedProjects1 = new ScrollMagic.Scene({
    triggerElement: '#related-projects',
    duration: 0
  })
  .triggerHook(1)
  .setClassToggle('#related-projects .animate1 .card','fadeInRight')
  .addTo(controller);
  let sceneRelatedProjects2 = new ScrollMagic.Scene({
    triggerElement: '#related-projects',
    duration: 0
  })
  .triggerHook(.98)
  .setClassToggle('#related-projects .animate2 .card','fadeInRight')
  .addTo(controller);
  let sceneRelatedProjects3 = new ScrollMagic.Scene({
    triggerElement: '#related-projects',
    duration: 0
  })
  .triggerHook(.96)
  .setClassToggle('#related-projects .animate3 .card','fadeInRight')
  .addTo(controller);
  let sceneRelatedProjects4 = new ScrollMagic.Scene({
    triggerElement: '#related-projects',
    duration: 0
  })
  .triggerHook(.93)
  .setClassToggle('#related-projects .animate4 .card','fadeInRight')
  .addTo(controller);
  let sceneRelatedProjects5 = new ScrollMagic.Scene({
    triggerElement: '#related-projects',
    duration: 0
  })
  .triggerHook(.9)
  .setClassToggle('#related-projects .animate5 .card','fadeInRight')
  .addTo(controller);

// USERFLOW for #reasons-grid modal
// user clicks on an <a> within the #reasons-grid
// modal dialog displays full content of <a>

// SCRIPT for #reasons-grid modal
// get modal content <a>
// listen for show.bs.modal
$('#reasonsModal').on('show.bs.modal', function (event) {
  // get <a> that triggered the modal
  let button = $(event.relatedTarget);
  // get html from <a>
  let content = button.html();
  // target modal
  let modal = $(this);
  // put html from <a> into modal
  modal.find('.modal-body').html(content);
  // remove p.read-more within modal
  modal.find('p.read-more').remove();
})
  

// USERFLOW for #reasonsModal interaction
// user clicks one of icons at bottom of modal dialog
// content from corresponding #reasons-grid li loads in modal

// PSEUDOCODE for #reasonsModal interaction
// listen for click  on <i> within modal
$('#reasonsModal i').on('click', function (event) {
  // return index of clicked <i> within .modal-footer
  let reasonIndex = $('.modal-footer i').index(this);
  // subtract 1 to skip the first <i> ('previous' caret icon)
  reasonIndex -=1;
  // find <a> of same index within #reasons-grid
  // get html from <a>
  
  // let content = $('#reasons-grid a:eq( reasonIndex )').html();
  // ^ can't get reasonIndex to be recognized as a valid substitute for an index number
  // using '0' for index number until I can get reasonIndex to work above
  let content = $('#reasons-grid a:eq(0)').html();
  
  // target modal
  let modal = $('.modal-content');
  // replace html from modal body with new content
  modal.find('.modal-body').html(content);
  // remove p.read-more within modal
  modal.find('p.read-more').remove();
})

// USERFLOW for #reasonsModal interaction
// user clicks on 'previous' or 'next' caret icon at bottom of modal dialog
// content from corresponding #reasons-grid li loads in modal


