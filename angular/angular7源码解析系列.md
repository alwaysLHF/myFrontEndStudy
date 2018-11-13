#angular 源码解析（1)  
> 核心模块  
##目录  
一般读完package后就可以看package文件夹了
angular/packages/core/src  
##模块介绍  
Implements Angular's core functionality, low-level services, and utilities.

- Defines the class infrastructure for components, view hierarchies, change detection, rendering, and event handling.

- Defines the decorators that supply metadata and context for Angular constructs.

- Defines infrastructure for dependency injection (DI), internationalization (i18n), and various testing and debugging facilities.  

我们首先阅读元数据中的展示文件  

##文件介绍  
Defines template and style encapsulation options available for Component's  

