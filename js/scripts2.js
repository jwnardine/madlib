$(function(){
  $("#blanks form").submit(function(event){
    var somethingInput = $("input#Something").val();

    $(".Something").text(somethingInput);

    event.preventDefault();
  });
});
