// Tab Menu
// function openTab(evt, tabName) {
//   var i, tabcontent, tablinks; tabcontent = document.getElementsByClassName("tabcontent");// 컨텐츠를 불러옵니다.
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none"; //컨텐츠를 모두 숨깁니다.
//   }
//   tablinks = document.getElementsByClassName("tab-btn"); //탭을 불러옵니다.
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", ""); //탭을 초기화시킵니다.
//   }
//   document.getElementById(tabName).style.display = "block"; //해당되는 컨텐츠만 보여줍니다.
//   evt.currentTarget.className += " active"; //클릭한 탭을 활성화시킵니다.
// }


// 상단 고정
// document.addEventListener('scroll', function() {
//   var y = window.pageYOffset;
//   if (y > 70) {
//     console.log(y)
//     $(".header").addClass("fixed")
//   } else {
//     $(".header").removeClass("fixed")
//   }
// });

// 상단 고정
// document.addEventListener('scroll', function() {
//   var y = window.pageYOffset;
//   if (y > 70) {
//     console.log(y)
//     $(".menu-list").addClass("fixed-2")
//   } else {
//     $(".menu-list").removeClass("fixed-2")
//   }
// });


// 위로가기
// var moveToTopSmooth = function() {
//   document.body.scrollIntoView({ behavior: 'smooth' });
// };
  