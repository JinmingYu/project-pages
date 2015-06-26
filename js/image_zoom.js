var ImageZoomElement = document.registerElement('image-zoom');
var ImageZoomProto = Object.create(HTMLElement.prototype);
ImageZoomProto.zoom = function() {
        $(function($){
        var addToAll = true;
        var gallery = true;
        var titlePosition = 'inside';
        $(addToAll ? 'img' : 'img.fancybox').each(function(){
            var $this = $(this);
            var title = $this.attr('title');
            var src = $this.attr('data-big') || $this.attr('src');
            var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
            $this.wrap(a);
        });
        if (gallery)
            $('a.fancybox').attr('rel', 'fancyboxgallery');
        $('a.fancybox').fancybox({
            titlePosition: titlePosition
        });
    });
    $.noConflict();
}

var XTreehouseElement = document.registerElement('image-zoom',  { 
    prototype: ImageZoomProto
});
var ImageZoom = new ImageZoom();



// $(document).ready(function(){
// 	$( "img" ).addClass( "fancybox" );
// });