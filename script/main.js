(function(){
	function init(){

		window.requestAnimFrame = (function(){
			return  window.requestAnimationFrame       ||
			      	window.webkitRequestAnimationFrame ||
			      	window.mozRequestAnimationFrame    ||
			      	function( callback ){
			        	window.setTimeout(callback, 1000 / 60);
			      	};
		})();

		var canvas = document.createElement("canvas"),
			ctx = canvas.getContext("2d"),
			cW = canvas.width = window.innerWidth,
			cH = canvas.height = window.innerHeight;

		canvas.id = "main_canvas";
		document.body.appendChild(canvas);
	}
	window.addEventListener("load",init,false);
})();
