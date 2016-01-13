// extension:
$.fn.scrollEnd = function(callback, timeout) {          
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

	
	var lastScrollTop=0;
	$(window).scroll(function(event){
		var currentScroolPosition=$(this).scrollTop();
		if(currentScroolPosition>lastScrollTop){}
		
		else
			 $("#header").fadeOut();
		lastScrollTop=currentScroolPosition; 
	});
	$(window).scrollEnd(function(){
		$("#header").fadeIn();
	},300);
	var footerHeight=120;
	$('#footer').html(footerHeight);
	
		
var randomNumber=Math.floor((Math.random() * 10) + 1);
var imageRandomPath='img/'+randomNumber+'.jpg';
$("#random-image").attr("src",imageRandomPath);
