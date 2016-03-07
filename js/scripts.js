

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });




  function openform(section){
  $('#'+section).toggle();
  $('#'+section+'-form').toggle();
  $('html, body').animate({
    scrollTop: $('#'+section+'-form').offset().top
}, 200);
  //$('body').scrollTo('#'+section+'-form');
  }
  function closeform(section){
  $('#'+section).toggle();
  $('#'+section+'-form').toggle();
  console.log('this = '+this)
  }
