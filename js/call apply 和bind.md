#call apply 和bind  

##区别  
call 与 apply作用没有任何实际区别， 都是改变方法的this。  
传值的时候，call是一个一个传值的，apply是将其放在一个数组中传输的。  

bind方法稍有不同，bind事先把this改变，并且把对应的参数准备好，以后要用到就会直接执行。但是apply和call会马上执行。  

##使用场景  
比如，在方法中我们有argument，当我们要将其作为数组来进行一些复制排序操作时，必须使用一下方法：  
array = [].slice.call(argument).
