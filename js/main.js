$(document).ready(function () {


    $( "#search__image" ).click(function(){ 
      $(this).hide(0,00001);
      $('.header__phones, .header__adress, .header__social').hide(200);
	    $( "#search__block" ).show( 300, "linear");
      
    });


    var bgimage = $('#search-image');
      console.log(bgimage);

    $(bgimage).click(function () { 
      $( "#search__image" ).show(600);
      $('.header__phones, .header__adress, .header__social').show(200);
      $( "#search__block" ).hide( 300, "linear");
    });
    
    //Работа с поисковиком Input Text
   
    //Бугрер

    $('.menu__btn').on('click', function () { 
      $(this).toggleClass('menu__btn--active')
      
    });

    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

  

  $('.burger').on('click', function () {
      $('.mobile').toggleClass('mobile-active')
    })
  

  $('.general').on('click', function () {
    console.log('click general');
    $(this).parent().find('.general__list').toggleClass('general__list--active')
    $(this).parent().children('.arrowed').toggleClass('arrowed--active');
    $(this).parent().find('.general--up').css('margin-left', 15);
    
  })

  $('.general--up').on('click', function () {
    $(this).parent().find('.general__link').toggleClass('general__link--active');
    $(this).parent().find('.general__link--active').css('margin-left', 25);
    $(this).parent().find('.general__link--active').css('margin-bottom',10);
    $(this).parent().find('.general--on').toggleClass('general--on-active');
    $(this).parent().find('.general--on').css('margin-left', 30);
    $(this).parent().find('.arrowed').toggleClass('arrowed--active'); //OK
  })

  $('.general--on').on('click', function () {
    $(this).parent().find('.general__link--two').toggleClass('general__link--two--active');
    $(this).parent().find('.general__link--two--active').css('margin-left', 40);
    $(this).parent().find('.general__link--two--active').css('margin-bottom',10);
    $(this).parent().find('.general--off').toggleClass('general--on-active');
    $(this).parent().find('.general--off').css('margin-left', 40);
    $(this).parent().find('.arrowed').toggleClass('arrowed--active'); //OK

  })

  $('.general--off').on('click', function () {
    $(this).parent().find('.general__link--three').toggleClass('general__link--two--active');
    $(this).parent().find('.general__link--two--active').css('margin-left', 50);
    $(this).parent().find('.general__link--two--active').css('margin-bottom',10);
    $(this).parent().find('.arrowed').toggleClass('arrowed--active'); //OK

  })
  $('#exampleFormControlSelect1').on('click', function () { 
    
    $('.form__ico').toggleClass('form__ico--active')
  });

  $('#MAN').addClass('tabcontent--active');
    $('.tablinks').first().css('border-bottom', '2px solid #C01818')
    $('.tablinks').first().css('color', '#C01818')

  $('.leaseback__block').on('click', function (e) { 
    var big = $(this).find('.leaseback__subtitle').toggleClass('leaseback__subtitle--active')
    $(this).find('.leaseback__icon').toggleClass('leaseback__icon--active')

    if (big.hasClass('leaseback__subtitle--active')) {
      $('.leaseback__title--text').css('color', '#C01818')
    }
    else {
      $('.leaseback__title--text').css('color', '#333333')
    }

  });

  $('.leaseback__little').on('click', function (e) { 
    var little = $(this).find('.leaseback__subtitle').toggleClass('leaseback__subtitle--active')
    $(this).find('.leaseback__icon').toggleClass('leaseback__icon--active')
    

    if (little.hasClass('leaseback__subtitle--active')) {
      $('.leaseback__title--little').css('color', '#C01818')
    }
    else {
      $('.leaseback__title--little').css('color', '#333333')
    }
  });

  $('.gallery__card').click(function () { 
    cardDialog(this);
  });






//pagination

  //pagination

});



function showDialog(text) {
  $('#content').html(text);
  $('#exampleModal').modal('show');
}


function cardDialog(gallery__card) {

  let galleryImage = $(gallery__card).find('.gallery__none').attr('src');
  let galleryTitle = $(gallery__card).find('.gallery__card--text').text();

  let modalCard = 
  `
  <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
    <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-12">
      <div class="popcard__title carousel-title-mob">
          <h2 class="popcard__title--text">${galleryTitle}</h2>
        </div>
      <img src="${galleryImage}" alt="" class="gallery__none--active">
    </div>
    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
      <div class="popcard popcard__info">
        <div class="popcard__title carousel-title">
          <h2 class="popcard__title--text">${galleryTitle}</h2>
        </div>
        <div class="popcard__subtitle">
          <span class="popcard__subtitle--text">У вас имеется автомобиль или спецтехника. Вы продаёте это имущество лизинговой компании и тут же арендуете его у нас с последующим выкупом. Важно: вы продолжаете пользоваться своим имуществом. Значит, бизнес не останавливается, при этом у вас появляется главное – это несвязанные денежные средства, которые вы сможете пустить на расширение бизнеса, выплаты по кредитам или налогам, уплату долгов поставщикам или арендодателям и прочие нужды. Погашение стоимости начнётся только через 4,6 или 8 месяцев, а уплата только лизинговой ставки позволит легче пережить наиболее трудные для бизнеса месяцы.</span>
        </div>
        <div class="popcard__btn">
          <button class="managers__btn">Оставить заявку</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="carousel-item" data-interval="2000">
    <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-12">
      <img src="${galleryImage}" alt="" class="popcard popcard__image">
    </div>
    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
      <div class="popcard popcard__info">
        <div class="popcard__title">
          <h2 class="popcard__title--text">${galleryTitle}</h2>
        </div>
        <div class="popcard__subtitle">
          <span class="popcard__subtitle--text">У вас имеется автомобиль или спецтехника. Вы продаёте это имущество лизинговой компании и тут же арендуете его у нас с последующим выкупом. Важно: вы продолжаете пользоваться своим имуществом. Значит, бизнес не останавливается, при этом у вас появляется главное – это несвязанные денежные средства, которые вы сможете пустить на расширение бизнеса, выплаты по кредитам или налогам, уплату долгов поставщикам или арендодателям и прочие нужды. Погашение стоимости начнётся только через 4,6 или 8 месяцев, а уплата только лизинговой ставки позволит легче пережить наиболее трудные для бизнеса месяцы.</span>
        </div>
        <div class="popcard__btn">
          <button class="managers__btn">Оставить заявку</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="carousel-item">
    <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-12">
      <img src="${galleryImage}" alt="" class="popcard popcard__image">
    </div>
    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
      <div class="popcard popcard__info">
        <div class="popcard__title">
          <h2 class="popcard__title--text">${galleryTitle}</h2>
        </div>
        <div class="popcard__subtitle">
          <span class="popcard__subtitle--text">У вас имеется автомобиль или спецтехника. Вы продаёте это имущество лизинговой компании и тут же арендуете его у нас с последующим выкупом. Важно: вы продолжаете пользоваться своим имуществом. Значит, бизнес не останавливается, при этом у вас появляется главное – это несвязанные денежные средства, которые вы сможете пустить на расширение бизнеса, выплаты по кредитам или налогам, уплату долгов поставщикам или арендодателям и прочие нужды. Погашение стоимости начнётся только через 4,6 или 8 месяцев, а уплата только лизинговой ставки позволит легче пережить наиболее трудные для бизнеса месяцы.</span>
        </div>
        <div class="popcard__btn">
          <button class="managers__btn">Оставить заявку</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

  `
  showDialog(modalCard);
}


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      tablinks[i].style = "";
  }
  
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCityMob(evtMob, cityNameMob) {
  var i, tabcontent, mobtablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      
  }
  mobtablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < mobtablinks.length; i++) {
    mobtablinks[i].className = mobtablinks[i].className.replace(" active", "");
    mobtablinks[i].style = "";
  }
  
  document.getElementById(cityNameMob).style.display = "block";
  evtMob.currentTarget.className += " active";
}



// $(document).mouseup(function(e) {
  //       var container_header = $(".header__mobile"); 
  //       var container = $("window__mobile--active"); 
  
  //       // if the target of the click isn't the container nor a descendant of the container
  //       if (!container.is(e.target) && container.has(e.target).length === 0 && 
  //           !container_header.is(e.target) && container_header.has(e.target).length === 0
  //       ) 
  //       {
  //           $(".window__mobile").removeClass("window__mobile--active");
  //           $(".menu__btn").removeClass("menu__btn--active")
  //       }



 



//   // const modal = $('.window__mobile');
//   // $(document).keyup(function (e) { 
//   //   let key = e.keyCode;
//   //     if(key == 27) {
//   //       modal.toggleClass('window__mobile--active');
//   //       $(".menu__btn").removeClass("menu__btn--active")
//   // }
  
//   // });


//   var scrollBtn = $('.scroll-image');
//     $(window).on('scroll', (function () {
      
//       if ($(this).scrollTop () > 400) {
//         scrollBtn.fadeIn();
//       } else {
//         scrollBtn.fadeOut();
        
//       }
      
//     }));


//     scrollBtn.on('click', function(){
//     $('body, html').animate({
//     scrollTop: 0
//     }, 800);
//     return false
    
//     });