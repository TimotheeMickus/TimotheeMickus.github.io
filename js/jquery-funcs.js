$( document ).ready(function() {

    reverse_sessions = function() {
      container = $("div.container");
      container.children().each(function(i,child){
        container.prepend(child)
      });
    };
    reverse_sessions();
    $("a.reversor").on("click", reverse_sessions);




    $("a.reading-group-session-header").on("click", function() {
      $("section.reading-group-session."+$(this).attr('for-session')).toggleClass('hidden-session')
    });

    $("a.collapsor").on("click", function(){
      container = $("div.container");
      invert_collapse=$(this).hasClass("reversed")
      container.children().each(function(i,child){
        if (!invert_collapse) {
          $(child).children("section.reading-group-session").addClass('hidden-session');
        } else {
          $(child).children("section.reading-group-session").removeClass('hidden-session');
        }
      });
      if (!invert_collapse){
        $(this).text("Expand all");
      } else {
        $(this).text("Collapse all");
      }
      $(this).toggleClass("reversed");
    });

    $("section.reading-group-session").slice(1).addClass('hidden-session');

});
