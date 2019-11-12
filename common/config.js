(function(window,myConfig){
   
   // api 地址
//  myConfig.requestrl="http://127.0.0.1";
   var basciUrl="http://127.0.0.1:27000/api/common/";
    myConfig.login=basciUrl+"query/user"; // 登录
    myConfig.register=basciUrl+"add/user"; // 注册
    myConfig.forget=basciUrl+"update/user"; // 修改
    myConfig.scan=basciUrl+"query/book"; // 查看图书


    
    
    
})(window,window.myConfig || (window.myConfig = {}));