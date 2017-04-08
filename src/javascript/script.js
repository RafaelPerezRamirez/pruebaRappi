/**
 * @var {string} apiUrl - Url of the endpoints
 */
var apiUrl = 'http://jsonplaceholder.typicode.com/';
/**
 * Fetches posts and appends them to the DOM
 */
function getPosts(){
    var getPosts = {
        "async": true,
        "crossDomain": true,
        "url": apiUrl+"posts",
        "method": "GET",
    }
    $.ajax(getPosts).done(function (items) {
        if(items){
            var itemsloop = '';
            $.each(items, function(i, item) {
                itemsLoop = '<div class="item-loop" data-id="'+item.id+'"><div class="image-loop"></div><div class="item-name">'+item.title+'</div></div>';
                $('.content-loop').append(itemsLoop);
            });
        }
    });
}
function menuBehavior(){
    $('.button-search, .button-close').on('click', function(){
        $('.hidden').removeClass('hidden');
        $(this).addClass('hidden');
        $('.input-found').slideToggle();
        $('.input-found').focus();
        $('.input-found').val('');
        $('.item-loop').fadeIn();
    })
}
function itemBehavior(){
    $('body').on('click', '.item-loop', function(){
        var id = $(this).data('id');
        var name = $(this).find('.item-name').text();
        madeFancy(id,name);
    })
}
/**
 * Builds a fancy and shows it
 * @param {int} id - Id of post
 * @param {string} name - Name of post
 */
function madeFancy(id,name){
    var filterComments = {
        "async": true,
        "crossDomain": true,
        "url": apiUrl+"posts?userId="+id+"",
        "method": "GET",
    }
    $.ajax(filterComments).done(function (comments) {
        if(comments){
            var commentsLoop = '';
            $.each(comments, function(i, comment) {
                commentsLoop = '<div class="comment-loop"><div class="comment-id">'+comment.id+'</div><div class="comment-title">'+comment.title+'</div><div class="comment-body">'+comment.body+'</div></div>';
                $('.content-comments').append(commentsLoop);
            });
        }
    });
    $('.content-body').text(name);
    $('.fancy-comments').addClass('fancy-visible');
    $('body').css({'overflow':'hidden'});

    $('.close-fancy').on('click', function(){
        $('.fancy-comments').removeClass('fancy-visible');
        $('body').css({'overflow':'initial'});
        $('.comment-loop').remove();
    })
}
/**
 * Filter posts by name
 */
function filter(){
    $('body').on('keyup change', '.input-found', function(){
		var query = $.trim($('.input-found').val()).toLowerCase();
		$('.item-name').each(function(){
			 var $this = $(this);
			 if($this.text().toLowerCase().indexOf(query) === -1)
				 $this.closest('.item-loop').fadeOut();
			else $this.closest('.item-loop').fadeIn();
		});
	});
}
$( document ).ready(function() {
    getPosts();
    menuBehavior();
    itemBehavior();
    filter();
});
