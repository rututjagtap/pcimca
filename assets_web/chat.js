window.addEventListener('load', async function (event) {
    var head = document.getElementsByTagName('head')[0];
    var cssId = '__chatBotCss';
    if (!document.getElementById(cssId)) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = window.location.protocol + '//eechat.extraaedge.com/css/mitadt/StyleSheet.css';
        link.type = 'text/css';
    }
    head.appendChild(link);
    var cssFilesArr = ["https://chatbotprod.blob.core.windows.net/web/mitaoecss/cmp/emoji.cmp.css","https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.css","//code.jquery.com/jquery-2.1.1.min.js","https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js","https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"]

    for (var x = 0; x < cssFilesArr.length; x++) {
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", cssFilesArr[x]);
        head.appendChild(fileref);
    }
    var markUpscript = document.createElement('script');
    markUpscript.type = 'text/javascript';
    markUpscript.src = window.location.protocol + '//unpkg.com/markdown-it/dist/markdown-it.min.js';
    head.appendChild(markUpscript);


   const clientInfo = {
        "clientId": "82756821-825b-4545-ab79-402242e2defc",
        "clientAlias":"mitadt"
    }
    const loadChatBotScript = () => {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        //script.src = window.location.protocol + '//eechat-swap.extraaedge.com/js/chatbot.min.js';//window.location.protocol + '//chatbot.extraaedge.com/js/chatbot.min.js';
        //script.src = 'https://chatbotprod.blob.core.windows.net/web/minified/cmp/chatbot.min_25012023.js';
        script.src = 'https://chatbotprod.blob.core.windows.net/web/minified/cmp/chatbot.min_01022023.js';
        script.onload = function () {
            eeChatBot.init(clientInfo.clientAlias, clientInfo.clientId);
            var eechatIconElement = document.getElementById('__eechatIcon');
        }
        head.appendChild(script);
    }
    const eeChatBotEnglishJsonUrl = 'https://chatbotprod.blob.core.windows.net/staticfiles/mitadt/chatbot/content/english.json';
    
    fetch(eeChatBotEnglishJsonUrl)
        .then(res => res.json()).then(data => {
            window.eeChatBotEnglish = data;
            loadChatBotScript();
    
        }).catch(err => {
            console.log(err)
            window.eeChatBotEnglish = {}
            loadChatBotScript();
        });
    if (!window.jQuery) {
        await addScript("https://code.jquery.com/jquery-1.11.3.min.js", head, async function () {
           await eeLoadRequiredJS();
        });
    }else{
        eeLoadRequiredJS();
    }
});
async function eeLoadRequiredJS(){
    var head = document.getElementsByTagName('head')[0];
    var jsFilesArr = [
        "https://chatbotprod.blob.core.windows.net/web/mitaoecss/cmp/config.cmp.js", 
		"https://chatbotprod.blob.core.windows.net/web/mitaoecss/cmp/util.cmp.js", 
		"https://chatbotprod.blob.core.windows.net/web/mitaoecss/cmp/jquery.emojiarea.cmp.js",
		"https://chatbotprod.blob.core.windows.net/web/mitaoecss/cmp/emoji-picker.cmp.js"
    ];
	var loadedJSCount=0;
    for (var x = 0; x < jsFilesArr.length; x++) {
        await addScript(jsFilesArr[x], head,function(){
			loadedJSCount++;
			if(loadedJSCount>=jsFilesArr.length){	
				setTimeout(function () {
					window.emojiPicker = new EmojiPicker({
						emojiable_selector: '[data-emojiable=true]',
						assetsPath: 'https://eequeuestorage.blob.core.windows.net/staticfiles/miscellaneous/emoji/img',
						popupButtonClasses: 'fa fa-smile-o'
					});					
				},10000);	
				
			}
		});
    }
    
}
function IsMobileDevice() {
    let isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }
    return isMobile;
}

function addScript(url, head, onLoadHandler) {
    var jsfileref = document.createElement('script');
    jsfileref.setAttribute("type", "text/javascript");
    jsfileref.setAttribute("src", url);
    if (!!onLoadHandler) {
        jsfileref.onload = onLoadHandler;
    }
    head.appendChild(jsfileref);
}