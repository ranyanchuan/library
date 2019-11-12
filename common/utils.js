(function(window,mymodule,$){
   
   // 测试
    myModule.chuan=function(value){
    	   console.log(value)
    }
    
   
    //获取 输入框的值
    myModule.inputValue=function(array){
    	  let result={};
    	  for(var item=0;item<array.length;item++){
    	  	result[array[item]]=document.getElementById(array[item]).value;
    	  }
    	  return result;
    }
    
    
})(window,window.myModule || (window.myModule = {}));