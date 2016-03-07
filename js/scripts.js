

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });




  function swapsection(section){
  $('#'+section).toggle();
  $('#'+section+'-form').toggle();
  }
