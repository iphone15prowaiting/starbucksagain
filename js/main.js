

const badgeEl = document.querySelector('header .badges');
const toTopEl= document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기'
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl,.2,{
      x: 0
    });

  }
  else {
    //배지보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼숨기기
    gsap.to(toTopEl,.2,{
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 밀리세컨즈)

toTopEl.addEventListener('click',function(){
  gsap.to(window, .7,{
    scrollTo:0
    // 화면(스크롤)을 0지점으로 옮겨주겠다. 스크롤투를 쓰기위해 cdn으로 scrollto플러그인이라는 gsap에서 쓸수있는 플러그인을 추가적으로 가져와서 연결한것

  });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});
// new Swier(선택자,옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clikable: true //사용자의 페이지 번호 요소 제어 여부

  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container',{
  autoplay:true,
  loop: true,
  spaceBetween:30,
  slidesPerView: 5,
  navigation:{
    preEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
  } else {
    //보임처리
    promotionEl.classList.remove('hide');

  }
});
// 프로모션토클 버튼을 클릭하면 어떤 함수가 실행됨

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션)
  gsap.to(selector,
    random(1.5, 2.5),//애니메이션 동작시간
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,//
    triggerHook: .8
    })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

