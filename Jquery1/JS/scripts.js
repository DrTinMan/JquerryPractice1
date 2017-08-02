$(function(){
jQuery("h1").click(function() {
  alert("This is a header. Its really not as interesting as the cat I think.");
});

jQuery("p").click(function() {
  alert("This is a paragraph. You really should have clicked on the cat img instead.");
});

jQuery("img").click(function() {
  alert("Meow!");
});
});
