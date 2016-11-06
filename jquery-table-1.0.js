;(function($){
	$.fn.table=function(option){
		var defualts={
			evenRowClass:'evenRow',
			oddRowClass:'oddRow',
			currentRowClass:'currentRow'
		}
		var options=$.extend(defualts,options);
		this.each(function(){
			var _this=$(this);
			_this.find('tr:even').addClass(options.evenRowClass);
			_this.find('tr:odd').addClass(options.oddRowClass);

			// _this.find('tr').mouseover(function() {
			// 	$(this).addClass(options.currentRowClass);
			// }).mouseout(function() {
			// 	$(this).removeClass(options.currentRowClass);
			// });
		_this.find('tr').bind('mouseover',function(){
				$(this).addClass(options.currentRowClass);
		});
		_this.find('tr').bind('mouseout',function(){
				$(this).removeClass(options.currentRowClass);
		});
	});
}
	
})(jQuery);