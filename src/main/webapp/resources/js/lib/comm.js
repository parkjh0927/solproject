var dateMsg1, dateMsg2;

var arrWinHandle = new Array(); // 팝업창 핸들 저장 array

/*
 * 콤보조회(selectBox)
 * @param : url
 * @param : selectBox id
 * @param : firstOpt > "전체", "선택" 등 첫번째 옵션 추가시 넘긴다.
 * @param : callBack function
 */
function gfnSelectBox(sUrl, obj, firstOpt, callBackFn, sync) {
  sync = sync == null ? true : sync;

  var loop = 0;
  var params = {};

  $.ajax({
    url: sUrl,
    type: "post",
    async: sync,
    data: params,
    dataType: "json",
    error: function () {
      //alert('Error');
    },
    success: function (rtnData) {
      $("#" + obj).empty();

      if (firstOpt && firstOpt != "") {
        $("#" + obj).get(0).options[0] = new Option(firstOpt, "");
        loop = 1;
      }

      $.each(rtnData, function (idx, ref) {
        $("#" + obj).get(0).options[idx + loop] = new Option(ref.cdNm, ref.cd);
      });

      //if (loop == 1) $("#"+obj+" option:eq(0)").prop("selected", true);

      if (callBackFn) {
        //실행 후 callback function
        try {
          callBackFn();
        } catch (e) {
          //alert("callback 함수 에러!!");
        }
      }
    },
  });
}

/*
 * 공통코드(selectBox) - 비동기 방식
 * @param : 요청 url
 * @param : selectBox id
 * @param : firstOpt > "전체", "선택" 등 첫번째 옵션 추가시 넘긴다.
 */
function gfnAXSelBxUrl(sUrl, obj, firstOpt) {
  var isspace = firstOpt != "" ? true : false;

  $("#" + obj).bindSelect({
    reserveKeys: {
      options: "resultList",
      optionValue: "CD",
      optionText: "CDNM",
    },
    ajaxUrl: sUrl,
    ajaxPars: {},
    isspace: isspace,
    isspaceTitle: firstOpt,
    onchange: function () {
      //console.log(Object.toJSON(this));
    },
  });
}

/*
 * 공통코드(selectBox) - 동기 방식
 * @param : 요청 url
 * @param : selectBox id
 * @param : firstOpt > "전체", "선택" 등 첫번째 옵션 추가시 넘긴다.
 */
function gfnSyncAXSelBxUrl(sUrl, obj, firstOpt) {
  var isspace = firstOpt != "" ? true : false;

  $("#" + obj).bindSelect({
    reserveKeys: {
      options: "resultList",
      optionValue: "CD",
      optionText: "CDNM",
    },
    ajaxUrl: sUrl,
    ajaxPars: {},
    ajaxAsync: false,
    isspace: isspace,
    isspaceTitle: firstOpt,
    onchange: function () {
      //console.log(Object.toJSON(this));
    },
  });
}

/*
 * 공통코드(selectBox) - 비동기 방식
 * @param : 그룹코드
 * @param : selectBox id
 * @param : firstOpt > "전체", "선택" 등 첫번째 옵션 추가시 넘긴다.
 */
function gfnAXSelBx(codeId, obj, firstOpt) {
  var isspace = firstOpt != "" ? true : false;

  $("#" + obj).bindSelect({
    reserveKeys: {
      options: "resultList",
      optionValue: "CD",
      optionText: "CDNM",
    },
    ajaxUrl: "/common/combo/codeList",
    ajaxPars: { codeId: codeId },
    isspace: isspace,
    isspaceTitle: firstOpt,
    onchange: function () {
      //console.log(Object.toJSON(this));
    },
  });
}

/*
 * 공통코드(selectBox) - 동기방식
 * @param : 그룹코드
 * @param : selectBox id
 * @param : firstOpt > "전체", "선택" 등 첫번째 옵션 추가시 넘긴다.
 */
function gfnSyncAXSelBx(codeId, obj, firstOpt) {
  var isspace = firstOpt != "" ? true : false;

  $("#" + obj).bindSelect({
    reserveKeys: {
      options: "resultList",
      optionValue: "CD",
      optionText: "CDNM",
    },
    ajaxPars: { codeId: codeId },
    ajaxUrl: "/common/combo/codeList",
    ajaxAsync: false,
    isspace: isspace,
    isspaceTitle: firstOpt,
    onchange: function () {
      //console.log(Object.toJSON(this));
    },
  });
}

/*
 * 공통코드(selectBox) - 비동기 방식
 * @param : 그룹코드
 * @param : selectBox id
 * @param : firstOpt > "전체", "선택" 등 첫번째 옵션 추가시 넘긴다.
 * @param : callBack function
 */
function gfnAsyncAXSelBx(codeId, obj, firstOpt, callbackFunc) {
  var isspace = firstOpt != "" ? true : false;

  $("#" + obj).bindSelect({
    reserveKeys: {
      options: "resultList",
      optionValue: "CD",
      optionText: "CDNM",
    },
    ajaxUrl: "/common/combo/codeList",
    ajaxPars: { codeId: codeId },
    ajaxAsync: true,
    isspace: isspace,
    isspaceTitle: firstOpt,
    onchange: function () {
      //console.log(Object.toJSON(this));
    },
    onLoad: function () {
      if (
        callbackFunc &&
        callbackFunc != null &&
        typeof callbackFunc == "function"
      ) {
        callbackFunc();
      }
    },
  });
}

/*
 * 공통코드(selectBox)
 * @param : 그룹코드
 * @param : selectBox id
 * @param : firstOpt > "전체", "선택" 등 첫번째 옵션 추가시 넘긴다.
 * @param : callBack function
 */
function gfnComCdSelBx(codeId, obj, firstOpt, callBackFn, sync) {
  sync = sync == null ? true : sync;

  var loop = 0;

  var params = {};
  params["codeId"] = codeId;

  $.ajax({
    url: "/common/combo/codeList",
    type: "post",
    async: sync,
    data: params,
    dataType: "json",
    error: function () {
      //alert('Error');
    },
    success: function (rtnData) {
      $("#" + obj).empty();

      debugger;
      if (firstOpt && firstOpt != "") {
        $("#" + obj).get(0).options[0] = new Option(firstOpt, "");
        loop = 1;
      }

      $.each(rtnData, function (idx, ref) {
        $("#" + obj).get(0).options[idx + loop] = new Option(ref.CDNM, ref.CD);
      });

      //if (loop == 1) $("#"+obj+" option:eq(0)").prop("selected", true);

      if (callBackFn) {
        //실행 후 callback function
        try {
          callBackFn();
        } catch (e) {
          //alert("callback 함수 에러!!");
        }
      }
    },
  });
}

// 코드내용에 코드가 표시 됨
function gfnComCdSelBx2(codeGp, obj, firstOpt, callBackFn, sync) {
  sync = sync == null ? true : sync;

  var loop = 0;

  var params = {};
  params["codeGroup"] = codeGp;
  params["order"] = "1";

  $.ajax({
    url: "/common/codeList",
    type: "post",
    async: sync,
    data: params,
    dataType: "json",
    error: function () {
      //alert('Error');
    },
    success: function (rtnData) {
      $("#" + obj).empty();

      if (firstOpt && firstOpt != "") {
        $("#" + obj).get(0).options[0] = new Option(firstOpt, "");
        loop = 1;
      }

      $.each(rtnData, function (idx, ref) {
        $("#" + obj).get(0).options[idx + loop] = new Option(ref.cd, ref.cdNm);
      });

      //if (loop == 1) $("#"+obj+" option:eq(0)").prop("selected", true);

      if (callBackFn) {
        //실행 후 callback function
        try {
          callBackFn();
        } catch (e) {
          //alert("callback 함수 에러!!");
        }
      }
    },
  });
}

//코드내용에 코드가 표시 됨 - url이용
function gfnComCdSelBx2UseUrl(reqUrl, params, obj, firstOpt, callBackFn, sync) {
  sync = sync == null ? true : sync;

  var loop = 0;

  $.ajax({
    url: reqUrl,
    type: "post",
    async: sync,
    data: params,
    dataType: "json",
    error: function () {
      //alert('Error');
    },
    success: function (rtnData) {
      $("#" + obj).empty();

      if (firstOpt && firstOpt != "") {
        $("#" + obj).get(0).options[0] = new Option(firstOpt, "");
        loop = 1;
      }

      $.each(rtnData, function (idx, ref) {
        $("#" + obj).get(0).options[idx + loop] = new Option(ref.cd, ref.cdNm);
      });

      //if (loop == 1) $("#"+obj+" option:eq(0)").prop("selected", true);

      if (callBackFn) {
        //실행 후 callback function
        try {
          callBackFn();
        } catch (e) {
          //alert("callback 함수 에러!!");
        }
      }
    },
  });
}

function gfn_comCdData(codeGp, codeId, firstOpt, callBackFn) {
  $.ajax({
    url: "/common/codeList",
    type: "post",
    data: { codeGroup: codeGp },
    dataType: "json",
    error: function () {
      //alert('Error');
    },
    success: function (rtnData) {
      callBackFn(rtnData);
    },
  });
}

function gfnSyncComboCodeData(codeGp, callBackFn) {
  $.ajax({
    url: "/common/combo/codeList",
    type: "post",
    async: false,
    data: { codeId: codeGp },
    dataType: "json",
    error: function () {},
    success: function (rtnData) {
      callBackFn(rtnData);
    },
  });
}

function gfnComCdGrid(codeGp, bSelectStr) {
  var resultData = "";

  $.ajax({
    url: "/common/codeList",
    type: "post",
    async: false,
    data: { codeGroup: codeGp },
    dataType: "json",
    error: function () {
      alert("Error");
    },
    success: function (rtnData) {
      resultData = rtnData;
    },
  });

  var datas = "";
  for (var i in resultData) {
    datas += resultData[i].CD + ":" + resultData[i].CD_NM + ";";
  }

  if (bSelectStr != null && bSelectStr != "")
    datas = ":" + bSelectStr + ";" + datas;

  return datas.substring(0, datas.length - 1);
}

//콤마찍기
function gfn_comma(str) {
  try {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  } catch (e) {
    return str;
  }
}

/* 필수값 체크 유효성 검사
 * @author :
 * @param  : value
 * @return : true,false
 */
function isRequiredCheck(data) {
  if (typeof data == "undefined" || data == "" || data == null) {
    return false;
  }
  return true;
}

/* 길이 체크 유효성 검사
 * @author :
 * @param  : value
 * @return : true,false
 */
function isLengthCheck(data, start, end) {
  var leng = data.length;
  if (leng < start || leng > end) {
    return false;
  }
  return true;
}

/* 숫자 유효성 검사
 * @author :
 * @param  : value
 * @return : true,false
 */
function isNumberCheck(data) {
  if (isNaN(data) == true) {
    return false;
  } else {
    return true;
  }
}

/* 이메일 유효성 검사
 * @author :
 * @param  : value
 * @return : true,false
 */
function isEmailCheck(data) {
  var regex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  if (regex.test(data) == false) {
    return false;
  } else {
    return true;
  }
}

/* 날짜 유효성 검사
 * @author :
 * @param  : date value
 * @return : true,false
 * type = 'yyyy-mm-dd'
 */
function isDateCheck(d) {
  // 포맷에 안맞으면 false리턴
  if (!isDateFormat(d)) {
    return false;
  }

  var month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var dateToken = d.split("-");
  var year = Number(dateToken[0]);
  var month = Number(dateToken[1]);
  var day = Number(dateToken[2]);

  // 날짜가 0이면 false
  if (day == 0) {
    return false;
  }

  var isValid = false;

  // 윤년일때
  if (isLeaf(year)) {
    if (month == 2) {
      if (day <= month_day[month - 1] + 1) {
        isValid = true;
      }
    } else {
      if (day <= month_day[month - 1]) {
        isValid = true;
      }
    }
  } else {
    if (day <= month_day[month - 1]) {
      isValid = true;
    }
  }

  return isValid;
}

/*  날짜포맷에 맞는지 검사
 * @author :
 * @param  : date value,
 * @return : true,false
 */
function isDateFormat(d) {
  var df = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
  return d.match(df);
}

/*
 * 날짜 윤년여부 검사
 * @author :
 * @param  : year value,
 * @return : true,false
 */
function isLeaf(year) {
  var leaf = false;

  if (year % 4 == 0) {
    leaf = true;

    if (year % 100 == 0) {
      leaf = false;
    }

    if (year % 400 == 0) {
      leaf = true;
    }
  }

  return leaf;
}

/*
 * 숫자체크 함수
 * @author :
 * @param  : Object
 * @return :
 */
function numChk(obj) {
  if (obj.value == null || obj.value == "") {
    return;
  }

  if (isNaN(obj.value)) {
    alert(comm_msg.COMM012);
    obj.value = "";
    return;
  }
}

/*
 * Enter key 이벤트
 * @author :
 * @param  : e, 호출 펑션
 * @return :
 */
function enterEvent(e, fn) {
  if (e.keyCode == 13) {
    eval(fn);
    return false;
  } else {
    return true;
  }
}

/*
 * 입력 문자 길이 반환 함수
 * @author :
 * @param  : 객체, 표시할객체, 길이
 * @return :
 */
function returnLength(obj, leng) {
  var strCount = 0;
  var tempStr;

  for (var i = 0; i < obj.value.length; i++) {
    tempStr = obj.value.charAt(i);
    if (escape(tempStr).length > 4) {
      strCount += 2;
    } else {
      strCount += 1;
    }
  }

  var isNumber = strCount > leng ? false : true;
  if (!isNumber) {
    alert("길이가 " + leng + "byte를 초과했습니다");
    obj.value = obj.value.substring(0, obj.value.length - 1);
    strCount = leng;
  }
}

/*
 * replaceAll
 * @author :
 * @param  :
 * @return :
 */
String.prototype.replaceAll = function (searchStr, replaceStr) {
  return this.split(searchStr).join(replaceStr);
};

/*
 * 특수문자 변경
 * @author :
 * @param  :
 * @return :
 */
function escapeReplace(vals) {
  return vals
    .replaceAll("&", "&amp")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("'", "&#39;")
    .replaceAll('"', "&quot;");
}

/*
 * 확장자 가져오기
 * @author :
 * @param  :
 * @return :
 */
function fnGetExt(file_name) {
  if (file_name == "" || file_name == null) {
    return "";
  }
  var ext = "";
  if (file_name != "" && file_name.length > 0) {
    var cnt = file_name.length;
    for (var i = cnt - 1; i > 0; i--) {
      var str = file_name.charAt(i);
      if (str == ".") {
        break;
      } else {
        ext = str + ext;
      }
    }
  }
  return ext;
}

/*
 * 오늘날짜 가져오기
 * @author :
 * @param  :
 * @return :
 */
function gfn_getStringDateYMD() {
  var date = new Date();

  var month;
  var days;
  var hour;
  var min;
  var sec;

  if (Number(date.getMonth() + 1) < 10) {
    month = "0" + Number(date.getMonth() + 1);
  } else {
    month = Number(date.getMonth() + 1);
  }

  if (Number(date.getDate()) < 10) {
    days = "0" + date.getDate();
  } else {
    days = date.getDate();
  }

  var today = {
    year: String(date.getFullYear()),
    mon: String(month),
    day: String(days),
  };

  var fullString = today.year + "-" + today.mon + "-" + today.day;

  return fullString;
}

/*
 * 오늘날짜 가져오기
 * @author :
 * @param  :
 * @return :
 */
function gfn_getStringDateYYYMMDDHH24MISS() {
  var date = new Date();

  var month;
  var days;
  var hour;
  var min;
  var sec;

  if (Number(date.getMonth() + 1) < 10) {
    month = "0" + Number(date.getMonth() + 1);
  } else {
    month = Number(date.getMonth() + 1);
  }

  if (Number(date.getDate()) < 10) {
    days = "0" + date.getDate();
  } else {
    days = date.getDate();
  }

  if (Number(date.getHours()) < 10) {
    hour = "0" + date.getHours();
  } else {
    hour = date.getHours();
  }

  if (Number(date.getMinutes()) < 10) {
    min = "0" + date.getMinutes();
  } else {
    min = date.getMinutes();
  }

  if (Number(date.getSeconds()) < 10) {
    sec = "0" + date.getSeconds();
  } else {
    sec = date.getSeconds();
  }

  var today = {
    year: String(date.getFullYear()),
    mon: String(month),
    day: String(days),
    hour: String(hour),
    min: String(min),
    sec: String(sec),
  };

  var fullString =
    today.year +
    "-" +
    today.mon +
    "-" +
    today.day +
    " " +
    today.hour +
    ":" +
    today.min +
    ":" +
    today.sec;

  return fullString;
}

/*
 * 이번달 가져오기
 * @author :
 * @param  :
 * @return :
 */
function fnGetStringDateYM() {
  var date = new Date();

  var month;

  if (Number(date.getMonth() + 1) < 10) {
    month = "0" + Number(date.getMonth() + 1);
  } else {
    month = Number(date.getMonth() + 1);
  }

  var today = {
    year: String(date.getFullYear()),
    mon: String(month),
  };

  var fullString = today.year + "-" + today.mon;

  return fullString;
}

/*
 * 하루전 가져오기
 * @author :
 * @param  :
 * @return :
 */
function getStringDateYMD1D(date) {
  var selectDate = date.split("-");
  var changeDate = new Date();
  changeDate.setFullYear(selectDate[0], selectDate[1] - 1, selectDate[2] - 1);

  var year = changeDate.getFullYear();
  var month = changeDate.getMonth() + 1;
  var days = changeDate.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (days < 10) {
    days = "0" + days;
  }

  var resultDate = year + "-" + month + "-" + days;
  return resultDate;
}

/*
 * 일주일전 가져오기
 * @author :
 * @param  :
 * @return :
 */
function getStringDateYMD7M(date) {
  var selectDate = date.split("-");
  var changeDate = new Date();
  changeDate.setFullYear(selectDate[0], selectDate[1] - 1, selectDate[2] - 7);

  var year = changeDate.getFullYear();
  var month = changeDate.getMonth() + 1;
  var days = changeDate.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (days < 10) {
    days = "0" + days;
  }

  var resultDate = year + "-" + month + "-" + days;
  return resultDate;
}

/*
 * 한달전 가져오기
 * @author :
 * @param  :
 * @return :
 */
function getStringDateYMD1Mon(date) {
  var selectDate = date.split("-");
  var changeDate = new Date();
  changeDate.setFullYear(selectDate[0], selectDate[1] - 2);

  var year = changeDate.getFullYear();
  var month = changeDate.getMonth() + 1;
  var days = changeDate.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (days < 10) {
    days = "0" + days;
  }

  var resultDate = year + "-" + month + "-" + days;
  return resultDate;
}

/*
 * 한달후 가져오기
 * @author :
 * @param  :
 * @return :
 */
function getStringDateYMDAft1Mon(date) {
  var selectDate = date.split("-");
  var changeDate = new Date();
  changeDate.setFullYear(selectDate[0], selectDate[1]);

  var year = changeDate.getFullYear();
  var month = changeDate.getMonth() + 1;
  var days = changeDate.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (days < 10) {
    days = "0" + days;
  }

  var resultDate = year + "-" + month + "-" + days;
  return resultDate;
}

/*
 * 1년후 가져오기
 * @author :
 * @param  :
 * @return :
 */
function getStringDateYMDAft1Year(date) {
  var selectDate = date.split("-");
  /*
	 var changeDate = new Date();
	 changeDate.setFullYear(selectDate[0], selectDate[1] - 1);

	 var year = changeDate.getFullYear() + 1;
	 var month = changeDate.getMonth();
	 var days = changeDate.getDate();
	 if(month < 10) { month = "0" + month; }
	 if(days < 10) { days = "0" + days; }
*/
  var resultDate =
    Number(selectDate[0]) + 1 + "-" + selectDate[1] + "-" + selectDate[2];
  return resultDate;
}

/*
 * 두달전 가져오기
 * @author :
 * @param  :
 * @return :
 */
function getStringDateYMD2Mon(date) {
  var selectDate = date.split("-");
  var changeDate = new Date();
  changeDate.setFullYear(selectDate[0], selectDate[1] - 3);

  var year = changeDate.getFullYear();
  var month = changeDate.getMonth() + 1;
  var days = changeDate.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (days < 10) {
    days = "0" + days;
  }

  var resultDate = year + "-" + month + "-" + days;
  return resultDate;
}

function fnNvl(str1, str2) {
  if (str1 == "" || str1 == null || str1 == undefined || str1 == "undefined") {
    return str2;
  } else {
    return str1;
  }
}

function gfn_nvl(str1, str2) {
  if (str1 == "" || str1 == null || str1 == undefined || str1 == "undefined") {
    return str2;
  } else {
    return str1;
  }
}

/*
 * 입력필드 영문 숫자만 허용
 * @author :
 * @param  :
 * @return :
 */
function fnAlphaNum(target) {
  var target = "#" + target;
  var pattern = /[^(a-zA-Z0-9)]/; //영문, 숫자만 허용
  if (pattern.test($("" + target + "").val())) {
    alert("영문, 숫자만 허용 가능합니다.");
    $("" + target + "").val("");
    $("" + target + "").focus();
    return false;
  }

  return true;
}

/*
 * 입력필드 한글 영문 숫자만 허용
 * @author :
 * @param  :
 * @return :
 */
function fnTextAlphaNum(target) {
  var target = "#" + target;
  var pattern = /[^(가-힣a-zA-Z0-9)]/; //한글,영문,숫자만 허용
  if (pattern.test($("" + target + "").val())) {
    alert("한글, 영문, 숫자만 허용");
    $("" + target + "").val("");
    $("" + target + "").focus();
    return false;
  }
}

/*
 * 입력필드 영문 숫자 @ . 만 허용
 * @author :
 * @param  :
 * @return :
 */
function fnEmailAlphaNum(target) {
  var target = "#" + target;
  var pattern = /[^(a-zA-Z0-9@.)]/; //영문, 숫자, @ . 만 허용
  if (pattern.test($("" + target + "").val())) {
    alert("영문, 숫자, @ 만 허용");
    $("" + target + "").val("");
    $("" + target + "").focus();
    return false;
  }
}

/*
 * 한글입력 방지
 * @author :
 * @param  :
 * @return :
 */
function fnHangulChk(obj) {
  var id_pattern = new RegExp("[^a-zA-Z0-9]");
  if (id_pattern.test(obj.value)) {
    alert(comm_msg.COMM032);
    obj.value = "";
    return;
  }
}

/*
 * url 형식
 * @author :
 * @param  :
 * @return :
 */
function fnUrlChk(obj) {
  var id_pattern = new RegExp("[^a-zA-Z0-9:/-_?&.=]");
  if (id_pattern.test(obj.value)) {
    alert(comm_msg.COMM033);
    obj.value = "";
    return;
  }
}

/*
 * byte 체크후 byte 값 표시 및 byte 에 맞게 value 값 설정
 * @author :
 * @param  :
 * @return :
 */
function fnCheckGetByte(objName, idName, TempValue, maxLength) {
  var OrgText = "";
  var CharLength = 0;
  var OrgCharLength = 0;
  var OrgTextLength = 0;
  var NowLength = TempValue.length; // 현재 가져온 입력된 길이
  var lineFeedLength = TempValue.split("\n").length - 1;
  var OneCharacter = ""; // 한글자씩 넣어둘 임시 변수

  CharLength += lineFeedLength;
  // 저장된 길이와 같은지 비교
  if (NowLength > OrgTextLength) {
    // 저장된 길이 보다 많을 경우 초과된 부분만 비교
    for (var i = OrgTextLength; i < NowLength; i++) {
      // 한글자추출
      OneCharacter = TempValue.charAt(i);

      // 한글이면 2를 더한다.
      if (escape(OneCharacter).length > 4) {
        CharLength += 2;
      } else {
        // 그밗의 경우는 1을 더한다.
        CharLength++;
      }

      // 전체길이를 초과하면
      if (CharLength > maxLength) {
        alert(
          maxLength +
            " byte를 초과 입력할수 없습니다. \n초과된 내용은 자동으로 삭제 됩니다. "
        );
        objName.value = OrgText;
        if (idName != null && idName != "") {
          document.getElementById(idName).innerHTML = OrgCharLength;
        }
        return;
      } else {
        OrgText += OneCharacter;
        OrgTextLength = TempValue.length;
        OrgCharLength = CharLength;
      }
    }
  } else if (NowLength < OrgTextLength) {
    OrgText = "";
    CharLength = 0;
    // 저장된 길이보다 작은 경우 처음부터 검색
    for (var i = 0; i < NowLength; i++) {
      // 한글자추출
      OneCharacter = TempValue.charAt(i);

      // 한글이면 2를 더한다.
      if (escape(OneCharacter).length > 4) {
        CharLength += 2;
      } else {
        // 그밗의 경우는 1을 더한다.
        CharLength++;
      }

      OrgText += OneCharacter;
    }

    OrgTextLength = TempValue.length;
  }
  if (idName != null && idName != "") {
    document.getElementById(idName).innerHTML = CharLength;
  }
  return;
}

/**
 *
 * 오늘일자 기준으로 특정 요일 구하기
 *
 * @author	진영권
 * @since	2013-08-13
 * @returns	String
 */
function getStringDateYoIl(source) {
  // 0:일요일, 1:월요일, 2:화요일, 3:수요일, 4:목요일, 5:금요일, 6:토요일
  var setYoIl = 0;

  if (source != "undefined" || source != "" || source != null) {
    setYoIl = source;
  }

  var myToday = new Date();
  var myDate = new Date();

  myDate.setYear(myToday.getFullYear());
  myDate.setMonth(myToday.getMonth());
  myDate.setDate(myToday.getDate());
  myDate.setHours(0, 0, 0, 0);

  var setRequireDay = setYoIl;
  while (myDate.getDay() != setRequireDay) {
    //		alert( "DAY :: " + myDate.getDay());
    myDate.setDate(myDate.getDate() + 1);
  }

  return myDate;
}

/**
 *
 * 날짜 형태 변환
 *
 * @author	진영권
 * @since	2013-08-13
 * @returns	String
 */
function getStringDateByFlag(source, flag) {
  var returnSource = 0;
  var returnFalg = "-";

  if (source != "undefined" || source != "" || source != null) {
    returnSource = source;
  }

  if (flag != "undefined" || flag != "" || flag != null) {
    returnFalg = flag;
  }

  var flagDate = getStringDateYoIl(returnSource);

  var returnYean = flagDate.getFullYear();
  var returnMonth = flagDate.getMonth() + 1;
  var returnDate = flagDate.getDate();

  if (returnMonth < 10) {
    returnMonth = "0" + returnMonth;
  }

  return returnYean + returnFalg + returnMonth + returnFalg + returnDate;
}

/**
 *
 * 오늘일자 기준, 돌아오는 토요일 구하기
 *
 * @author	진영권
 * @since	2013-08-13
 * @returns	String
 */
function getStringDateSaturday() {
  return getStringDateByFlag(6, "-");
}

/**
 *
 * 오늘일자 기준, 돌아오는일요일 구하기
 *
 * @author	진영권
 * @since	2013-08-13
 * @returns	String
 */
function getStringDateSunday() {
  return getStringDateByFlag(0, "-");
}

/**
 * 인자로 넘어온 '월'이 '0'보다 작으면 '0'을 더한다
 *
 * @author	진영권
 * @since	2013-08-23
 * @returns	String
 */
//﻿﻿function setAddzero(n) {
//return n < 10 ? "0" + n: n;
//}

/**
 * 오늘 일자 기준으로 지난 일자를 구한다.
 *
 * @param n 월
 * @param m 년
 * @returns {String}
 */
function getStringBeforeDate(n, m) {
  var date = new Date();
  var resDate = new Date(Date.parse(date) - n * 1000 * 60 * 60 * 24);

  if (n < 10) {
    resDate.setMonth(resDate.getMonth() - n);
  }
  var yyyy = resDate.getFullYear();
  var mm = resDate.getMonth() + 1;
  var dd = resDate.getDate();

  return yyyy + "-" + setAddzero(mm) + "-" + setAddzero(dd);
}

/*
 * 년, 월, 일 날짜 셋팅 (selectBox)
 *
 * @author jaehun
 * @param : selectBox id(year)
 * @param : selectBox id(month)
 * @param : selectBox id(day)
 * ex) setDefaultSelectDate("birthYear", "birthMonth", "birthDay");
 */
function setDefaultSelectDate(year, month, day) {
  var yLen = 0;
  for (var i = 1900; i <= new Date().getFullYear(); i++) {
    $("#" + year).get(0).options[yLen] = new Option(i, i);
    yLen++;
  }
  var vMonth = "";
  for (var i = 1; i <= 12; i++) {
    if (i < 10) vMonth = "0" + i;
    else vMonth = i;
    $("#" + month).get(0).options[i - 1] = new Option(i, vMonth);
  }

  //dafault year
  $("#" + year).val("1980");

  var vDay = "";
  for (
    var i = 1;
    i <=
    new Date(
      $("#" + year + " option:selected").val(),
      $("#" + month + " option:selected").val(),
      0
    ).getDate();
    i++
  ) {
    if (i < 10) vDay = "0" + i;
    else vDay = i;
    $("#" + day).get(0).options[i - 1] = new Option(i, vDay);
  }

  $("#" + year + ", #" + month).change(function () {
    var lastDate = new Date(
      $("#" + year + " option:selected").val(),
      $("#" + month + " option:selected").val(),
      0
    );
    var lastDay = lastDate.getDate();

    $("#" + day).empty();
    for (var i = 1; i <= lastDay; i++) {
      if (i < 10) vDay = "0" + i;
      else vDay = i;
      $("#" + day).get(0).options[i - 1] = new Option(i, vDay);
    }
  });
}

/*
 * Input 입력키 막기 (현재 숫자만 처리되어 있음)
 *
 * @author jaehun
 * @param : objId > 다중적용은 , 로 구분
 * @param : inpGb > "number"
 * ime-mode를 반드시 disabled로 설정해야 함.
 * 예) style="ime-mode:disabled"
 */
function inpWrtBlc(objId, inpGb) {
  var arrObj = objId.split(",");
  $(function () {
    $.each(arrObj, function (idx, ref) {
      $("#" + $.trim(ref)).keydown(function (e) {
        if (inpGb == "number") {
          //e.altkey == true
          if (
            (e.keyCode < 48 || e.keyCode > 57) &&
            (e.keyCode < 96 || e.keyCode > 105) &&
            e.keyCode != 8 &&
            e.keyCode != 9 &&
            e.keyCode != 0
          )
            return false;
        }
      });
    });
  });
}

/*
 * Get Cookie
 *
 * @author jaehun
 * @param : name
 */
function getCookie(name) {
  var nameOfCookie = name + "=";
  var x = 0;
  while (x <= document.cookie.length) {
    var y = x + nameOfCookie.length;
    if (document.cookie.substring(x, y) == nameOfCookie) {
      if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
        endOfCookie = document.cookie.length;
      return unescape(document.cookie.substring(y, endOfCookie));
    }
    x = document.cookie.indexOf(" ", x) + 1;
    if (x == 0) break;
  }
  return "";
}

/*
 * Set Cookie
 *
 * @author jaehun
 * @param : name
 * @param : value
 * @param : expiredays 유지기간
 */
function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie =
    name +
    "=" +
    escape(value) +
    "; path=/; expires=" +
    todayDate.toGMTString() +
    ";";
}

/*
 * Clear Cookie
 *
 * @author jaehun
 * @param : name
 * @param : value
 * @param : expiredays 유지기간
 */
function clearCookie(name) {
  var expire_date = new Date();
  //어제 날짜를 쿠키 소멸 날짜로 설정한다.
  expire_date.setDate(expire_date.getDate() - 1);
  document.cookie =
    name + "= " + "; expires=" + expire_date.toGMTString() + "; path=/";
}

//input title 지정
function gfn_setInputTitle() {
  for (var i = 0; i < $("input").length; i++) {
    if ($("input").eq(i).attr("placeholder") != null) {
      $("input").eq(i).attr("title", $("input").eq(i).attr("placeholder"));
    } else if ($("input").eq(i).attr("value") != null) {
      $("input").eq(i).attr("title", $("input").eq(i).attr("value"));
    } else if ($("input").eq(i).text() != null) {
      $("input").eq(i).attr("title", $("input").eq(i).text());
    }
  }
}
/* undefined
 * @author :
 * @param  : value
 * @return : value or ''
 */
function isUndefined(data) {
  if (
    typeof data == "undefined" ||
    data == "" ||
    data == null ||
    data == "undefined"
  ) {
    data = "";
  }
  return data;
}

/* 문자열 스트링 포맷 변경
 * @author :
 * @param  : 20140808 ->2014-08-08
 * @return : value or ''
 */
function gfn_isStrFormat(str, format) {
  try {
    if (
      typeof str == "undefined" ||
      str == "" ||
      str == null ||
      str == "undefined"
    ) {
      str = "";
    } else {
      if (str.length == 6) {
        str =
          String(str.substring(0, 4)) + format + String(str.substring(4, 6));
      } else if (str.length == 8) {
        str =
          String(str.substring(0, 4)) +
          format +
          String(str.substring(4, 6)) +
          format +
          String(str.substring(6, 8));
      }
    }
  } catch (e) {
    str = "";
  }
  return str;
}

/* 현재일로부터 day만큼 증가한 날짜를 리턴
 * @author :
 * @param  : 20140808 ->2014-08-08
 * @return : value or ''
 */
function getCalDate(day) {
  var caledmonth, caledday, caledYear, returnDay;
  var loadDt = new Date();
  var v = new Date(Date.parse(loadDt) + day * 1000 * 60 * 60 * 24);

  caledYear = v.getFullYear();

  if (v.getMonth() < 9) {
    caledmonth = "0" + (v.getMonth() + 1);
  } else {
    caledmonth = v.getMonth() + 1;
  }

  if (v.getDate() < 9) {
    caledday = "0" + v.getDate();
  } else {
    caledday = v.getDate();
  }

  returnDay = caledYear + "-" + caledmonth + "-" + caledday;

  return returnDay;
}

function getCalUserDate(date, day) {
  var caledmonth, caledday, caledYear, returnDay;
  var loadDt = new Date(date);
  var v = new Date(Date.parse(loadDt) + day * 1000 * 60 * 60 * 24);

  caledYear = v.getFullYear();
  /*
	if( v.getMonth() < 9 ){
		caledmonth = '0'+(v.getMonth()+1);
	}else{
		caledmonth = v.getMonth()+1;
	}
*/
  caledmonth = lpad(v.getMonth() + 1, 2, "0");
  /*
	if( v.getDate() < 9 ){
		caledday = '0'+v.getDate();
	}else{
		caledday = v.getDate();
	}
	*/

  caledday = lpad(v.getDate(), 2, "0");

  returnDay = caledYear + "-" + caledmonth + "-" + caledday;

  return returnDay;
}

function fnCommonAjaxGet(actionUrl, paramObj, callBackFn) {
  if (actionUrl == "") {
    return;
  }

  $.ajax({
    url: actionUrl,
    type: "get",
    data: paramObj,
    dataType: "json",
    error: function (data) {},
    success: function (rtnData) {
      if (callBackFn) {
        //실행 후 callback function
        try {
          callBackFn(rtnData);
        } catch (e) {}
      }
    },
  });
}

function fnCommonAjaxPost(actionUrl, paramObj, callBackFn) {
  if (actionUrl == "") {
    return;
  }

  $.ajax({
    url: actionUrl,
    type: "post",
    data: paramObj,
    dataType: "json",
    error: function (data) {},
    success: function (rtnData) {
      if (callBackFn) {
        //실행 후 callback function
        try {
          callBackFn(rtnData);
        } catch (e) {}
      }
    },
  });
}

function gfn_callPostJsonData(url, data, callBackFn, syncType, useLoadingBar) {
  syncType = syncType == null ? true : syncType;

  $.ajax({
    url: url,
    type: "post",
    data: data,
    dataType: "json",
    async: syncType,
    cache: false,
    beforeSend: function () {
      if (useLoadingBar) {
        //$('.loading').addClass('active');
      }
    },
    error: function (request, status, error) {
      //alert("요청 처리 중 오류가 발생하였습니다.");
      //unblockUI();
      //$('.loading').removeClass('active');
    },
    success: function (rtnData) {
      //$('.loading').removeClass('active');
      if (callBackFn != null) callBackFn(rtnData);
    },
    complete: function () {
      //$('.loading').removeClass('active');
    },
  });
}

/**
 * @param obj
 * @returns {Boolean}
 */
function gfn_chkNvl(obj) {
  if (
    obj == null ||
    obj == "" ||
    obj == "undefined" ||
    obj == undefined ||
    (typeof obj == "string" && obj.trim() == "")
  ) {
    return true;
  } else {
    return false;
  }
}

function gfn_nvl(obj) {
  if (
    obj == null ||
    obj == "" ||
    obj == "undefined" ||
    obj == undefined ||
    (typeof obj == "string" && obj.trim() == "") ||
    obj == "null"
  ) {
    return "";
  } else {
    return obj;
  }
}

//숫자형태로 변환
function gfn_toInt(val) {
  if (gfn_chkNvl(val)) return 0;

  try {
    val = Number(val);
  } catch (e) {
    return 0;
  }

  return val;
}

// 날짜를 숫자형태로 변환
function gfn_dateToInt(val) {
  if (gfn_chkNvl(val)) return 0;

  try {
    if (typeof val == "string")
      val = val.replace(/-/gi, "").replace(/\//gi, "");
  } catch (e) {
    return 0;
  }

  return Number(val);
}

function gfn_msg(msg) {
  $("#alert_msg").text(msg);

  $("#div_alert_msg").modal({
    keyboard: false,
  });
}

function gfn_confirm(msg) {
  $("#alert_msg").text(msg);
  $("#div_alert_msg").dialog({
    draggable: false,
    modal: true,
    buttons: {
      OK: function () {
        $(this).dialog("close");
        gfn_confirmReturn(true);
      },
      CANCEL: function () {
        $(this).dialog("close");
        gfn_confirmReturn(false);
      },
    },
  });
}

function gfn_confirmReturn(flag) {
  return flag;
}

function fn_bpopup(url, wsize, hsize, layerId) {
  var elId = "#maskLayer";
  if (
    layerId != null &&
    layerId != undefined &&
    layerId != "undefined" &&
    layerId != ""
  ) {
    elId = "#" + layerId;
  }

  $(elId).css("width", wsize);
  $(elId).css("height", hsize);

  $(elId).bPopup({
    modalClose: false,
    speed: 200,
    transition: "slideDown",
    transitionClose: "slideBack",
    content: "iframe", //'ajax', 'iframe' or 'image'
    loadUrl: url, //Uses jQuery.load()
  });

  $(".b-iframe").css("width", wsize);
  $(".b-iframe").css("height", hsize);
}

/**
 * bpopup 오픈 후 document 높이에 맞게 resize
 * 자식창에서 함수 호출
 */
function fnBpAutoResize() {
  //console.log($(".wrap_pop").height());

  parent.$(".b-iframe").css("height", $(".wrap_pop").height());
  parent.$("#maskLayer").height($(".wrap_pop").height());
}

function fn_bClose(layerId) {
  var elId = "#maskLayer";
  if (
    layerId != null &&
    layerId != undefined &&
    layerId != "undefined" &&
    layerId != ""
  ) {
    elId = "#" + layerId;
  }

  var bPopup = $(elId).bPopup();
  bPopup.close();

  $(elId).html("");
}

/**
 * 팝업 창 열기
 * @param url
 * @param map1
 * @see #popupPostNew
 */
function fn_Popup(
  /** String */ url,
  /** Number */ w,
  /** Number */ h,
  /** String */ _WinName,
  /** String */ _FrmName,
  /** Map */ arg,
  vo
) {
  if (_WinName === undefined || _WinName == null) {
    _WinName = "_blank";
  }
  if (_FrmName === undefined || _FrmName == null) {
    _FrmName = "frmPopup";
  }

  fnComClosePopup(_WinName); // 기존 같은 이름의 팝업창을 닫는다.
  opt = getOptNewCenter(w, h); //센터 오픈
  arrWinHandle[_WinName] = window.open("", _WinName, opt);
  if (arrWinHandle[_WinName]) {
    arrWinHandle[_WinName].focus();
    fnPopupWindowThruPostNew(url, arg, _FrmName, _WinName, vo);
  }
  return arrWinHandle[_WinName];
}

/**
 * POST 방법으로 팝업창 띄우기 New 2014-07-29
 * 이전 방식을 알수 없음
 * @param url
 * @param map1
 * @see #popupPost
 */
function fnPopupWindowThruPostNew(
  /** String */ url,
  /** map */ arg,
  /** String */ frmName,
  /** String */ targetName,
  vo
) {
  var $frm = $("form[target=" + targetName + "]");
  if ($frm.length == 1) {
    $frm.remove();
  }

  var frm = document.createElement("form");
  for (var key in arg) {
    value = arg[key];
    var input =
      '<input type="hidden" name="' + key + '" value="' + value + '">';
    $(frm).append(input);
  }

  frm.setAttribute("name", frmName || vo);
  frm.setAttribute("action", url);
  frm.setAttribute("method", "post");
  frm.setAttribute("target", targetName);
  document.body.appendChild(frm);

  frm.submit();
}

//** ---------------------------------------------------------------------------
//함 수 명 : fnComClosePopup
//인    자 :
//		  1. pWinName : open windown name
//목    적 : 현재 열린 popup창을  닫는다.
//플 로 우 :
//검    수 :
//예   제  :
//생 성 일 :
//수    정 :
//** ---------------------------------------------------------------------------
function fnComClosePopup(pWinName) {
  if (typeof pWinName == "undefined") {
    // 전체 닫기
    for (var i in arrWinHandle) {
      // 현재 열려 있는 팝업창
      if (arrWinHandle[i] != null && typeof arrWinHandle[i].name == "string") {
        // 핸들이 존재하는 확인
        arrWinHandle[i].close();
        arrWinHandle[i] = null;
      }
    }
  } else {
    // 넘어온 object만 닫기
    if (
      arrWinHandle[pWinName] != null &&
      typeof arrWinHandle[pWinName].name == "string"
    ) {
      // 핸들이 존재하는 확인
      arrWinHandle[pWinName].close();
      arrWinHandle[pWinName] = null;
    }
  }
}

function getOptNewCenter(/** Number */ w, /** Number */ h) {
  var dualScreenLeft =
    window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop =
    window.screenTop != undefined ? window.screenTop : screen.top;
  var width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
  var height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;
  var left = width / 2 - w / 2 + dualScreenLeft;
  var top = height / 2 - h / 2 + dualScreenTop;

  var pos = "height=" + h + ",width=" + w + ",left=" + left + ",top=" + top;
  var opt =
    "location=no,directories=no,toolbar=no,status=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=no," +
    pos;
  return opt;
}

// 날짜 체크
function gfn_chkDate(date) {
  var dateVal = $(date).val();

  if (gfn_chkNvl(dateVal)) {
    //$(date).val(glbInputOrigVal);
    return false;
  }

  dateVal = gfn_dateToInt(dateVal) + "";

  if (!isNumberCheck(dateVal) || dateVal.length < 8) {
    gfn_msg(dateMsg1);
    $(date).val(glbInputOrigVal);
    return false;
  }

  dateVal =
    dateVal.substring(0, 4) +
    "-" +
    dateVal.substring(4, 6) +
    "-" +
    dateVal.substring(6, 8);

  if (!isDateCheck(dateVal)) {
    gfn_msg(dateMsg2);
    $(date).val(glbInputOrigVal);
    return false;
  }

  $(date).val(dateVal);

  return true;
}

function blockUINoTimeOut(
  /** String */ mesg,
  /** object of the css */ cssMap,
  /** Number */ timeout
) {
  var modFlag = false;

  if (
    window.parent &&
    window.parent != this &&
    $.trim(window.parent.$("#maskLayer").html()) != ""
  ) {
    modFlag = true;
  }

  if (window.parent && window.parent != this && modFlag == false) {
    window.parent.blockUINoTimeOut();
    return;
  }

  try {
    cssMap = cssMap || {
      backgroundColor: "#000",
      width: "0px",
      height: "0px",
      padding: "0px",
      border: "0px",
      position: "absolute",
      left: "48%",
      top: "40%",
    };

    $.blockUI({
      message: '<div id="loader-wrap" class="loading">Loading...</div>',
      fadeIn: 0,
      css: cssMap,
      overlayCSS: { backgroundColor: "#000", opacity: 0.8, cursor: "wait" },
      blockMsgClass: "blockMsg",
      timeout: 0,
    });
  } catch (e) {}
}

function unblockUINoTimeOut() {
  if (
    window.parent &&
    window.parent != this &&
    $.trim(window.parent.$("#maskLayer").html()) != ""
  ) {
    $.unblockUI();
    return;
  }

  if (window.parent && window.parent != this) {
    window.parent.unblockUI();
    return;
  }
}

function blockUI(
  /** String */ mesg,
  /** object of the css */ cssMap,
  /** Number */ timeout
) {
  // 상단 레이어 팝업인 경우 사용 안함
  if (
    window.parent &&
    window.parent != this &&
    $.trim(window.parent.$("#maskLayer").html()) != ""
  )
    return;

  // 사이드 레이어 팝업은 메인 화면 객체 호출
  if (window.parent && window.parent != this) {
    window.parent.blockUI();
    return;
  }

  try {
    cssMap = cssMap || {
      backgroundColor: "#000",
      width: "0px",
      height: "0px",
      padding: "0px",
      border: "0px",
      position: "absolute",
      left: "48%",
      top: "40%",
    };
    timeout = timeout || 60 * 1000;

    $.blockUI({
      message: '<div id="loader-wrap" class="loading">Loading...</div>',
      fadeIn: 0,
      css: cssMap,
      overlayCSS: { backgroundColor: "#000", opacity: 0.8, cursor: "wait" },
      blockMsgClass: "blockMsg",
    });

    setTimeout(unblockUI, timeout);
  } catch (e) {}
}

function blockUIThis(
  /** String */ mesg,
  /** object of the css */ cssMap,
  /** Number */ timeout
) {
  try {
    unblockUI();
    cssMap = cssMap || {
      backgroundColor: "#000",
      width: "0px",
      height: "0px",
      padding: "0px",
      border: "0px",
      position: "absolute",
      left: "48%",
      top: "40%",
    };
    timeout = timeout || 60 * 1000;

    $.blockUI({
      message: '<div id="loader-wrap" class="loading">Loading...</div>',
      fadeIn: 0,
      css: cssMap,
      overlayCSS: { backgroundColor: "#000", opacity: 0.8, cursor: "wait" },
      blockMsgClass: "blockMsg",
    });

    setTimeout(unblockUI, timeout);
  } catch (e) {}
}

function unblockUI() {
  // 상단 레이어 팝업인 경우 사용 안함
  if (
    window.parent &&
    window.parent != this &&
    $.trim(window.parent.$("#element_to_pop_up").html()) != ""
  )
    return;

  // 사이드 레이어 팝업은 메인 화면 객체 호출
  if (window.parent && window.parent != this) {
    window.parent.unblockUI();
    return;
  }

  $.unblockUI();

  //$(document).unbind('ajaxStart');
  //$(document).ajaxStart(blockUI);
}

//$(document).ajaxStart(blockUI);
//$(document).ajaxStop(unblockUI);

// 두 날짜 사이의 일자 구하기
function gfnGetTermDay(fromDay, toDay) {
  var f = fromDay.split("-");
  var fDate = new Date(f[0], Number(f[1]) - 1, f[2]);

  var t = toDay.split("-");
  var tDate = new Date(t[0], Number(t[1]) - 1, t[2]);

  return (tDate.getTime() - fDate.getTime()) / 1000 / 60 / 60 / 24;
}

///원본그리드에서 선택한 데이터를 타겟 그리드로 옮길때 (중복은 제외)
function fnAddGridData(ori, target) {
  var selRows = $("#" + ori).getGridParam("selarrrow");
  var selRows2 = $("#" + target).jqGrid("getDataIDs");

  for (var i = 0; i < selRows.length; i++) {
    var iCnt = 0;
    for (var j = 0; j < selRows2.length; j++) {
      if (selRows[i] == selRows2[j]) {
        iCnt++;
        break;
      }
    }

    if (iCnt == 0) {
      jQuery("#" + target).addRowData(
        selRows[i],
        jQuery("#" + ori).getRowData(selRows[i])
      );
    }
  }
}

/// 그리드에서 선택한 행 삭제
function fnDeleteGridRow(id) {
  var selRows = $("#" + id).getGridParam("selarrrow");
  var copyIds = $.extend(true, [], selRows);

  for (var i = 0; i < copyIds.length; i++) {
    $("#" + id).jqGrid("delRowData", copyIds[i]);
  }
}

function lpad(s, padLength, padString) {
  s += "";
  while (s.length < padLength) s = padString + s;
  return s;
}

function rpad(s, padLength, padString) {
  s += "";
  while (s.length < padLength) s += padString;
  return s;
}

/*
 * 날짜 형식인지 체크
 */
function isValidDateFormat(dt) {
  var dtStr = gfn_dateToInt(dt) + "";
  if (dtStr.length != 8) {
    return false;
  }

  var year = dtStr.substr(0, 4);
  var mon = dtStr.substr(4, 2);
  var day = dtStr.substr(6, 2);

  dtStr = year + "-" + mon + "-" + day;

  // 포맷에 안맞으면 false리턴
  if (!isDateFormat(dtStr)) {
    return false;
  }

  var month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var dateToken = dtStr.split("-");
  var year = Number(dateToken[0]);
  var month = Number(dateToken[1]);
  var day = Number(dateToken[2]);

  // 날짜가 0이면 false
  if (day == 0) {
    return false;
  }

  var isValid = false;

  // 윤년일때
  if (isLeaf(year)) {
    if (month == 2) {
      if (day <= month_day[month - 1] + 1) {
        isValid = true;
      }
    } else {
      if (day <= month_day[month - 1]) {
        isValid = true;
      }
    }
  } else {
    if (day <= month_day[month - 1]) {
      isValid = true;
    }
  }

  return isValid;
}

function fnGetAjaxData(pUrl, pData, pCallBackFn) {
  try {
    var sData = null;

    if (typeof pData == "object") {
      sData = pData;
    } else {
      sData = $("#" + pData).serialize();
    }
    $.ajax({
      dataType: "json",
      type: "POST",
      url: pUrl,
      data: sData,
      async: true,
      cache: false,
      beforeSend: function () {},
      success: function (data, status, request) {
        pCallBackFn(data);
      },
      complete: function () {},
      error: function (data, status, error) {},
    });
  } catch (e) {}
}

function fnGetSyncAjaxData(pUrl, pData, pCallBackFn) {
  try {
    var sData = null;
    if (typeof pData == "object") {
      sData = pData;
    } else {
      sData = $("#" + pData).serialize();
    }
    $.ajax({
      dataType: "json",
      type: "POST",
      url: pUrl,
      data: sData,
      async: false,
      cache: false,
      beforeSend: function () {},
      success: function (data, status, request) {
        pCallBackFn(data);
      },
      complete: function () {},
      error: function (data, status, error) {
        alert("요청 처리 중 오류가 발생하였습니다.");
      },
    });
  } catch (e) {
    alert("요청 처리 중 오류가 발생하였습니다.");
  }
}

function fnFileAjaxData(pUrl, fName, pCallBackFn) {
  try {
    $("#" + fName)
      .ajaxForm({
        dataType: "json",
        type: "POST",
        url: pUrl,
        async: true,
        cache: false,
        beforeSend: function () {},
        success: function (data, status, request) {
          pCallBackFn(data);
        },
        complete: function () {},
        error: function (data, status, error) {
          alert("요청 처리 중 오류가 발생하였습니다.");
        },
      })
      .submit();
  } catch (e) {
    alert("요청 처리 중 오류가 발생하였습니다.");
  }
}

// 이미지 미리 보기 및 속성 반환
function fnPreviewImg(input, imgArea) {
  var info = {};

  try {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $("#" + imgArea).attr("src", e.target.result);
        $("#" + imgArea).show();
      };

      reader.readAsDataURL(input.files[0]);

      info["name"] = input.files[0].name;
      info["type"] = input.files[0].type;
      info["size"] = input.files[0].size;
    }
  } catch (e) {}

  return info;
}

// 동영상 속성 반환
function fnChkVideo(input, playTimeObj) {
  var info = {};

  try {
    if (input.files && input.files[0]) {
      gvarPlayTimeObj = playTimeObj;

      var file = input.files[0];
      var type = file.type;
      var videoObj = $("#layer_chk_video")[0];
      var canPlay = videoObj.canPlayType(type);
      if (canPlay === "") {
        info["canPlay"] = "N";
      } else {
        info["canPlay"] = "Y";
      }

      info["name"] = file.name;
      info["type"] = type;
      info["size"] = file.size;

      var fileURL = window.URL.createObjectURL(file);
      gvarFileURL = fileURL;
      $("#layer_chk_video").attr("src", fileURL);
    }
  } catch (e) {}

  return info;
}

var gvarFileURL;
function fnGetFileURL() {
  return gvarFileURL;
}

function cutStr(str, limit) {
  var strLength = 0;
  var strTitle = "";
  var strPiece = "";

  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    var ch = str.substr(i, 1).toUpperCase();
    //체크 하는 문자를 저장
    strPiece = str.substr(i, 1);

    code = parseInt(code);

    if (
      (ch < "0" || ch > "9") &&
      (ch < "A" || ch > "Z") &&
      (code > 255 || code < 0)
    ) {
      strLength = strLength + 3; //UTF-8 3byte 로 계산
    } else {
      strLength = strLength + 1;
    }

    if (strLength > limit) {
      //제한 길이 확인
      break;
    } else {
      strTitle = strTitle + strPiece; //제한길이 보다 작으면 자른 문자를 붙여준다.
    }
  }
  return strTitle;
}

// 문자열 길이(byte)
function fnGetStringByte(str) {
  return str.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length;
}

//콤마찍기
function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

//콤마풀기
function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, "");
}

function fnGoPage(url) {
  location.href = url;
}

function fnCallParentFunc(funcNm) {
  try {
    // 활성 frame 찾기
    var activeFrame = parent
      .$("#contents > div[aria-hidden=false] > iframe")
      .attr("id");
    eval("parent.$('#" + activeFrame + "').get(0).contentWindow." + funcNm);
  } catch (e) {}
}

function onlyIP(obj) {
  obj.value = obj.value.replace(/[^0-9\.]/gi, "");
}

function onlyNum(obj) {
  obj.value = obj.value.replace(/[^0-9]/gi, "");
}

function phoneNum(obj) {
  obj.value = obj.value.replace(/[^0-9\-]/gi, "");
}

function emailType(obj) {
  obj.value = obj.value.replace(/[^(a-zA-Z0-9@.)]/gi, "");
}

// 입력값 초기화
function gfnResetValue() {
  // input 초기화
  $(".body input").not("[type=submit]").val("");

  // textarea 초기화
  $(".body textarea").val("");

  // select 초기화
  $(".body select").bindSelectSetValue("");
}

// ie 브라우저 확인
function gfnChkIeBrowser() {
  var agent = navigator.userAgent.toLowerCase(),
    name = navigator.appName;

  // MS 계열 브라우저를 구분하기 위함.
  if (
    name === "Microsoft Internet Explorer" ||
    agent.indexOf("trident") > -1 ||
    agent.indexOf("edge/") > -1
  ) {
    return true;
  } else {
    return false;
  }
}

function phoneFormat(obj) {
  try {
    var reObj = obj
      .replace(/[^0-9]/g, "")
      .replace(
        /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
        "$1-$2-$3"
      )
      .replace("--", "-");

    if (reObj == "") {
      reObj = obj;
    }
    return reObj;
  } catch (e) {
    return obj;
  }
}

function fnOnlyNum(e) {
  var e = e || window.event;
  var keyCode = e.which ? e.which : e.keyCode;

  if (keyCode == 8 || keyCode == 46 || keyCode == 37 || keyCode == 39) {
    return;
  } else {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  }
}

function fnParseNum(val) {
  try {
    return Number(val);
  } catch (e) {
    return 0;
  }
}

function fn_totalSearch() {
  var searchTypeLabel = $(".searchTypeLabel").eq(0).text();

  if (searchTypeLabel == "축제") {
    document.totalSearchForm.submit();
  } else {
    var totalSearchText = $("#totalSearchText").val();
    if (searchTypeLabel == "전체") {
      location.href =
        "https://korean.visitkorea.or.kr/search/search_list.do?keyword=" +
        totalSearchText;
    } else if (searchTypeLabel == "여행정보") {
      location.href =
        "https://korean.visitkorea.or.kr/search/search_list.do?tab=1&keyword=" +
        totalSearchText;
    } else if (searchTypeLabel == "여행기사") {
      location.href =
        "https://korean.visitkorea.or.kr/search/search_list.do?tab=2&keyword=" +
        totalSearchText;
    } else if (searchTypeLabel == "이벤트") {
      location.href =
        "https://korean.visitkorea.or.kr/search/search_list.do?tab=5&keyword=" +
        totalSearchText;
    }
  }
}

function fn_totalSearch2(formName, totalSearchTextId) {
  var searchTypeLabel = $(".searchTypeLabel").eq(0).text();

  if (searchTypeLabel == "축제") {
    if (formName == "totalSearchForm") {
      document.totalSearchForm.submit();
    } else {
      document.totalSearchFormInner.submit();
    }
  } else {
    var totalSearchText = $("#" + totalSearchTextId).val();
    if (searchTypeLabel == "전체") {
      location.href =
        "https://korean.visitkorea.or.kr/search/search_list.do?keyword=" +
        totalSearchText;
    } else if (searchTypeLabel == "여행정보") {
      location.href =
        "https://korean.visitkorea.or.kr/search/search_list.do?tab=1&keyword=" +
        totalSearchText;
    } else if (searchTypeLabel == "여행기사") {
      location.href =
        "https://korean.visitkorea.or.kr/search/search_list.do?tab=2&keyword=" +
        totalSearchText;
    } else if (searchTypeLabel == "이벤트") {
      location.href =
        "https://korean.visitkorea.or.kr/search/search_list.do?tab=5&keyword=" +
        totalSearchText;
    }
  }
}
