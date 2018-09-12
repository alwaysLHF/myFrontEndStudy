##response Heads
- Cache-Control:max-age=600 页面的内容10分钟失效（单位是秒）

- Connection:Keep-Alive http的一种模式（每个请求/应答客户和服务器都要新建一个连接）

- Date:Fri, 07 Sep 2018 02:45:53 GMT 当前的开始GMT时间

- ETag:"c159-5753ed8ca0999-gzip":Entity Tag 的缩写请求变量的实体标签的当前值.通过控制浏览器端的缓存，可以节省服务器的带宽

- Expires:Fri, 07 Sep 2018 02:55:53 GMT 当前的结束GMT时间（也就是10分钟后的时间）

-  Keep-Alive:timeout=5, max=100 永久连接，使客户端与服务器之间的连接持续有效

- Server:VwebServer web服务器软件名称：Server:VwebServer

##request Heads
- Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
浏览器端可以接受的媒体类型： text/html 代表浏览器可以接受服务器回发的类型为 text/html 也就是我们常说的html文档

- Accept-Encoding:gzip, deflate 作用： 浏览器申明自己接收的编码方法，通常指定压缩方法，是否支持压缩，支持什么压缩方法（gzip，deflate）

- Cache-Control:max-age=0 指定请求和响应遵循的缓存机制

- Connection:keep-alive当一个网页打开完成后，客户端和服务器之间用于传输HTTP数据的TCP连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接。

- If-Modified-Since:Fri, 07 Sep 2018 02:34:29 GMT如果请求的部分在指定时间之后被修改则请求成功，未被修改则返回304代码

- If-None-Match:"c159-5753ed8ca0999-gzip"如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变

- Upgrade-Insecure-Requests:1向服务器指定某种传输协议以便服务器进行转换（如果支持）

- User-Agent:Mozilla/5.0 (Windows NT 6.1AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.31 Safari/537.36告诉HTTP服务器， 客户端使用的操作系统和浏览器的名称和版本。