$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 520){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
})

$('.menu a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
            scrollTop: $(hash).offset().top
        },
         1000
         
         );
        }
    })