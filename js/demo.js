$(document).ready(function() {

  var topBtn = $('.toppage1');
  topBtn.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  // radio email
  $( "input[name=email]:radio" ).click(function() {

    var id =[];
    $("input[name=email]:radio").each(function (index, value){
      id.push($(this).attr('id'));
    });

    $.each(id , function (index, value){
      $("label[for='"+value+"']").removeClass('active');
    });
    $("label[for='"+$(this).attr('id')+"']").addClass('active');

  });

  //radio gender
  $( "input[name=gender]:radio" ).click(function() {

    var id =[];
    $("input[name=gender]:radio").each(function (index, value){
      id.push($(this).attr('id'));
    });

    $.each(id , function (index, value){
      $("label[for='"+value+"']").removeClass('active');
    });
    $("label[for='"+$(this).attr('id')+"']").addClass('active');

  });

  //radio nickname
  $( "input[name=nickname]:radio" ).click(function() {

    var id =[];
    $("input[name=nickname]:radio").each(function (index, value){
      id.push($(this).attr('id'));
    });

    $.each(id , function (index, value){
      $("label[for='"+value+"']").removeClass('active');
    });
    $("label[for='"+$(this).attr('id')+"']").addClass('active');

  });
  //radio contact
  $( "input[name=contact]:radio" ).click(function() {

    var id =[];
    $("input[name=contact]:radio").each(function (index, value){
      id.push($(this).attr('id'));
    });

    $.each(id , function (index, value){
      $("label[for='"+value+"']").removeClass('active');
    });
    $("label[for='"+$(this).attr('id')+"']").addClass('active');

  });

  //radio send
  $( "input[name=send]:radio" ).click(function() {

    var id =[];
    $("input[name=send]:radio").each(function (index, value){
      id.push($(this).attr('id'));
    });

    $.each(id , function (index, value){
      $("label[for='"+value+"']").removeClass('active');
    });
    $("label[for='"+$(this).attr('id')+"']").addClass('active');

  });

  $( "input[name=question]:checkbox" ).click(function() {
    
    if ( $("label[for='"+$(this).attr('id')+"']").hasClass('active')) {
      $("label[for='"+$(this).attr('id')+"']").removeClass('active');
    } else {
      $("label[for='"+$(this).attr('id')+"']").addClass('active');
    }

  });

})