//메인 상단
$(".main .header_wrap").addClass("write");
document.addEventListener("scroll", function () {
  var y = window.pageYOffset;
  if (y > 70) {
    $(".main .header_wrap").removeClass("write");
  } else {
    $(".main .header_wrap").addClass("write");
  }
});

var mainSwiper01 = new Swiper(".mainSwiper01", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var pagingSwiper = new Swiper(".mainSwiper01", {
  pagination: {
    el: ".pagination_progress",
    type: "progressbar",
  },
});

mainSwiper01.controller.control = pagingSwiper;

var solutionImgSwiper = new Swiper(".solutionImgSwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});

var solutionTextSwiper = new Swiper(".solutionTextSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    992: {
      slidesPerView: 2, //브라우저가 992보다 클 때
      grid: {
        rows: 2,
      },
    },
  },
});

solutionTextSwiper.controller.control = solutionImgSwiper;
solutionImgSwiper.controller.control = solutionTextSwiper;

$(function () {
  $("#header").append(createHeader());
  $("#footer").append(createFooter());
  $("#offcanvasMenulist").append(offCanvasMenuList());
  $("#inquiryModal").append(inquiryModal());
  $("#quick").append(quick());

  $("#quick li:nth-child(2) a").click(function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
  });
});

function createHeader() {
  return `<header class="header">
  <div class="header_logo" onclick="location.href='main.html';"></div>
  <ul class="header_menu">
      <li>
          <a href="login.html">로그인</a>
      </li>
      <li>
          <a href="join_01.html">회원가입</a>
      </li>
      <li class="menu_list" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenulist"
          aria-controls="offcanvasMenulist"></li>
  </ul>
  <ul class="navbar">
      <li>
          <a href="main.html">HOME</a>
      </li>
      <li>
          <div class="dropdown">
              <button class="dropdown-toggle" type="button" id="navbardropdownMenu1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  PRODUCTS<i class="i_arrow_down"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="navbardropdownMenu1">
                  <li><a class="dropdown-item" href="products_ad.html">AI IMAGE SEARCH AD</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);" onclick="alert('준비중입니다.'); return false">AI IN STORE SOLUTION</a></li>
              </ul>
          </div>
      </li>
      <li>
          <a href="pricing.html">PRICING</a>
      </li>
      <li>
          <a href="javasciprt:void(0);" data-bs-toggle="modal" data-bs-target="#inquiryModal">CONTACT</a>
      </li>
      <li>
          <div class="dropdown">
              <button class="dropdown-toggle" type="button" id="navbardropdownMenu2"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  COMPANY
              </button>
              <ul class="dropdown-menu" aria-labelledby="navbardropdownMenu2">
                  <li><a class="dropdown-item" href="javascript:void(0);" onclick="alert('준비중입니다.'); return false">AI IMAGE SEARCH AD</a></li>
              </ul>
          </div>
      </li>
  </ul>
  <div class="header_btn">
      <button type="button" onclick="location.href='login.html';">로그인</button>
      <button type="button" onclick="location.href='join_01.html';">회원가입</button>
  </div>
</header>
  `;
}

function createFooter() {
  return `<footer class="footer">
  <div class="footer_top">
      <div class="footer_logo">
          <img src="img/logo_w.png" alt="PICLICK">
      </div>
      <ul class="footer_menu">
          <li>
              <a href="main.html">HOME</a>
          </li>
          <li>
              <a href="products_ad.html">PRODUCTS</a>
          </li>
          <li>
              <a href="pricing.html">PRICING</a>
          </li>
          <li>
              <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#inquiryModal">CONTACT</a>
          </li>
          <li>
              <a href="javascript:void(0);" onclick="alert('준비중입니다.'); return false">COMPANY</a>
          </li>
      </ul>
      <ul class="footer_terms">
          <li>
              <a href="javascript:void(0);" onclick="alert('준비중입니다.'); return false">개인정보처리방침</a>
          </li>
          <li>
              <a href="javascript:void(0);" onclick="alert('준비중입니다.'); return false">이용약관</a>
          </li>
      </ul>
  </div>
  <div class="footer_bottom">
      <div class="footer_info">
          <h1>피에스알미디어</h1>
          <ul>
              <li>서울특별시 강남구 선릉로 578 태정빌딩 6층</li>
              <li>대표: 박세련</li>
              <li>사업자 등록 번호 : 264-81-19591</li>
              <li>통신판매업신고번호 : 서울강남 01172호</li>
          </ul>

          <p class="footer_copy m_none">Copyright © 2023 PSR Media Inc. All Rights Reserved</p>
      </div>
      <div class="footer_info">
          <h1>CONTACTS</h1>
          <ul>
              <li>대표전화 : 82-2-6925-2108</li>
              <li>사업제휴문의 : global@piclick.me</li>
          </ul>
          <div class="btn_group">
              <button type="button" onclick="alert('준비중입니다.'); return false">Company Introduction</button>
              <button type="button" onclick="alert('준비중입니다.'); return false">Careers</button>
          </div>
      </div>
      <p class="footer_copy pc_none">Copyright © 2023 PSR Media Inc. All Rights Reserved</p>
  </div>
</footer>
  `;
}

function offCanvasMenuList() {
  return `<div class="offcanvas-header">
  <i class="i_close" data-bs-dismiss="offcanvas" aria-label="Close"></i>
</div>
<div class="offcanvas-body">
  <ul>
      <li>
          <a href="main.html">HOME</a>
      </li>
      <li>
          <a href="products_ad.html">PRODUCTS</a>
      </li>
      <li>
          <a href="pricing.html">PRICING</a>
      </li>
      <li>
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#inquiryModal">CONTACT</a>
      </li>
      <li>
          <a href="javascript:void(0);" onclick="alert('준비중입니다.'); return false">COMPANY</a>
      </li>
      <div class="hr">
          <li>
              <a href="login.html">로그인</a>
          </li>
          <li>
              <a href="join_01.html">회원가입</a>
          </li>
  </ul>
</div>
  `;
}

function inquiryModal() {
  return `
  <div class="modal-dialog modal-dialog-centered inquiry">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">문의하기</h5>
                    <button type="button" data-bs-dismiss="modal" aria-label="Close">
                        <i class="i_close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="input_wrap">
                        <h6>회사명</h6>
                        <div class="input_group">
                            <input type="text" placeholder="회사명을 입력해주세요" />
                        </div>
                    </div>
                    <div class="input_wrap">
                        <h6>담당자 이름</h6>
                        <div class="input_group">
                            <input type="text" placeholder="담당자 이름을 입력해주세요" />
                        </div>
                    </div>
                    <div class="input_wrap">
                        <h6>연락처</h6>
                        <div class="input_group">
                            <input type="text" placeholder="연락처를 입력해주세요" />
                        </div>
                    </div>
                    <div class="input_wrap">
                        <h6>이메일</h6>
                        <div class="input_group">
                            <input type="text" placeholder="이메일을 입력해주세요" />
                        </div>
                    </div>
                    <div class="input_wrap w_100">
                        <h6>업체 유형을 선택해주세요</h6>
                        <div class="check_wrap">
                            <div class="check_group">
                                <input type="radio" id="check01" name="ridao01">
                                <label for="check01">매체</label>
                            </div>
                            <div class="check_group">
                                <input type="radio" id="check02" name="ridao01">
                                <label for="check02">매체 대행사</label>
                            </div>
                            <div class="check_group">
                                <input type="radio" id="check03" name="ridao01">
                                <label for="check03">광고주</label>
                            </div>
                            <div class="check_group">
                                <input type="radio" id="check04" name="ridao01">
                                <label for="check04">광고주 대행사</label>
                            </div>
                        </div>
                    </div>
                    <div class="input_wrap w_100">
                        <h6>관심있는 상품을 선택해주세요</h6>
                        <div class="check_wrap">
                            <div class="radio_group">
                                <input type="checkbox" id="check05" name="check01">
                                <label for="check05">AI 광고</label>
                            </div>
                            <div class="radio_group" id="solutionAll">
                                <input type="checkbox" id="check06" name="check01">
                                <label for="check06">AI 인스토어 솔루션</label>
                            </div>
                            <div class="radio_group" name="solutionMenu">
                                <input type="checkbox" id="check07" name="check02">
                                <label for="check07">유사상품 추천 솔루션</label>
                            </div>
                            <div class="radio_group" name="solutionMenu">
                                <input type="checkbox" id="check08" name="check02">
                                <label for="check08">반품 교환 추천 솔루션</label>
                            </div>
                            <div class="radio_group" name="solutionMenu">
                                <input type="checkbox" id="check09" name="check02">
                                <label for="check09">품절 대체 추천 솔루션</label>
                            </div>
                            <div class="radio_group" name="solutionMenu">
                                <input type="checkbox" id="check10" name="check02">
                                <label for="check10">코디 자동화 솔루션</label>
                            </div>
                        </div>
                    </div>
                    <div class="input_wrap mb-3 w_100">
                        <textarea name="" id="" maxlength="500" placeholder="내용을 입력해주세요"></textarea>
                        <div class="text_length">
                            <span>0</span>
                            <span>/</span>
                            <span>500</span>
                        </div>
                    </div>
                    <div class="input_box">
                        <div class="check_group">
                            <input type="checkbox" id="check11">
                            <label for="check11">위 개인정보를 (주)피에스알미디어에 제출하고 서비스 이용에 활용하는데 동의합니다. 수집된 개인정보는 동의한 내용 외의 다른 목적으로 활용하지 않으며,
                                제공된 개인정보의 이용을 거부하고자 할 때는 정정 혹은 삭제를 요구 할 수 있습니다.</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn_primary">문의등록</button>
                </div>
            </div>
        </div>
        `;
}

function quick() {
  return `
  <ul>
      <li>
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#inquiryModal">
              <img src="img/quick_01.png" alt="">
          </a>
      </li>
      <li>
          <a href="javascript:void(0);">
              <img src="img/quick_02.png" alt="">
          </a>
      </li>
  </ul>
  `;
}


$(function () {
  var solutionMenu = $("div[name=solutionMenu]");
  solutionMenu.hide();

  $("#solutionAll input").click(function () {
    var chk = $(this).is(":checked");
    if (chk) {
      solutionMenu.show();
    } else {
      solutionMenu.hide();
    }
  });
});