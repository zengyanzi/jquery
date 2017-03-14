// ;(function($){
// 	$.fn.tab=function(option){
// 		var defualts={
		
// 		}
// 		var options=$.extend(defualts,options);
// 		this.each(function(){
			
			
// 	});
// }
	
// })(jQuery);
;(function($){
	$.fn.tab=function(option){
		var defualts={
		currentClass:'current',
		tabNav:'tabNav>li',
		tabContent:'tabContent>div',
		eventType:'click',
		}
		var options=$.extend(defualts,options);
		this.each(function(){
			
		var _this=$(this);
		_this.find('.tabNav>li').bind(options.eventType,function(){
			$(this).addClass(options.currentClass).siblings().removeClass(options.currentClass);
			var index=$(this).index();
			_this.find('.tabContent>div').eq(index).show().siblings().hide();
		});
	});
}
	
})(jQuery);