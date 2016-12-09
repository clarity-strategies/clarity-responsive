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
  }

  $.fn.serializeObject = function()
  {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    o['url'] = location.protocol + '//' + location.host + location.pathname;
    console.log('serialobject = '+ o)
    return o;
  };


  $('.clarityform').submit(function() {
    //alert(encodeURIComponent(thedata));
    var thedata = JSON.stringify($(this).serializeObject());
    var script = document.createElement('script');
    script.src = 'https://script.google.com/macros/s/AKfycbwtICQXBCi2XIPiuI3tZM4XmbT_Xr8XXA60b-oAwNTrdhrzp24/exec?data='+encodeURIComponent(thedata);
    document.body.appendChild(script);
    var enqname = $(this).find('input[name="FNAME"]').val();
    var subscribeon = $(this).find('input[name="subscribe"]').val();
    var thankmsg = '<p>Thanks '+enqname+'. Someone from the team will contact you.</p>';
    if($(this).find('input[name="subscribe"]').prop('checked') ){thankmsg = thankmsg + '<p><strong>Great</strong> you chose to subscribe to Inward Investment news and insights email newsletter. Please check your email inbox now and <strong>action the confirmation</strong>.</p>'};
    $('#subscribe-sb ul').html('');
    //alert(thankmsg)
    $(this).html(thankmsg);
    return false;
  });

function closeform(section){
  $('#'+section).toggle();
  $('#'+section+'-form').toggle();
  console.log('this = '+this)
  }
