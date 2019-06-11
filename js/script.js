(function(){
    var $menu = document.querySelector('header');
    
    window.addEventListener('scroll', setupNav);
    
    function setupNav(){
        var posYScroll = getYscroll()
        
        if(posYScroll > 300 && !hasClassFx()){
            document.body.classList.add('fx');
        } 
        
        if(posYScroll <= 300 && hasClassFx()) {
            document.body.classList.remove('fx');
        }
    }
    
    function getYscroll(){
        return window.pageYOffset;
    }
    
    function hasClassFx(){
        return !!document.querySelector('.fx')
    }
})()