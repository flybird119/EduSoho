define(function(require, exports, module) {

    exports.create = function(object) {

        function contains(arr, str) {
            var i = arr.length;
            while (i--) {
               if (arr[i] === str) {
               return true;
               }
            }
            return false;
        }

        var select=object.selector;
        var name=object.icons;
        var type=object.display;

        var itemsAll = ['tsina','qq','weixin','renren','more'];
        var itemsByqq = ['qq','more'];

        var config=[];
        config.itemsAll=itemsAll;
        config.itemsByqq=itemsByqq;

        if(type=="dropdown"){
            var html='<div class="dropdown pull-right" style="padding:1px"><a class="dropdown-toggle text-muted "  href="#" id="dropdownMenu1" data-toggle="dropdown" >分享到<span class="caret"></span></a><ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1"><div class="bdsharebuttonbox" style="padding:1px;">';
        }
        else{
            var html='<ul style="padding:1px;"><div class="bdsharebuttonbox" >';
        }

        if(contains(config[name],'qq')){
             html+='<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>';
        }

        if(contains(config[name],'tsina')){
             html+='<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>';
        }

        if(contains(config[name],'weixin')){
             html+='<a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>';
        }

        if(contains(config[name],'renren')){
             html+='<a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>';
        }

        if(contains(config[name],'more')){
             html+='<a href="#" class="bds_more" data-cmd="more"></a>';
        }

        var bdText=$(select).attr("data-bdText");
            html+='</div>';

        window._bd_share_config={
                "common":{
                       "bdSnsKey":{},
                       "bdText":bdText,
                       "bdDesc":"  ",
                       "bdMini":1,
                       "bdComment":" ",
                       "bdMiniList":false,
                       "bdPic":"",
                       "bdStyle":"0",
                       "bdSign":"normal"
                        },
                "share":{
                        "bdSize":24
                }
        };

        with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+ (new Date()).valueOf()];
        html+='</ul>';

        $(select).html(html);
    }

});