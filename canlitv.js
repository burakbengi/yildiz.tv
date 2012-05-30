// version MASTER BRANCH NIGHTLY
ver = 'https://github.com/burakbengi/yildiz.tv/blob/master/canlitv.js';

// delete google element
_gaq = 0;

//get loginbox
var div = document.getElementsByClassName("box");

//insert vplayer
div[0].innerHTML = "<div class='tv_logos'><a class='tv_chan sel' href='javascript:changeChannel(\"canlintv\");void(0)' id='canlintv' title='canlintv'><img src='Apps/nartv/cssjs/imgs/tv/tv_canlintv.jpg' alt='canlintv'></a><a class='tv_chan' href='javascript:changeChannel(\"ntvspor\");void(0)' id='ntvspor' title='NTV Spor'><img src='Apps/nartv/cssjs/imgs/tv/tv_ntvspor.jpg' alt='NTV Spor'></a><a class='tv_chan' href='javascript:changeChannel(\"canliatv\");void(0)' id='canliatv' title='canliatv'><img src='Apps/nartv/cssjs/imgs/tv/tv_canliatv.jpg' alt='canliatv'></a><a class='tv_chan' href='javascript:changeChannel(\"tmbtv\");void(0)' id='tmbtv' title='TMB'><img src='Apps/nartv/cssjs/imgs/tv/tv_tmbtv.jpg' alt='TMB'></a><a class='tv_chan' href='javascript:changeChannel(\"kanala\");void(0)' id='kanala' title='Kanal A'><img src='Apps/nartv/cssjs/imgs/tv/tv_kanala.jpg' alt='Kanal A'></a><a class='tv_chan' href='javascript:changeChannel(\"haberturk\");void(0)' id='haberturk' title='Haber Turk'><img src='Apps/nartv/cssjs/imgs/tv/tv_haberturk.jpg' alt='Haber Turk'></a><a class='tv_chan' href='javascript:changeChannel(\"kanalturk\");void(0)' id='kanalturk' title='Kanal Turk'><img src='Apps/nartv/cssjs/imgs/tv/tv_kanalturk.jpg' alt='Kanal Turk'></a><a class='tv_chan' href='javascript:changeChannel(\"skyturk\");void(0)' id='skyturk' title='SKY Turk'><img src='Apps/nartv/cssjs/imgs/tv/tv_skyturk.jpg' alt='SKY Turk'></a><a class='tv_chan' href='javascript:changeChannel(\"cnbce\");void(0)' id='cnbce' title='cnbce'><img src='Apps/nartv/cssjs/imgs/tv/tv_cnbce.jpg' alt='cnbce'></a><a class='tv_chan' href='javascript:changeChannel(\"tntturk\");void(0)' id='tntturk' title='tntturk'><img src='Apps/nartv/cssjs/imgs/tv/tv_tntturk.jpg' alt='tntturk'></a><a class='tv_chan' href='javascript:changeChannel(\"foxtv\");void(0)' id='foxtv' title='foxtv'><img src='Apps/nartv/cssjs/imgs/tv/tv_foxtv.jpg' alt='foxtv'></a><a class='tv_chan' href='javascript:changeChannel(\"blumberg\");void(0)' id='blumberg' title='blumberg'><img src='Apps/nartv/cssjs/imgs/tv/tv_blumberg.jpg' alt='blumberg'></a><a class='tv_chan' href='javascript:changeChannel(\"eurod\");void(0)' id='eurod' title='KANALD EURO'><img src='Apps/nartv/cssjs/imgs/tv/tv_eurod.jpg' alt='KANALD EURO'></a><a class='tv_chan' href='javascript:changeChannel(\"euros\");void(0)' id='euros' title='EURO STAR'><img src='Apps/nartv/cssjs/imgs/tv/tv_euros.jpg' alt='EURO STAR'></a><a class='tv_chan' href='javascript:changeChannel(\"trt1\");void(0)' id='trt1' title='TRT 1'><img src='Apps/nartv/cssjs/imgs/tv/tv_trt1.jpg' alt='TRT 1'></a><a class='tv_chan' href='javascript:changeChannel(\"trtavaz\");void(0)' id='trtavaz' title='TRT AVAZ'><img src='Apps/nartv/cssjs/imgs/tv/tv_trtavaz.jpg' alt='TRT AVAZ'></a><a class='tv_chan' href='javascript:changeChannel(\"trt3\");void(0)' id='trt3' title='trt3'><img src='Apps/nartv/cssjs/imgs/tv/tv_trt3.jpg' alt='trt3'></a><a class='tv_chan' href='javascript:changeChannel(\"kanal7\");void(0)' id='kanal7' title='Kanal 7'><img src='Apps/nartv/cssjs/imgs/tv/tv_kanal7.jpg' alt='Kanal 7'></a><a class='tv_chan' href='javascript:changeChannel(\"cine5\");void(0)' id='cine5' title='CINE 5'><img src='Apps/nartv/cssjs/imgs/tv/tv_cine5.jpg' alt='CINE 5'></a><a class='tv_chan' href='javascript:changeChannel(\"yumurcak\");void(0)' id='yumurcak' title='YUMURCAK'><img src='Apps/nartv/cssjs/imgs/tv/tv_yumurcak.jpg' alt='YUMURCAK'></a><a class='tv_chan' href='javascript:changeChannel(\"flash\");void(0)' id='flash' title='Flash'><img src='Apps/nartv/cssjs/imgs/tv/tv_flash.jpg' alt='Flash'></a><a class='tv_chan' href='javascript:changeChannel(\"canlitv8\");void(0)' id='canlitv8' title='canlitv8'><img src='Apps/nartv/cssjs/imgs/tv/tv_canlitv8.jpg' alt='canlitv8'></a><a class='tv_chan' href='javascript:changeChannel(\"tv24\");void(0)' id='tv24' title='TV 24'><img src='Apps/nartv/cssjs/imgs/tv/tv_tv24.jpg' alt='TV 24'></a><a class='tv_chan' href='javascript:changeChannel(\"samanyolu\");void(0)' id='samanyolu' title='SAMANYOLU'><img src='Apps/nartv/cssjs/imgs/tv/tv_samanyolu.jpg' alt='SAMANYOLU'></a><a class='tv_chan' href='javascript:changeChannel(\"kraltvavrupa\");void(0)' id='kraltvavrupa' title='Kral TV Avrupa'><img src='Apps/nartv/cssjs/imgs/tv/tv_kraltvavrupa.jpg' alt='Kral TV Avrupa'></a><a class='tv_chan' href='javascript:changeChannel(\"power\");void(0)' id='power' title='POWER TÜRK'><img src='Apps/nartv/cssjs/imgs/tv/tv_power.jpg' alt='POWER TÜRK'></a><a class='tv_chan' href='javascript:changeChannel(\"beyaz\");void(0)' id='beyaz' title='BEYAZ TV'><img src='Apps/nartv/cssjs/imgs/tv/tv_beyaz.jpg' alt='BEYAZ TV'></a><a class='tv_chan' href='javascript:changeChannel(\"trtcocuk\");void(0)' id='trtcocuk' title='trtcocuk'><img src='Apps/nartv/cssjs/imgs/tv/tv_trtcocuk.jpg' alt='trtcocuk'></a><a class='tv_chan' href='javascript:changeChannel(\"kidz\");void(0)' id='kidz' title='kidz'><img src='Apps/nartv/cssjs/imgs/tv/tv_kidz.jpg' alt='kidz'></a><a class='tv_chan' href='javascript:changeChannel(\"akilli\");void(0)' id='akilli' title='AKILLI TV'><img src='Apps/nartv/cssjs/imgs/tv/tv_akilli.jpg' alt='AKILLI TV'></a><a class='tv_chan' href='javascript:changeChannel(\"idmanaz\");void(0)' id='idmanaz' title='Idman Azerbaijan'><img src='Apps/nartv/cssjs/imgs/tv/tv_idmanaz.jpg' alt='Idman Azerbaijan'></a><div class='clear'></div><div class='line1px'></div></div><div id='dvrTop'><div id='dvrShare'><div> Hemen ana direkt link: <input name='sharelinkfld' onclick='this.select()' id='sharelinkfld' value='http://www.yildiz.tv/?act=dvr&amp;chan=canlintv&amp;seekTime=25-04-2012 18:34' type='text'></div><div class='dvrShareIcons'><div> Su ani paylas: <a id='fbShareButton' href='http://www.facebook.com/sharer.php?u=http://www.yildiz.tv/%3Fact%3Ddvr%26chan%3Dcanlintv%26seekTime%3D25-04-2012%2018:34&amp;t=canlintv' target='_blank'><img src='Apps/nartv/cssjs/imgs/logo_FB2.png' alt='FaceBook' align='absmiddle' width='55' height='20'></a></div><a href='http://twitter.com/share' class='twitter-share-button' data-count='none'>Tweet</a></div><div class='vert_sep'><img src='Apps/nartv/cssjs/imgs/vertical_separator.png' align='absmiddle' width='11' height='26'></div></div><div id='chanLogo'><img id='kazim' src='Apps/nartv/cssjs/imgs/tv/tv_canlintv.jpg' alt='' align='absmiddle' width='43'></div><div id='chanSwitch'> Tüm Kanallar </div></div><div style='width:987px; margin:auto;'><div id='video_container' style='width:640px; float:left'> <div id='myContent'> <p>Please update your flash player <br /><br /> <a href='http://www.adobe.com/go/EN_US-H-GET-FLASH'>	 <img width='158' height='39' alt='Get Adobe Flash Player' src='http://www.adobe.com/images/shared/download_buttons/get_adobe_flash_player.png'/></a></p></div></div><div style='float:left; width:345px; text-align:left;'><div id='form_prog' style=''><div class='flds_new'><ul></ul></div><script> function dateChange(date){ $('#form_prog').load('/dvr_getfile.php?mode=prog_print&chan=canlintv&date='+date, {limit: 25}, function(){ }); } function colorizeProg() { $('.prog_item:odd').css({background:'#f6f6f6'}); } </script></div></div></div><div class='clear'></div><div class='timeLine' style='margin-left:6px; '>	<div id='myContent2'><p>Please update your flash player<a href='http://www.adobe.com/go/EN_US-H-GET-FLASH'><img width='158' height='39' alt='Get Adobe Flash Player' src='http://www.adobe.com/images/shared/download_buttons/get_adobe_flash_player.png'/></a></p></div></div><div class='clear'>&nbsp;</div></div>"; 

//normalize padding (-pad)
div[0].style.padding = 0
	
function getFlashMovie(movieName) {
	var isIE = navigator.appName.indexOf("Microsoft") != -1;   
	return (isIE) ? window[movieName] : document[movieName];  
}  

function timeOut()
{
	document.location = "?act=inc&p=emigrant&chan=canlintv";
}

var flashvars = {	"chan":"canlintv"
					,"dvrServer":"rtmp://edge1-1.nar.tv/dvrh264/canlintv"
					,"aspect":"","domain":"http://www.yildiz.tv/"
					,"lnktime":"Hemen ana direkt link"
					,"hideLogo":"true"
					,"mp4Prefix":"mp4:"
				};
var params = {"allowFullScreen":true,"wmode":"opaque","allowScriptAccess":"always"};
var attributes = { id: "dvr_player", name: "dvr_player" };
 

swfobject.embedSWF("dvr/dvrGoogle16.swf?v=1.6b", "myContent", "640", "510", "10.0.0", false, flashvars, params, attributes);



var flashvars = {"chan":"canlintv","lang":"tr","domain":"http://www.yildiz.tv/"
};
var params = {};
var attributes = { id: "timeline", name: "timeline" };
 
 
 
swfobject.embedSWF("dvr/timer/timelineNar.swf?v=0.3", "myContent2", "987", "170", "10.0.0", false, flashvars, params, attributes);

function playPause()
{
	getFlashMovie("dvr_player").playPause();
}

var dvr_stats 		= {};
function dvr_isPlaying(playing)
{
	dvr_stats.playing	= playing;

}



function time(time,date,live)
{
		
	getFlashMovie("timeline").setTime(time,date);
	
	var mins = time.substr(0,5);
	

	if(dvr_stats.mins != mins){
		dvr_stats.mins		= mins;
		dvr_stats.date 		= date;
		dvr_stats.live 		= live;
		dvr_stats.time 		= time;
		updateLinks();	
	}
}


function updateLinks()
{
	setShareLink(dvr_stats.date,dvr_stats.mins);
	setTimeLink(dvr_stats.date,dvr_stats.mins);
	setCalPlayingLink(dvr_stats.date);
	setActiveProgram(dvr_stats.mins);	
}

var selected_prog_id = 0;
function setActiveProgram(time)
{
	var progDiv = $("#form_prog");
	if (!progDiv)
		return false;
		
	var tm = String(time);
	tm = tm.replace(":", "")
	$.each($(".prog_item"), function(key,val){
		$(val).removeClass("prog_selected");
		if (Number($(val).attr("mns")) <= Number(tm) && Number($($(".prog_item")[key+1]).attr("mns")) > Number(tm)){
			$(val).addClass("prog_selected");
			$("#form_prog").scrollTop((key*$(val).height())-($("#form_prog").height()/2));
			

			var prog_id = $(this).attr("progid");
			var fbFrame	= $("#fbStream");

			if(fbFrame && prog_id && (prog_id != selected_prog_id))
			{						
				$(fbFrame).attr("src","http://www.facebook.com/plugins/live_stream_box.php?app_id=139184372795805&width=1000&height=400&xid="+prog_id+"&locale=tr_TR");
				selected_prog_id = prog_id;

				$(fbFrame).load(function() {
					$(fbFrame).show();
				})
			}
		}
	})
}

function setCalPlayingLink(date)
{

	$("#timelineCal").find(".timelinePlaying").removeClass("timelinePlaying");
	$(".timelineDay[dtfl='"+date+"']").addClass("timelinePlaying");
}

function setTimeLink(date,time)
{
	if($("#sharelinkfld"))
	{
		var url = "http://www.yildiz.tv/";
		$("#sharelinkfld").val(url+"?act=dvr&chan=canlintv&seekTime="+date+" "+time);
	}
}		

function setShareLink(date,time)
{
	var url = "http://www.yildiz.tv/";
	var shareLink = url+"%3Fact%3Ddvr%26chan%3Dcanlintv%26seekTime%3D"+date+"%20"+time;
	$("#fbShareButton").attr("href","http://www.facebook.com/sharer.php?u="+shareLink+"&t=canlintv");
}


function reloadDays(date)
{	
	getFlashMovie("timeline").reloadDays(date);
}


function realSeek(time)
{

	getFlashMovie("dvr_player").realSeek(time);	
}


function fullSeek(time)
{
	getFlashMovie("dvr_player").fullSeek(time);	
}

function chanSwitcher(){
	$('.tv_logos').toggle();	
}

$(function(){
	$('#chanSwitch').click(function(){chanSwitcher()});
})

$('.tv_chan').css({background:'#ffffff'});

function mySelectionChange(DOMElementID){
	console.log(DOMElementID);
	DOMElement = document.getElementById(DOMElementID);
	$('.tv_chan').removeClass('sel');
	if(DOMElement.className){
		DOMElement.className = DOMElement.className + ' sel';
	}
	return DOMElement;
}

function mydateChange(date, Channel){			
	$('#form_prog').load('/dvr_getfile.php?mode=prog_print&chan='+ Channel +'&date='+date, {limit: 25});	
}
function colorizeProg()
{
	$('.prog_item:odd').css({background:'#f6f6f6'});
}

// propogate todays list
var d=new Date();
var n=d.toISOString(); 
var curr_day = n.substr(0, 10);

mydateChange(curr_day,"canlintv");

function changeChannel (Channel){

	var rtmp_server_sub = "origin2";
	switch (Channel){
		case "canlintv":
			rtmp_server_sub = "edge1-1";
			break;
		case "trt1":
			rtmp_server_sub = "edge1-1";
			break;
		case "canliatv":
			rtmp_server_sub = "edge1-1";
			break;
		case "kanalturk":
			rtmp_server_sub = "edge1-1";
			break;
		case "eurod":
			rtmp_server_sub = "origin3";
			break;
		case "ntvspor":
			rtmp_server_sub = "origin3";
			break;
		case "tntturk":
			rtmp_server_sub = "edge1-1";
			break;
		case "blumberg":
			rtmp_server_sub = "edge1-1";
			break;
		case "trtavaz":
			rtmp_server_sub = "edge1-1";
			break;
		case "trt3":
			rtmp_server_sub = "edge1-1";
			break;
		case "kanal7":
			rtmp_server_sub = "edge1-1";
			break;
		case "tv24":
			rtmp_server_sub = "origin3";
			break;
		case "samanyolu":
			rtmp_server_sub = "origin3";
			break;
		case "beyaz":
			rtmp_server_sub = "origin3";
			break;
		case "trtcocuk":
			rtmp_server_sub = "origin3";
			break;
		case "kidz":
			rtmp_server_sub = "origin3";
			break;
		case "akilli":
			rtmp_server_sub = "origin3";
			break;
		case "idmanaz":
			rtmp_server_sub = "edge1-1";
			break;
		default:
			rtmp_server_sub = "origin2";
			break;
	}
	
	document.getElementById("video_container").innerHTML = "<div id='myContent'></div>"

	document.getElementsByClassName("timeLine")[0].innerHTML = "<div id='myContent2'></div>"
	
	var flashvars = {	"chan": Channel
						,"dvrServer":"rtmp://" + rtmp_server_sub + ".nar.tv/dvrh264/" + Channel
						,"aspect":"","domain":"http://www.yildiz.tv/"
						,"lnktime":"Hemen ana direkt link"
						,"hideLogo":"true"
						,"mp4Prefix":"mp4:"
					};
	var params = {"allowFullScreen":true,"wmode":"opaque","allowScriptAccess":"always"};
	var attributes = { id: "dvr_player", name: "dvr_player" };
	 

	swfobject.embedSWF("dvr/dvrGoogle16.swf?v=1.6b", "myContent", "640", "510", "10.0.0", false, flashvars, params, attributes);



	var flashvars = {"chan": Channel,"lang":"tr","domain":"http://www.yildiz.tv/"
	};
	var params = {};
	var attributes = { id: "timeline", name: "timeline" };
	 
	document.getElementById("kazim").src = "Apps/nartv/cssjs/imgs/tv/tv_" + Channel + ".jpg";
	document.getElementById("kazim").alt = Channel;
	 
	swfobject.embedSWF("dvr/timer/timelineNar.swf?v=0.3", "myContent2", "987", "170", "10.0.0", false, flashvars, params, attributes);
	// change right_tv_box date
	mydateChange(curr_day, Channel);
	// log into console
	// console.log(Channel);
	
	//normalize padding (-pad)
	div[0].style.padding = 0
	
	// glow selection
	mySelectionChange(Channel);

}


