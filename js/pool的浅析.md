#池的简析
##什么是池
池(Poo), 与集合在某种意义上有些相似。 水池，是一定数量的水的集合；内存池，是一定数量的已经分配好的内存的集合；线程池，是一定数量的已经创建好的线程的集合。那么，对象池，顾名思义就是一定数量的已经创建好的对象(Object)的集合。 
##作用
我们常常需要反复使用一些对象或者链接。如果对这些反复进行创建或销毁，这样子一方面开销会比较大，另一方面会产生很多内存碎片，程序跑的时间一长，性能就会下降。所以我们需要做一个池（pool）来存储这些对象，使用时直接调用就好，使用完后将对象还给pool。
##特点
（1）对象池中有一定数量已经创建好的对象  
（2）对象池向用户提供获取对象的接口，当用户需要新的对象时，便可通过调用此接口获取新的对象。如果对象池中有事先创建好的对象时，就直接返回给用户；如果没有了，对象池还可以创建新的对象加入其中，然后返回给用户  
（3）对象池向用户提供归还对象的接口，当用户不再使用某对象时，便可通过此接口把该对象归还给对象池
##如何实现
我在使用nodejs服务连接数据库时遇到这个问题，每次mysql请求不可能重新连接一个数据库，所以，我们需要创建一个连接池：  
```javascript  
var mysql = require('mysql');  

// 创建一个数据库连接池  
var pool = mysql.createPool({   
    connectionLimit: 50,  
     host: 'localhost',  
    user: 'root',  
    password: '123456',  
    database: 'swagger'  
});  
// SELECT * FROM users  
// 让我们的方法支持两种模式  
// 一种是只传入SQL语句和回调函数  
// 一种是传入SQL语句、参数数据、回调函数  
exports.query = function(sql, P, C) {   
    var params = [];   
    var callback;  // 如果用户传入了两个参数，就是SQL和callback  
     
    if (arguments.length == 2 && typeof arguments[1] == 'function')   {   callback = P;  } else if (arguments.length == 3 && Array.isArray  (arguments[1]) && typeof arguments[2] == 'function') {   
        params = P;    
        callback = C;   
    } else {   throw new Error('对不起，参数个数不匹配或者参数类型错误');  }  // 如果用户传入了三个参数，那么就是SQL和参数数组、回调函数
      // 从池子里面拿一个可以使用的连接
     
    pool.getConnection(function(err, connection) {   // Use the connection  
          
        connection.query(sql, params, function() {    // 使用完毕之后，将该连  接释放回连接池  
               
            connection.release();     
            callback.apply(null, arguments);    
        });   
    });  
};  
```

调用方法  
`var connection = require('./../config'); // 获取配置文件`  
`connection.query($sql.login, addSqlParams, function(err, result) {})`
