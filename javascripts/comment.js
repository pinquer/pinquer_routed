(function(){
    $('#comment').on('click',function(){
    	var commentContent = $('textarea').val();
    	if (commentContent) {
	    	$("<div class='past-comment only-shadow' id='new'></div> ").appendTo('.comment');
	    	$("<img src='images/photo.png'><div class='comment-content'></div>").appendTo('#new');
	    	$(
	    	"<p class='user-name'>"+ "我的名字"+"</p>"+
	    	"<p class='post-time'>"+ "發布的時間"+"</p>"+
	    	"<p>"+ commentContent + "</p>"
	    	).appendTo("#new .comment-content");
	    	$('textarea').val('');
    	}

    });
})();