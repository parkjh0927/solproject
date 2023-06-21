<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


<!-- SEO -->
<link rel="canonical"
	href="https://korean.visitkorea.or.kr:443/kfes/list/wntyFstvlList.do">
<meta name="Title" content="전국축제 | 대한민국 구석구석 축제">
<!-- 변동 -->
<meta name="keywords"
	content="국내축제,국내여행,대한민국축제,대한민국구석구석,대한민국구석구석축제.축제,전국축제,지역축제">
<!-- 변동 -->
<meta name="description"
	content="전국 방방곡곡에서 열리는 축제 정보를 소개합니다. 전국의 다채로운 축제와 함께 행복하고 즐거운 여행 되세요!">
<!-- 변동 -->
<meta property="og:locale" content="ko_KR">
<meta property="og:type" content="website">
<meta property="og:title" content="전국축제 | 대한민국 구석구석 축제">
<!-- 변동 -->
<meta property="og:description"
	content="전국 방방곡곡에서 열리는 축제 정보를 소개합니다. 전국의 다채로운 축제와 함께 행복하고 즐거운 여행 되세요!">
<!-- 변동 -->
<meta property="og:url"
	content="https://korean.visitkorea.or.kr:443/kfes/list/wntyFstvlList.do">
<!-- 변동 -->
<meta property="og:site_name" content="전국축제 – 대한민국 구석구석 축제">
<!-- 변동 -->
<meta property="og:image" content="../resources/img/og_img.png">
<!-- 변동 -->
<!-- SEO -->

<meta name="format-detection" content="telephone=no">
<title>전국축제 | 대한민국 구석구석 축제</title>
<link rel="shortcut icon" href="../resources/img/og_logo.png">
<link rel="stylesheet" href="../resources/css/reset.css">
<link rel="stylesheet" href="../resources/css/fecommon.css">
<link rel="stylesheet"
	href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
<link rel='stylesheet'
	href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.8/slick.min.css'>
<link rel='stylesheet'
	href='https://unpkg.com/video.js/dist/video-js.min.css'>
<script src="../resources/js/jquery-3.3.1.min.js"></script>
<script src="../resources/js/greensock/gsap.min.js"></script>
<script
	src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.8/slick.min.js'></script>
<script src="../resources/js/lottie-player.js"></script>
<script src="../resources/js/common.js"></script>
<script src="../resources/js/lib/comm.js"></script>
</head>
<body>
	<!-- header -->
	<header class="header_black" role="banner">
		<div class="inner">



			<a class="homepage_link" href="javascript:history.go(-1);">메인 홈으로 <span class="block_pd">
			</span> 바로가기
			</a>


			<nav role="navigation">
				<ul class="sub_menu search2">
					<li class="lst">
						<button class="main_search" aria-label="검색"></button>










						<div class="search_box">
							<form name="totalSearchForm"
								action="/kfes/list/totalSearchList.do" method="post"
								onsubmit="return false">
								<div class="search_detail_area">
									<div class="selectBox2 size2">
										<div class="label searchTypeLabel">축제</div>
										<ul class="optionList">
											<li class="optionItem"><div class="searchType"
													name="ALL">전체</div></li>
											<li class="optionItem"><div class="searchType" name="A">축제</div></li>
											<li class="optionItem"><div class="searchType" name="B">여행정보</div></li>
										</ul>
									</div>
									<fieldset>
										<label class="blind2" for="totalSearchText">검색</label> <input
											id="totalSearchText" name="totalSearchText"
											class="search_line" title="검색" value=""
											placeholder="검색어를 입력해주세요." maxlength="40">
										<button aria-label="검색 버튼" onclick="fn_totalSearch();"></button>
									</fieldset>
								</div>











								<ul>

									<li><a href="/kfes/list/wntyFstvlList.do?tagNm=공연">#공연</a></li>

									<li><a href="/kfes/list/wntyFstvlList.do?tagNm=문화관광">#문화관광</a></li>

									<li><a href="/kfes/list/wntyFstvlList.do?tagNm=자연">#자연</a></li>

									<li><a href="/kfes/list/wntyFstvlList.do?tagNm=환경">#환경</a></li>

									<li><a href="/kfes/list/wntyFstvlList.do?tagNm=꽃">#꽃</a></li>

									<li><a href="/kfes/list/wntyFstvlList.do?tagNm=가족과함께">#가족과함께</a></li>

								</ul>
							</form>
							<button class="search_box_close" aria-label="닫기 버튼"></button>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<!--// header -->

	<!-- main -->
	<main role="main">
		<div class="wrap">
			<!-- 검색 -->
			<section class="search_slide_wrap" role="region">
				<div class="inner">
					<p class="blind">전국축제</p>
					<ul class="tab_area">
						<li class="active"><h1>전국행사</h1></li>
						<!-- 활성시 class="active" -->
					</ul>
					<div class="blind">검색영역</div>
					<form name="festivalSearch" id="festivalSearch"
						class="festival_search" onsubmit="return false;">
						<fieldset>
							<legend class="blind">축제 검색</legend>
							<div class="search_box_wrap">
								<div class="select_box select_date">
									<label for="searchDate">시기 선택</label> <select name="searchDate"
										id="searchDate" title="시기 선택">
										<option value="">시기</option>
										<option value="A">개최중</option>
										<option value="B">개최예정</option>
										<option value="01">01월</option>
										<option value="02">02월</option>
										<option value="03">03월</option>
										<option value="04">04월</option>
										<option value="05">05월</option>
										<option value="06">06월</option>
										<option value="07">07월</option>
										<option value="08">08월</option>
										<option value="09">09월</option>
										<option value="10">10월</option>
										<option value="11">11월</option>
										<option value="12">12월</option>
									</select>
								</div>
								<div class="select_box select_area">
									<label for="searchArea">지역 선택</label> <select name="searchArea"
										id="searchArea" title="지역 선택">
										<option value="">지역</option>

										<option value="1">서울</option>

										<option value="2">인천</option>

										<option value="3">대전</option>

										<option value="4">대구</option>

										<option value="5">광주</option>

										<option value="6">부산</option>

										<option value="7">울산</option>

										<option value="8">세종시</option>

										<option value="31">경기도</option>

										<option value="32">강원도</option>

										<option value="33">충청북도</option>

										<option value="34">충청남도</option>

										<option value="35">경상북도</option>

										<option value="36">경상남도</option>

										<option value="37">전라북도</option>

										<option value="38">전라남도</option>

										<option value="39">제주도</option>

									</select>
								</div>
								<div class="select_box select_cate"
									style="background-image: url(../resources/img/cate_ico.svg)";>
									<label for="searchCate">카테고리 선택</label> <select
										name="searchCate" id="searchCate" title="카테고리 선택">
										<option value=>카테고리</option>

										<option value="공연"
											tagUrl="https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/02/02/54978b43-9a87-4eee-bf1b-26a9e7232de8.png">공연</option>

										<option value="문화관광"
											tagUrl="https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/02/02/cabb0053-4d18-405e-b1ac-c0628cb0e28b.png">문화관광</option>

										<option value="자연"
											tagUrl="https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/02/02/738020ae-b5c8-4bbb-becc-b2c86bafd5a2.png">자연</option>

										<option value="환경"
											tagUrl="https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/02/02/e5889481-fa7a-4736-98f5-6bba2189a715.png">환경</option>

										<option value="꽃"
											tagUrl="https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/02/02/738020ae-b5c8-4bbb-becc-b2c86bafd5a2.png">꽃</option>

										<option value="가족과함께"
											tagUrl="https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/02/02/cabb0053-4d18-405e-b1ac-c0628cb0e28b.png">가족과함께</option>

									</select>
								</div>
								<div class="btn_box">
									<button class="btn_search" id="btnSearch"
										onclick="javascript:void(0);">
										<span>검색</span>
									</button>
								</div>
							</div>
						</fieldset>
					</form>
				</div>
			</section>
			<!--// 검색 -->

			<!-- 비주얼 배너 -->
			<section class="visual_wrap" role="region">
				<div class="inner">
					<div class="blind">페스티벌 미리보기</div>
					<div class="pc_wrap">
						<ul>

							<li class="visual visual1 active">
								<!-- class="active" 추가시 활성 --> <a
								href="/kfes/detail/fstvlDetail.do?fstvlCntntsId=ffee2588-2551-4b83-a5ea-2a1d3a5b5aeb"
								style="background-image: url('https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/06/12/da1eaf74-7514-4207-a365-12b59746a5e5.jpg');"
								title="이월드 트로피컬 아쿠아 빌리지">
									<div class="txt_area">
										<div class="tit_box">

											<span class="flag">개최중</span> <strong>이월드 트로피컬 아쿠아
												빌리지</strong>
										</div>
										<div class="tit_desc">
											<span>2023.06.10 ~ 2023.08.27</span> <span class="area_name">대구
												달서구</span> <span class="btn_more"></span>
										</div>
									</div>
							</a>
							</li>


							<li class="visual visual2 active">
								<!-- class="active" 추가시 활성 --> <a
								href="/kfes/detail/fstvlDetail.do?fstvlCntntsId=a8fcf987-666e-404e-9446-0a7f787e83fb"
								style="background-image: url('https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/06/12/1177bc95-13a8-4533-86e2-e9a077065210.jpg');"
								title="서울랜드 불빛축제 루나파크">
									<div class="txt_area">
										<div class="tit_box">

											<span class="flag">개최중</span> <strong>서울랜드 불빛축제 루나파크</strong>
										</div>
										<div class="tit_desc">
											<span>2023.01.01 ~ 2023.12.31</span> <span class="area_name">경기도
												과천시</span> <span class="btn_more"></span>
										</div>
									</div>
							</a>
							</li>


							<li class="visual visual3 active">
								<!-- class="active" 추가시 활성 --> <a href="#"
								style="background-image: url('https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/06/12/c420cd6f-f9ed-4cdc-b235-47443aece351.jpg');"
								title="강릉단오제  ">
									<div class="txt_area">
										<div class="tit_box">

											<strong>강릉단오제 </strong>
										</div>
										<div class="tit_desc">
											<span>2023.06.18 ~ 2023.06.25</span> <span class="area_name">강원도
												강릉시</span> <span class="btn_more"></span>
										</div>
									</div>
							</a>
							</li>

						</ul>
					</div>
					<div class="mobile_wrap">
						<!-- swiper -->
						<div class="swiper-container mobile">
							<div class="swiper-wrapper">

								<div class="swiper-slide visual1">
									<a
										href="/kfes/detail/fstvlDetail.do?fstvlCntntsId=ffee2588-2551-4b83-a5ea-2a1d3a5b5aeb"
										style="background: url(https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/06/12/da1eaf74-7514-4207-a365-12b59746a5e5.jpg) no-repeat 27% 50%/cover;">
										<div class="txt_area">
											<div class="tit_box">

												<span class="flag">개최중</span> <strong>이월드 트로피컬 아쿠아
													빌리지</strong>
											</div>
											<div class="tit_desc">
												<span>2023.06.10 ~ 2023.08.27</span> <span class="area_name">대구
													달서구</span>
											</div>
										</div>
									</a>
								</div>


								<div class="swiper-slide visual2">
									<a
										href="/kfes/detail/fstvlDetail.do?fstvlCntntsId=a8fcf987-666e-404e-9446-0a7f787e83fb"
										style="background: url(https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/06/12/1177bc95-13a8-4533-86e2-e9a077065210.jpg) no-repeat 27% 50%/cover;">
										<div class="txt_area">
											<div class="tit_box">

												<span class="flag">개최중</span> <strong>서울랜드 불빛축제
													루나파크</strong>
											</div>
											<div class="tit_desc">
												<span>2023.01.01 ~ 2023.12.31</span> <span class="area_name">경기도
													과천시</span>
											</div>
										</div>
									</a>
								</div>


								<div class="swiper-slide visual3">
									<a
										href="/kfes/detail/fstvlDetail.do?fstvlCntntsId=c30076fe-18c2-40a8-8a0c-66f05e349cb1"
										style="background: url(https://korean.visitkorea.or.kr/kfes/upload/nationwide/2023/06/12/c420cd6f-f9ed-4cdc-b235-47443aece351.jpg) no-repeat 27% 50%/cover;">
										<div class="txt_area">
											<div class="tit_box">

												<strong>강릉단오제 </strong>
											</div>
											<div class="tit_desc">
												<span>2023.06.18 ~ 2023.06.25</span> <span class="area_name">강원도
													강릉시</span>
											</div>
										</div>
									</a>
								</div>

							</div>
							<div class="swiper-pagination"></div>
						</div>

						<!--// swiper -->
					</div>
				</div>
			</section>
			<!--// 비주얼 배너 -->

			<!-- 축제 리스트 -->
			<button id="test1">시험용</button>
			<section class="other_list type2" role="region">
				<div class="inner">
					<div class="other_festival" role="application">
						<div class="blind">페스티벌 검색 리스트</div>

						<!-- 검색 결과 없음 -->
						<div class="no_list" style="display: none;" id="divNoData">
							<div class="no_img"></div>
							<strong>검색결과가 없습니다</strong>
							<p>찾으시는 축제를 다시 검색해 주세요</p>
						</div>
						<!-- //검색 결과 없음 -->

						<div class="festival_ul_top" id="festival_ul_top"
							style="display: none;">
							<ul class="tab_area">
								<li id="tabFstvlList" class="active"><button>축제일순</button></li>
								<!-- class="active" 추가시 활성 -->
								<li id="tabFstvlLikeOrderList"><button>인기순</button></li>
							</ul>
						</div>
						<div class="tab_cont_area">
							<!-- 축제일순 -->
							<div class="tab_cont active" aria-expanded="true"
								role="application">
								<!-- class="active" 추가시 활성 -->
								<p class="blind">축제일순 리스트</p>
								<ul class="other_festival_ul" id="fstvlList"></ul>
							</div>
							<!--// 축제일순 -->
							<!-- 인기순 -->
							<div class="tab_cont" aria-expanded="false" role="application">
								<p class="blind">인기순 리스트</p>
								<ul class="other_festival_ul" id="fstvlLikeOrderList"></ul>
							</div>
							<!--// 인기순 -->

							<!-- 더보기 button -->
							<button class="list_more_btn" style="display: none;" id="btnMore"
								onclick="javascript:;">더보기 (0/0)</button>
							<!-- //더보기 button -->
						</div>

					</div>
				</div>
			</section>
			<!--// 축제 리스트 -->

			<div class="loading">
				<div class="loading_start" aria-live="assertive" role="alert">
					<div class="blind">please wait while we gather your
						information, Loading...</div>
					<img src="../resources/img/loading.svg" alt="로딩 이미지">
				</div>
			</div>
		</div>

	</main>
	<!--// main -->

	<!-- footer -->
	<footer role="contentinfo" id="footer">
		<div class="footer_inner">
			<div class="top_util">
				<ul class="top_util_ul">










					<li><a href="https://korean.visitkorea.or.kr/term/term03.do"
						target="_blank" title="개인정보처리방침">개인정보처리방침</a></li>
					<li><a href="https://korean.visitkorea.or.kr/term/term02.do"
						target="_blank" title="이용약관">이용약관</a></li>
					<li><a href="https://knto.or.kr/helpdeskCopyrightguide"
						target="_blank" title="저작권정책">저작권정책</a></li>
					<li><a href="https://knto.or.kr/charter" target="_blank"
						title="고객서비스현장">고객서비스헌장</a></li>
					<li><a href="https://knto.or.kr/helpdeskPolicyEmailrejection"
						target="_blank" title="전자우편무단수집거부">전자우편무단수집거부</a></li>
					<li><a href="https://knto.or.kr/mapHead" target="_blank"
						title="찾아오시는 길">찾아오시는 길</a></li>
				</ul>
				<address>
					<ul>










						<li>우)26464 강원도 원주시 세계로 10</li>
						<li>TEL : <a href="tel:033-738-3000">033-738-3000</a></li>
						<li>사업자등록번호 : 202-81-50707</li>
						<li>통신판매업신고 : 제2009-서울중구-1234호</li>
					</ul>
				</address>
			</div>
			<div class="footer_bottom">
				<span class="copyright">&copy; 한국관광공사</span>
				<ul class="family_f_logo">










					<li><a href="https://conlab.visitkorea.or.kr" target="_blank"
						title="한국관광콘텐츠랩"><img src="../resources/img/conlab_logo.png"
							alt="한국관광콘텐츠랩"></a></li>
					<li><a href="https://kto.visitkorea.or.kr" target="_blank"
						title="한국관광공사"><img
							src="../resources/img/korea_tourism_logo.png" alt="한국관광공사"></a></li>
					<li><a href="https://www.mcst.go.kr" target="_blank"
						title="문화체육관광부"><img
							src="../resources/img/korea_culture_logo.png" alt="문화체육관광부"></a></li>
				</ul>
			</div>
		</div>
	</footer>
	<!--// footer -->
</body>
</html>


	<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
	<script src="../resources/js/test1.js"></script>
    <script>
        var visualSwiper;
        // 검색 swiper
        var swiper = new Swiper(".tag_box .swiper-container", {
            slidesPerView:"auto",
            spaceBetween:32,
            navigation: {
                nextEl: ".tag_box .swiper-tag-next",
                prevEl: ".tag_box .swiper-tag-prev",
            },
            slidesOffsetAfter: 20,

            breakpoints: {
                1008: {
                    touchRatio: 0,
                },
                360:{
                    touchRatio: 1,
                }
            },
            //centeredSlides: true
        });

        $('.search_slide_wrap .tag_box .swiper-slide a').on('click',function(){
            var $this = $(this);
            $('.search_slide_wrap .tag_box .swiper-slide a').removeClass('active');
            $('.search_slide_wrap .tag_box .swiper-wrapper .swiper-slide input').prop('checked',false);
            $this.addClass('active');

            if($this.hasClass('active')){
                $this.siblings('input').prop('checked',true);
            }else{
                // $('.search_slide_wrap .tag_box .swiper-slide a').removeClass('active');
                $this.siblings('input').prop('checked',false);
            }
            return false;
        });

        function slideWid(){
            var $slide = $('.swiper-container .swiper-slide');
            var $slideLen = $slide.length;
            var $btnNext = $('.swiper-button-next');
            for( var i = 0; i < $slideLen; i++ ){
                var $slideWid = ($slide.eq(i).outerWidth()) * i
            }

            if($('.tag_box').width() - 300 > $slideWid){
                $btnNext.hide();
            }else{
                $btnNext.show();
            }
        }

        slideWid();

        $(window).resize(function(){
            slideWid();
        });
        var currentVisual = 0;
        var siVisual = null;
        // 비주얼
        function openVisual(vid, spd, easeFunc) {
            $('.visual_wrap .pc_wrap .visual').each(function(idx) {
                if (idx === vid) {
                    gsap.to( $(this), {duration: spd, width: '64%', ease: easeFunc} );
                    $('.visual').eq(currentVisual).siblings('.visual').removeClass('active');
                    $('.visual').eq(currentVisual).addClass('active');
                } else {
                    gsap.to( $(this), {duration: spd, width: '16%', ease: easeFunc} );
                }
            });
        }
        function visualWrap(){
            if($('.visual_wrap .pc_wrap').is(':visible') == true){
                function openVisual(vid, spd, easeFunc) {
                    $('.visual_wrap .pc_wrap .visual').each(function(idx) {
                        if (idx === vid) {
                            gsap.to( $(this), {duration: spd, width: '64%', ease: easeFunc} );
                            $('.visual').eq(currentVisual).siblings('.visual').removeClass('active');
                            $('.visual').eq(currentVisual).addClass('active');
                        } else {
                            gsap.to( $(this), {duration: spd, width: '16%', ease: easeFunc} );
                        }
                    });
                }

                openVisual(currentVisual, 1, 'expo');

                $('.visual_wrap .pc_wrap .visual').mouseenter(function() {
                    clearInterval(siVisual);
                    if (currentVisual != $(this).index()) {
                        currentVisual = $(this).index();
                        openVisual(currentVisual, 1, 'expo');
                    }
                })

                $('.visual_wrap .pc_wrap .visual').focusin(function() {
                    clearInterval(siVisual);
                    if (currentVisual != $(this).index()) {
                        currentVisual = $(this).index();
                        openVisual(currentVisual, 1, 'expo');
                    }
                })
            }
        }

        visualSwiper = new Swiper('.mobile_wrap .swiper-container',{
            slidesPerView:1,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            observer: true,
            observeParents: true,
        })

        var settings = {
            slidesPerView:"auto",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            observer: true,
            observeParents: true,
        }

        visualWrap();

        $(window).resize(function(){
            var wd = $(window).innerWidth();
            if(wd > 1008){
                openVisual(0, 1, 'expo');
            }
            visualSwiper.destroy();
            visualSwiper = new Swiper('.mobile_wrap .swiper-container', settings);
            visualWrap();

        }).trigger('resize');


        // 탭 활성
        $('.tab_area button').on('click',function(){
            var $closestLi = $(this).closest('li');
            var $index = $closestLi.index();
            var $tabCont = $('.tab_cont_area .tab_cont');

            $(this).closest('.tab_area').find('li').removeClass('active');
			$closestLi.addClass('active');

			$tabCont.removeClass('active');
            $tabCont.attr('aria-expanded','false');
			$tabCont.eq($index).addClass('active');
            $tabCont.eq($index).attr('aria-expanded','true');

            if($('#tabFstvlLikeOrderList').hasClass('active')){
				$('#btnMore').text('더보기 (' + pagingInfoLikeOrder.rowNum + '/' + pagingInfoLikeOrder.totalCnt + ')');

			}else {
				$('#btnMore').text('더보기 (' + pagingInfo.rowNum + '/' + pagingInfo.totalCnt + ')');
			}

            if(gfn_chkNvl($('#fstvlList').html()) || gfn_chkNvl($('#fstvlLikeOrderList').html())){
            	fn_search(0);
            }
		});

        /* 시기, 장소, 카테고리 select 관련 함수 */
        function festival_select(){
            let $select = $('.select_date, .select_area, .select_cate');
            /* 옵션 선택(변경) 체크 - 첫번째 옵션(default값 시기, 지역, 카테고리) 값과 같으면 "on" class 삭제 */
            $select.find('select').on('change', function(){
                if(this.value !== $(this).find('option').eq(0).val()){
                    $(this).parents('.select_box').addClass('on');

                    if($(this).attr('id') == 'searchCate'){
                    	$(this).parents('.select_box').attr('style', "background-image:url('" + $(this).find('option:selected').attr('tagUrl') + "')");
                    }

                }else{
                    $(this).parents('.select_box.on').removeClass('on');

                    if($(this).attr('id') == 'searchCate'){
                    	$(this).parents('.select_box').attr('style', "background-image:url('/kfes/resources/img/cate_ico.svg')");
                    }
                }
            });
        }
        /* 시기, 장소, 카테고리 select 관련 함수 - 호출 */
        festival_select();

    </script>

	<script>
		var isLoading = false;
		$(document).ready(function(){

			// 검색
			$('#btnSearch').click(function(){
				fn_search(0);
				$('html').animate({scrollTop : $('.tab_cont_area').offset().top - 200}, 1000);
			});

			// 더보기
			$('#btnMore').click(function(){
				if(!fn_isLastPage()){
		            if($('#tabFstvlLikeOrderList').hasClass('active')){
						fn_search(pagingInfoLikeOrder.rowNum);

					}else {
						fn_search(pagingInfo.rowNum);
					}
				}
			});

			var tagNm = '';
			$('#searchCate').val(tagNm);

			if(tagNm != null && tagNm != ''){
				$('.select_box.select_cate').addClass('on');
				$('.select_box.select_cate').attr('style', "background-image:url('" + $('#searchCate').find('option:selected').attr('tagUrl') + "')");
				$('html').animate({scrollTop : $('.tab_cont_area').offset().top - 200}, 1000);
			}

			fn_search(0);

			$(window).scroll( function() {
				if(($(window).scrollTop() + 150) >= $(document).height() - $(window).height()) {
					$('#btnMore').click();
				}
			});
		});

		function fn_isLastPage(){
			if($('#tabFstvlLikeOrderList').hasClass('active')){
				if(pagingInfoLikeOrder.rowNum == pagingInfoLikeOrder.totalCnt){
					return true;
				}
			}else {
				if(pagingInfo.rowNum == pagingInfo.totalCnt){
					return true;
				}
			}

			return false;
		}

		var pagingInfo = {
				rowNum : 0
				, totalCnt : 0
		};

		var pagingInfoLikeOrder = {
				rowNum : 0
				, totalCnt : 0
		};

		function fn_search(startIdx){

			if(isLoading) return;

			var searchType = 'A';
			if($('#tabFstvlLikeOrderList').hasClass('active')){
				searchType = 'B';
			}

			if(gfn_chkNvl(startIdx) || startIdx == 0){
				startIdx = 0;
			}

			var param = {
				startIdx : startIdx
				, searchType : searchType
				, searchDate : $('#searchDate').val()
				, searchArea : $('#searchArea').val()
				, searchCate : $('#searchCate').val()
			};

			var imgOnErrorStr = 'onerror="this.src=\'/kfes/resources/img/default_list.png\';"';
			isLoading = true;
			gfn_callPostJsonData("/kfes/list/selectWntyFstvlList.do", param, function(res){

				if(startIdx == 0){
					pagingInfo.rowNum = 0;
					$('#fstvlList').empty();

					pagingInfoLikeOrder.rowNum = 0;
					$('#fstvlLikeOrderList').empty();
				}

				if(res.resultList.length > 0) {

					for(var i = 0; i < res.resultList.length; i++){
						var result = res.resultList[i];
						var imgClass = '';

						if(result.fstvlClCd == 'MF'){
							imgClass += ' sing';
						}
						if(result.fstvlIngFlag == '0'){
							imgClass += ' open';
						}

						var imgSrc = "";
						if(!gfn_chkNvl(result.dispFstvlCntntsImgRout)){
							imgSrc = result.dispFstvlCntntsImgRout.replace('/db/', '/db/300_');
						}

						if(gfn_chkNvl(imgSrc)){
							imgSrc = '/kfes/resources/img/default_list.png';
						}

						var innerStr = '';
						innerStr += '    <li>';
						innerStr += '		<a href="/kfes/detail/fstvlDetail.do?fstvlCntntsId='+ result.fstvlCntntsId +'">';
						//innerStr += '	    <!-- class sing 추가시 마크 추가, class open 추가시 개최중 붙음 -->';
						innerStr += '	    	<div class="other_festival_img '+ imgClass +'">';
						innerStr += '				<img src="'+ imgSrc +'" alt="'+ result.fstvlCntntsImgAlt +'" '+ imgOnErrorStr + '/>';
						innerStr += '				<div class="sing_area">';
						innerStr += '		    		<div class="blind">문화 관광 축제</div>';
						innerStr += '				</div>';
						innerStr += '	    	</div>';
						innerStr += '	    	<div class="other_festival_content">';
						innerStr += '				<strong>'+ result.cntntsNm +'</strong>';
						innerStr += '				<div class="date">'+ result.fstvlBgngDe +'~'+ result.fstvlEndDe +'</div>';
						innerStr += '				<div class="loc">'+ result.areaNm +'</div>';
						innerStr += '	    	</div>';
						innerStr += '		</a>';
						innerStr += '    </li>';

						if(searchType == 'B'){
							$('#fstvlLikeOrderList').append(innerStr);
							pagingInfoLikeOrder.rowNum = res.resultList[res.resultList.length - 1].rowNum;

						}else {
							$('#fstvlList').append(innerStr);
							pagingInfo.rowNum = res.resultList[res.resultList.length - 1].rowNum;
						}
					}
				}

				if(searchType == 'B'){
					pagingInfoLikeOrder.totalCnt = res.totalCnt;
					$('#btnMore').text('더보기 (' + pagingInfoLikeOrder.rowNum + '/' + pagingInfoLikeOrder.totalCnt + ')');

					if(pagingInfoLikeOrder.totalCnt > 0){
						$('#divNoData').hide();
						$('#btnMore').show();
						$('#festival_ul_top').show();
					}else {
						$('#divNoData').show();
						$('#btnMore').hide();
						$('#festival_ul_top').hide();
					}

				}else {
					pagingInfo.totalCnt = res.totalCnt;
					$('#btnMore').text('더보기 (' + pagingInfo.rowNum + '/' + pagingInfo.totalCnt + ')');

					if(pagingInfo.totalCnt > 0){
						$('#divNoData').hide();
						$('#btnMore').show();
						$('#festival_ul_top').show();
					}else {
						$('#divNoData').show();
						$('#btnMore').hide();
						$('#festival_ul_top').hide();
					}
				}

				isLoading = false;
			},true, true);

		}
	</script>

<!-- GA script -->










<!-- 구글 옵티마이즈 스크립트, 긴급한 변동사항 등에 활용 -->
<script src="https://www.googleoptimize.com/optimize.js?id=OPT-5JVS3BG"></script>
<script src="https://www.googleoptimize.com/optimize.js?id=OPT-NQVD2Q2"></script>

<script type="text/javascript">
	var appYn = 'N';
	var mobileYn = 'N';
    var device;

	var getParameter = function (param) {
		var returnValue;
		var url = location.href;
		var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
		for (var i = 0; i < parameters.length; i++) {
			var varName = parameters[i].split('=')[0];
			if (varName.toUpperCase() == param.toUpperCase()) {
				returnValue = parameters[i].split('=')[1];
				return decodeURIComponent(returnValue);
			}
		}
	};

	function getAppYn() {
		var agent = navigator.userAgent.toLowerCase();
		if (agent.indexOf('visitkor') != -1 ) {
			appYn = 'Y';
			mobileYn = 'Y';
		}

		device = getDevice();
	}

	function getDevice() {
		var agent = navigator.userAgent.toLowerCase();
		if (agent.indexOf('iphone') != -1 || agent.indexOf('ipad') != -1) { // iPhone

			// 기기, IOS별 모바일 버전 조정
			if (/iPhone/.test(navigator.platform)) {
				mobileYn = 'Y';
			} else {
				mobileYn = 'N';
			}
			return 'iOS';

		} else if (agent.indexOf('android') != -1) { // Android OS

			mobileYn = 'Y';
			return 'Android';

		} else if (agent.indexOf('macintosh') != -1) {	// 아이패드 어플에서는 매킨토시로 잡힘

			mobileYn = 'N';
			return 'iOS';
		} else if (agent.indexOf('ipod') != -1) {
			mobileYn = 'Y';
			return 'iOS';
		} else if (agent.indexOf('windows') != -1){
			return 'Windows';
		} else {
			return 'Etc';
		}
	}

	$(document).ready(function(){
		getAppYn();
	});

</script>

<script type="text/javascript">
    var otd_nm = "";
    if (appYn == 'N') {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            },
            i[r].l = 1 * new Date();
            a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-92880258-1', 'auto');
        ga('require', 'displayfeatures');
        otd_nm = "";
        ga('set', 'dimension5', otd_nm);
    } else {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            },
            i[r].l = 1 * new Date();
            a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-92878657-1', 'auto');
        ga('require', 'displayfeatures');
        ga('send', 'pageview');
        otd_nm = "";
        ga('set', 'dimension5', otd_nm);
    }

    var custInfo = {
        uuid: null, // SNS_ID
        loginYn: 'N', // 로그인여부
        firstYn: 'N', // 최초로그인여부
        gender: 'null', // 성별
        grade: 'null', // 여행구독레벨
        birthYr: 0, // 생년월일
        rsdeNm: 'null', // 거주지명
        favoriteCnt: null, // 즐겨찾기수
        commentCnt: null, // 댓글수
        joinYmd: null, // 가입일
        channel: null, // SNS채널구분
        device: appYn == 'Y' ? device
            : mobileYn == 'Y'
                ? 'mobileweb'
                : 'pcweb', // device 구분
        cardAreaNm: null // digitcard area Name
    }
</script>

<!--  GA4 관련 -->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LYY1LJZCC4"></script>

<!-- Google Tag Manager: 구글 태그 매니저 -->
<script>
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer'
            ? '&l=' + l
            : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PJVBVKB');
</script>
<!-- End Google Tag Manager -->


<!-- body 뒤에 붙여 넣어 주세요. -->

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJVBVKB"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -


<!-- 가장 하단에 실행되도록 넣어 주세요 -->

<script type="text/javascript" charset="UTF-8">
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'user_id': custInfo.uuid, // 기본페이지뷰 시 호출되는 uuid값 활용
        'first_login': custInfo.firstYn, // 기본페이지뷰 시 호출되는 firstYn값 활용
        'gender_div': custInfo.gender, // 기본페이지뷰 시 호출되는 gender값 활용
        'birth_year': custInfo.birthYr, // 기본페이지뷰 시 호출되는 birthYr값 활용
        'city_name': custInfo.rsdeNm, // 기본페이지뷰 시 호출되는 rsdeNm값 활용
        'join_date': custInfo.joinYmd, // 기본페이지뷰 시 호출되는 joinYmd값 활용
        'method': custInfo.channel, // 기본페이지뷰 시 호출되는 channel값 활용
        'dimension7': custInfo.uuid,
        'dimension8': custInfo.joinYmd,
        'dimension9': custInfo.loginYn,
        'dimension10': custInfo.channel,
        'dimension11': custInfo.device
    });
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-LYY1LJZCC4', {otd_nm: ""});
</script>