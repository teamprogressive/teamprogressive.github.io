$(document).ready(function() {
	$("img.img-unveil").unveil(200, function() {
		$(this).load(function() {
			this.style.opacity = 1;
		});
	});
});