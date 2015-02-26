(function($){
  $.fn.ilkeklentim = function(){
    var elements = this.children("span");
    $(elements)
	.css("border","solid 1px #666")
	.css("margin-bottom","2px")
	.css("color","#000")
	.css("padding","2px 5px")
	.css("background-color","#eee")
	.css("display","block")
	.css("font-famiy","Arial")
	.css("font-size","14px");
  };
})(jQuery);