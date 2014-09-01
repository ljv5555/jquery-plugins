$(document).ready(function(){
  var buttontemplate = _.template('<div><button type="button" class="button_b button_b_<%=_.now()+"" %>" onclick="<%=onclick %>" ><%=text %></button>');
  var d1 = $('<div/>');
  d1.html(buttontemplate({"onclick":"alert(1);","text":"sometext"}));

  
});
