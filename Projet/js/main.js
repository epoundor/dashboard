/*==================== MENU SHOW Y HIDDEN ====================*/
$(document).ready(function () {
/*===== MENU SHOW =====*/
        $('.nav__toggle').on("click",function(){
            $('.nav__menu').addClass('show-menu');
        })
/*===== MENU HIDDEN =====*/
        $('.nav__close').on("click",function(){
            $('.nav__menu').removeClass('show-menu');
        })
/*==================== REMOVE MENU MOBILE ====================*/
        $('.nav__link').on("click",function(){
            $('.nav__menu').removeClass('show-menu');
        })
        
/*==================== ACCORDION SKILLS ====================*/
        let  Scontent=$('.skill__content');
        let SHeader=document.querySelectorAll('.skill__header');
        function toogleSkills(itemName) {
            let itemNameClass=itemName.parentNode.className;
            for(i=0; i<Scontent.length; i++){
                Scontent[i].className=('skill__content skill__close');
            }
            if(itemNameClass=== 'skill__content skill__close'){
                   itemName.parentNode.className=('skill__content skill__open');
            }
        }
       SHeader.forEach(element => {
           element.addEventListener('click', ()=> toogleSkills(element));
        });
        console.log(SHeader[0].parentNode.className)
        /*==================== QUALIFICATION TABS ====================*/
    
        
        /*==================== SERVICES MODAL ====================*/
        
        
        /*==================== PORTFOLIO SWIPER  ====================*/
        
        
        /*==================== TESTIMONIAL ====================*/
        
        
        /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
        
        
        /*==================== CHANGE BACKGROUND HEADER ====================*/ 
        
        
        /*==================== SHOW SCROLL UP ====================*/ 
        
        
        /*==================== DARK LIGHT THEME ====================*/ 
    }
        );