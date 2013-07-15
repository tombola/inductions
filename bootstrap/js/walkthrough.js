currentstage = $('.nav-list li.active');
currentstage = $('.nav-list li').index(currentstage);

var restart = getQueryVar('restart');

if (restart) {
  // restart induction
  createCookie('fxinduct_stage', 0);
  stage = 0;
} else {
  // no restart
  stage = getCookie('fxinduct_stage');
}

if (stage < currentstage) {
  stage = currentstage;
}
createCookie('fxinduct_stage', stage);

//$('#instructions').prepend('<p>currentstage:'+currentstage+' stage:'+stage+'</p>');

boundary = stage + 1;

$(".nav-list > li:gt("+boundary+") > a").removeAttr("href");
$(".nav-list > li:lt("+(boundary+1)+")").removeClass("inactive").addClass('viewed');

$('.vimeo-embed').attr('width', 300);
$('.vimeo-embed').attr('height', 215);
//$(".nav-list .active").removeAttr("href").addClass('bar');