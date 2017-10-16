$(document).ready(function() {
  $("#searchbtn").on("click", function(){
    $("#topics").html("");
    var searchInput = document.getElementById("search").value;
    
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchInput + "&callback=?", function(json){
    for(i=0; i<json[1].length;i++){
      $('#topics').append('<a href="' + json[3][i] + '"style="text-decoration:none;">'+ '<div class="entries"><h3>' + json[1][i] + '</h3><p>' + json[2][i] + '</p></div></a>');
    }
  });
    return false;
  });
  $(".entries").hover(function () {
    $(".entries").fadeOut( 100 );
    $(".entries").fadeIn( 500 );
  });
});