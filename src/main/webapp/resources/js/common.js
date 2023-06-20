$(document).ready(function() {
   
    const popupBtnAll = document.querySelectorAll('[aria-haspopup="dialog"]');
    if (popupBtnAll) {
    let currentTarget, focusEl = [], popupDepth = 0, popupDimmed, keyEscapeEvt, KeyEvtEl;
    const _$this = this,
    popupAll = document.querySelectorAll('[role="dialog"]'),
    popupCloseBtnAll = document.querySelectorAll('[data-popup-close]');
    // ESC 누름 감지
    const keyEvent = {
        get keyEscape() {
        return this._state;
        },
        set keyEscape(state) {
        this._state = state;
        if (state) escKeyEvt(KeyEvtEl, keyEscapeEvt);
        },
    };
    keyEvent;
    // popup dimmed 생성
    const createdDimmed = () => {
        const createDiv = document.createElement('div');
        createDiv.classList.add('popup-dimmed');
        document.querySelector('body').appendChild(createDiv);
    };
    // popup dimmed click 시 팝업 닫기
    const dimmedClick = (e) => {
        if (e.target.classList.contains('wrap-layer-popup')) {
        popupCloseAll();
        keyEvent.keyEscape = false;
        }
    };
    // popup open
    const popupOpen = (e) => {
        currentTarget = e.target.tagName;
        currentTarget === 'BUTTON' || currentTarget === 'A' ? currentTarget = e.target : currentTarget = e.target.closest('button') || e.target.closest('a');
        $('.scroll_wrap').css('z-index','99');
        popupDimmed = document.querySelectorAll('.popup-dimmed');
        if (popupDimmed.length === 0) createdDimmed();

        popupAll.forEach((popupEl) => {
        if (popupEl.getAttribute('data-popup') === currentTarget.getAttribute('data-popup')) {
            popupDepth += 1; // popup depth 저장
            focusEl.splice((popupDepth - 1), 0, currentTarget); // popup focus Element 저장
            popupEl.classList.add('popup-open'); // open class add
            popupEl.setAttribute('popup-depth', popupDepth); // popup depth 설정

            // dimmed click 이벤트 할당
            popupEl.removeEventListener('click', dimmedClick);
            popupEl.addEventListener('click', dimmedClick);

            document.body.classList.add('scroll-lock'); // popup scroll lock
            popupEl.querySelector('.wrap-layer-popup-title').focus(); // popup 오픈 시 타이틀에 포커스

            // shift+tab 또는 <- 화살표 키 키보드 동작 시 팝업 밖으로 포커스 이동 방지 이벤트 할당
            popupEl.querySelector('.wrap-layer-popup-title').removeEventListener('keydown', titleKeyDown);
            popupEl.querySelector('.wrap-layer-popup-title').addEventListener('keydown', titleKeyDown);
            
            // popup 위 팝업 케이스 dimmed 수정
            if (popupDepth > 1) document.querySelector(`[popup-depth='${popupDepth - 1}']`).classList.add('prev-popup');

            KeyEvtEl = popupEl; // ESC 키 동작을 위한 현재 활성화 된 popup element 저장
        };
        });
    };
    // popup close
    const popupClose = (e) => {
        $('.scroll_wrap').css('z-index','19');
        // 키보드 이벤트 ESC 일 경우 currentTarget 설정
        if (e.key == 'Escape' || e.key == 'Esc') currentTarget = KeyEvtEl.querySelector('.btn-layer-close');
        // 일반적인 클릭, 키보드 이벤트 일 경우 currentTarget 설정
        else {
        currentTarget = e.target.tagName;
        currentTarget === 'BUTTON' || currentTarget === 'A' ? currentTarget = e.target : currentTarget = e.target.closest('button') || e.target.closest('a');
        let popupId = currentTarget.getAttribute('data-popup-close');
        if (currentTarget.getAttribute('popup-close-all') === 'true') return popupCloseAll();
        if (currentTarget.getAttribute('popup-confirm')) confirmEvt[popupId]();
        else if (currentTarget.getAttribute('popup-cancel')) cancelEvt[popupId]();
        }
        popupAll.forEach((popupEl) => {
        if (popupEl.getAttribute('data-popup') === currentTarget.getAttribute('data-popup-close')) {
            popupEl.classList.remove('popup-open');
            // 저장된 focus element 가 있을 때
            if (focusEl.length > 0) {
            focusEl[popupDepth - 1].focus(); // focus 상태 재설정
            focusEl.splice((popupDepth - 1), 1); // popup focus Element 삭제
            popupDepth -= 1; // popup depth 재설정
            KeyEvtEl = document.querySelector(`.wrap-layer-popup[popup-depth='${popupDepth}']`); // ESC 키 동작을 위한 현재 활성화 된 popup element 저장
            } else { // 저장된 focus element 가 없을 때
            document.body.setAttribute('tabindex', '0');
            document.body.focus();
            KeyEvtEl = null;
            }
        };
        });
        // 오픈 된 popup이 있는 지 확인
        const openPopups = document.querySelectorAll(`.popup-open`);
        if (openPopups.length === 0) popupCloseAll('none');
        else if (openPopups.length > 0) { // 오픈된 popup이 있을 경우 popup dimmed 수정
        const getPopupValue = currentTarget.getAttribute('data-popup-close') || currentTarget.getAttribute('data-popup');
        const getPopupDepth = Number(document.querySelector(`.wrap-layer-popup[data-popup='${getPopupValue}']`).getAttribute('popup-depth'));
        document.querySelector(`.wrap-layer-popup[popup-depth='${getPopupDepth - 1}']`).classList.remove('prev-popup');
        document.querySelector(`.wrap-layer-popup[data-popup='${getPopupValue}']`).removeAttribute('popup-depth');
        };
    };
    // popup close All
    const popupCloseAll = (focusActionNone) => {
        // dimmed 삭제
        const popupDimmed = document.querySelector('.popup-dimmed');
        popupDimmed.style.opacity = 0;
        popupDimmed.addEventListener('transitionend', function() {
        if (popupDimmed.parentNode !== null) popupDimmed.parentNode.removeChild(popupDimmed);
        });
        // popup depth 설정 삭제
        popupAll.forEach((popupEl) => {
        popupEl.classList.remove('prev-popup');
        popupEl.removeAttribute('popup-depth');
        });
        // scroll lock 해지
        document.body.classList.remove('scroll-lock');
        // popupClose Event 통해서 focus 설정이 되지 않았을 경우 (popupCloseAll 단독 실행일 경우)
        if (focusActionNone !== 'none') {
        if (focusEl.length > 0) focusEl[0].focus();  // 저장된 focus element 가 있을 때
        else { // 저장된 focus element 가 없을 때
            document.body.setAttribute('tabindex', '0');
            document.body.focus();
        };
        focusEl = []; // focus reset
        }
        popupAll.forEach((popupEl) => popupEl.classList.remove('popup-open')); // open class 삭제
        popupDepth = 0; // popup depth reset
        KeyEvtEl = null; // KeyEvtEl reset
    };
    // ESC 키보드 이벤트
    const escKeyEvt = (El, e) => {
        const openPopups = document.querySelectorAll(`.popup-open`);
        // 팝업 열린 상태에서 키보드 ESC 키 이벤트 실행 
        if (openPopups.length > 0) popupClose(e);
    };
    // popup 닫기 키보드 이벤트
    const closeBtnKeyDown = (e) => {
        if ((e.key == 'Tab' && !e.shiftKey) || e.key == 'ArrowRight') {
        e.preventDefault();
        popupAll.forEach((popupEl) => {
            if (popupEl.getAttribute('data-popup') === e.target.getAttribute('data-popup-close')) {
                popupEl.querySelector('.wrap-layer-popup-title').focus();
            };
        });
        };
    };
    // popup title 키보드 이벤트
    const titleKeyDown = (e) => {
        if ((e.key == 'Tab' && e.shiftKey) || e.key == 'ArrowLeft') {
        e.preventDefault();
        popupAll.forEach((popupEl) => {
            if (popupEl.getAttribute('data-popup') === e.target.closest('.wrap-layer-popup').getAttribute('data-popup')) {
            popupEl.querySelector('.btn-layer-close').focus();
            };
        });
        };
    };

    // 키보드 ESC 키 누름 감지 이벤트
    const escKeyDown = (e) => {
        if (e.key == 'Escape' || e.key == 'Esc') {
        keyEscapeEvt = e;
        keyEvent.keyEscape = true;
        };
    };

    // 클릭/키보드 팝업 이벤트 제거/할당
    // 팝업 열기
    popupBtnAll.forEach((popupBtn) => {
        popupBtn.removeEventListener('click', popupOpen);
        popupBtn.addEventListener('click', popupOpen);
    });
    // 팝업 닫기 
    popupCloseBtnAll.forEach((popupCloseBtn) => {
        popupCloseBtn.removeEventListener('click', popupClose);
        popupCloseBtn.addEventListener('click', popupClose);
        if (popupCloseBtn.classList.contains('btn-layer-close')) {
        popupCloseBtn.removeEventListener('keydown', closeBtnKeyDown);
        popupCloseBtn.addEventListener('keydown', closeBtnKeyDown);
        }
    });
    // ESC 키로 팝업 닫기
    window.removeEventListener('keydown', escKeyDown);
    window.addEventListener('keydown', escKeyDown);
    }
    

    // 마우스 hover , button 클릭
    $('.main_search').click(function(){
        var searchBox = $(this).siblings('.search_box')
        searchBox.show();
        gsap.fromTo( searchBox, {y: -30}, {duration: 0.4, y: 0} );
    });

    $('.search_box_close').click(function(){
        $('.selectBox2').removeClass('active');
        $('.search_box').fadeOut();
    })
    $('.search_box').keydown(function(e){
                
            if(e.keyCode == "9" && e.shiftKey){
            }else{
                $('.search_box_close').focusout(function() {
                    $('.search_box').fadeOut();
                    $('.main_search').focus();
                });
            }
    });

    $('.link_btn').click(function() {
        if($(this).hasClass('off')){
            $(this).removeClass('off');
            $(this).addClass('on');
        }
    })
    $('.m_img_fst').after().click(function(){
       $('.m_more').slideDown();
       $('.slide_content.fst').css('height','auto');
       $(this).addClass('down');
    });
    $('.more_pc_btn').click(function(){
        $('.m_more').slideDown();
        $('.slide_content.fst').css('height','auto');
        $(this).parent('.slide_content.fst').addClass('down');
        $(this).hide();
     });

     $('.slide_content.fst').click(function(){
        $('.m_more').slideDown();
        $(this).css('height','auto');
        $(this).addClass('down');
        $('.more_pc_btn').hide();
     });
    
    $('.slick-arrow').mouseenter(function() {
        $(this).addClass('on').fadeIn();
    }).mouseleave(function() {
        $(this).removeClass('on');
    });
    $('.slick-arrow').focus(function() {
        $(this).addClass('on').fadeIn();
    }).focusout(function() {
        $(this).removeClass('on');
    });
    $('.arrow_ico').focus(function() {
        gsap.to( $('.on', this), {duration: 0.3, opacity: 1} );
        $(this).find('.off').attr('opacity', 0);
    }).focusout(function() {
        gsap.to( $('.on', this), {duration: 0.3, opacity: 0} );
    });
    $('.related_ul li a').mouseenter(function() {
        gsap.to( $('span img.on', this), {duration: 0.3, opacity: 1} );
        gsap.to( $('span img.off', this), {duration: 0.3, opacity: 0} );
    }).mouseleave(function() {
        gsap.to( $('span img.on', this), {duration: 0.3, opacity: 0} );
        gsap.to( $('span img.off', this), {duration: 0.3, opacity: 1} );
    });
    $('.related_ul li a').focus(function() {
        gsap.to( $('span img.on', this), {duration: 0.3, opacity: 1} );
        gsap.to( $('span img.off', this), {duration: 0.3, opacity: 0} );
    }).focusout(function() {
        gsap.to( $('span img.on', this), {duration: 0.3, opacity: 0} );
        gsap.to( $('span img.off', this), {duration: 0.3, opacity: 1} );
    });
    // 마우스 hover , button 클릭

    // select box custom
    if($('.label').length){
        const label = document.querySelector('.label');
        const options = document.querySelectorAll('.optionItem');
        const handleSelect = function(item) {
        label.innerHTML = item.textContent;
        label.parentNode.classList.remove('active');
        }
        options.forEach(function(option){
        option.addEventListener('click', function(e){
            e.preventDefault();
            handleSelect(option)})
        })
        label.addEventListener('click', function(e){
            e.preventDefault();
        if(label.parentNode.classList.contains('active')) {
            label.parentNode.classList.remove('active');
        } else {
            label.parentNode.classList.add('active');
        }
        });
    }    
    // select box custom
    
    // poster height 스크립트 추가 2023.02.06
    $(window).resize(function(){
        var wd = $(window).innerWidth();
        var mainPoster = $('.top_bannr').innerHeight();
        if(wd<1970){
            $('.slide_wd_poster').css('width','928px');
            // $('.top_bannr').css('padding','0');  // 2023.05.02 모바일 디바이스에서 페이지 새로고침시 배너이벤트 가로영역 정렬안되는 이슈로 주석처리
            $('.slide_wd_poster').css('padding','0');
        }else{
            $('.slide_wd_poster').css('width','100%');
            $('.top_bannr').css('padding','0 27%');
        }
        
    })
    var wd = $(window).innerWidth();
    var mainPoster = $('.top_bannr').innerHeight();
    if(wd<1970){
        $('.slide_wd_poster').css('width','928px');
        // $('.top_bannr').css('padding','0');  // 2023.05.02 모바일 디바이스에서 페이지 새로고침시 배너이벤트 가로영역 정렬안되는 이슈로 주석처리
        $('.slide_wd_poster').css('padding','0');
    }else{
        $('.slide_wd_poster').css('width','100%');
        $('.top_bannr').css('padding','0 27%');
    }
    // poster height 스크립트 추가 2023.02.06
    
    
   
});