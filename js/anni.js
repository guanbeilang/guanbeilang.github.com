$(document).ready(function(){
    $("section").hide();
    /* 增加百度统计代码输出 */
    $.getScript("http://hm.baidu.com/h.js?8df3425a2bcb880e08debfb75995290f");
    console.log(statistic);
});