# 复旦微 web技术栈

------
欢迎来到复旦微这个大家庭，加入到我们软件创新事业部，我们是端工程师，下面给你介绍一下前端在这里需要做什么吧：

> * web技术栈，需要掌握的知识
> * 样例，项目架构
> * 应用，做一个小项目

![cmd-markdown-logo](https://www.zybuluo.com/static/img/logo.png)
![image](E:/bgMont.jpg)

除了您现在看到的这个 Cmd Markdown 在线版本，您还可以前往以下网址下载：

### [Windows/Mac/Linux 全平台客户端](https://www.zybuluo.com/cmd/)

> 请保留此份 Cmd Markdown 的欢迎稿兼使用说明，如需撰写新稿件，点击顶部工具栏右侧的 <i class="icon-file"></i> **新文稿** 或者使用快捷键 `Ctrl+Alt+N`。

------

## web技术栈

首先，在加入工作之前，我们需要了解一下，我们公司都需要什么技术，运用了哪些框架。

- [x] 外部框架(Angular，Admin-lte，PrimeNG，Echart)
- [x] 架构思想
- [x] 书写规范

### 1. 外部框架 

##### # 1.Angular
    中文官网：www.angular.cn
###### [1.双向绑定](https://www.angular.cn/)
    Angular和JS不同的是不需要操纵DOM去实现功能，大部分功能angular都已经封装好，如果需要
    可以用：
    HTML:
    <div #authorityManagement>
    TS:
    @ViewChild(authorityManagement) authorityManagement;
    下面用 console.log(this.authorityManagement);
###### [2.创建组件](https://www.angular.cn/)
    我们的项目大体结构：
    根目录：app
    项目：admin
    组件：component
    子组件：subComponent
    
    1.当我们需要新建一个页面时，我们只需要在我们的admin项目下创建一个组件即可，顶部的app不需要引入东西。
    2.你可以用快捷方式ng g c componentName 来创建一个组件，也可以根据其他组件来创建一个新的组件。
    3.你需要在admin里面引入该组件，让他可以在页面上显示，也可以在路由中正常跳转，引入方式详情可以查看Angular官网或者看已有的项目。
###### [3.分割组件](https://www.angular.cn/)
    如果一个组件里面需要有一个模态框，或者需要写很多个重复的HTML模块，你需要适当分割出多个组件，如果模块太小，就不需要太多麻烦的操作了，根据实际情况而定。
###### [4.组件结构](https://www.angular.cn/)
```ts  
    **1.CSS**
      此处的class名，不需要使用驼峰式写法，写成 play-game-btn 以杠为分割的方式书写
      
    **2.HTML**
      一个项目，要有一套统一的显示风格，根据其他页面的风格书写，适当的地方需要打注释。
    **3.Component.ts**
      --------------------------------------------------------------------------------------------
      变量以及方法名称需要用驼峰式写法，变量名需要打注释，方法要打注释，如果有比较复杂的逻辑，
      如嵌套循环，或者if判断等都需要打注释。
      --------------------------------------------------------------------------------------------
      大体结构:
      import { Component, OnInit, EventEmitter, Output, ViewChild, DoCheck } from '@angular/core';
      @Component({ // 这里根据不同组件更改不同的名称，以及服务
          selector: 'app-dpan-order-change',
          templateUrl: './dpan-order.component.html',
          styleUrls: ['./dpan-order.component.css'],
          providers: [MessageService]
        })
      export class DpanOrderChangeComponent implements OnInit, DoCheck, OnChanges {
        faceNo: string; // 卡面号
        msgs: Message[] = []; // 消息提示
        @Input() openCardId;
        @Output() tabCode = new EventEmitter<string>();  // 通知主页激活那个动态tab
        
        constructor(protected rechargeExceptionService: DpanOrderChangeService,
            private service: MessageService
          ) { }
        ngOnInit() {
            this.startTime.setDate(this.endTime.getDate() - Number(this.shared.getLimitDate()));
            this.endTime.setDate(this.endTime.getDate());
        }
        ngOnChanges() {} // 此方法可缺省，用作监听Input传进来的值，是否变化，变法则执行一次
        ngDoCheck() {} // 此方法可缺省，用作实时监听数据变化
        // 显示警告信息
        showWarn() { // 你写的点击事件，或者方法
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: '警告', detail: '请输入查询条件！' });
         }
         
        /**
         * END
         */
      }
      
    **4.Service.ts**
      调用接口，需要调用统一的httpClient，方便添加token等，统一请求方式
      import { Injectable } from '@angular/core';
      import { HttpClientService } from '../../http-client-server/http-client.service';
      
      @Injectable()
      export class DpanOrderChangeService {
        constructor(
          private http: HttpClientService
        ) {}
        // 查询 GET
        saveOrgetSql(kindNo: Number) {
            let body: any;
            body = {
                kindNo: kindNo, // 类别  01-订单查询, 02-发卡查询, 03-用户查询
            };
            return this.http.httpget(this.platAPI + AppPath.commonRoutingPath.getQrySql + '?' + this.littleTool.splicingParam(body)); // littleTool.splicingParam 处理参数成字符串
        }
        // 添加一条数据库 POST
        addSql(kindNo: Number) {
            let body: any;
            body = {
                kindNo: kindNo, // 类别  01-订单查询, 02-发卡查询, 03-用户查询,
            };
            return this.http.httpPost(this.platAPI + AppPath.commonRoutingPath.addQrySql, body);
        }
        // 删除数据库 DELETE
        deleteSql(sqlIdList: any) {
            let body: any;
            body = {
                sqlIdList: sqlIdList, // seqId list
            };
            return this.http.httpDelete(this.platAPI + AppPath.commonRoutingPath.delQrySql + '?' + this.littleTool.splicingParam(body));
        }
        // 更新数据库 PUT
        updateSql(seqId: Number) {
            let body: any;
            body = {
                sqlId: seqId, // SQL存储ID
            };
            return this.http.httpPut(this.platAPI + AppPath.commonRoutingPath.updQrySql, body);
        }
    }
    
    **5.Spec.ts**
      测试文件，用来后期做单元测试用，现在只用来测试组件引入和调用是否有用
      
    **6.Pipe.ts（可缺省）**
      管道文件，
      import { Pipe, PipeTransform } from '@angular/core';
      @Pipe({ // 类别
          name: 'sqlKindNoHubble'
      })
      export class SqlKindNoHubblePipe implements PipeTransform {
        transform(value: any): any {
            switch (value) {
                case 1:
                case '1':
                case '订单查询':
                    return '订单查询';
                }
            }
        }
        引入：在响应admin项目中的declarations中引入SqlKindNoHubblePipe，
        应用：<span>{{rowData[col.value] | sqlKindNoHubble}}</span>
        
    **7.文件名.ts（可缺省）**
      用来存放，ts文件中的常量，全局应用前端写死的变量
      import { SelectItem } from 'primeng/api';
      // 订单状态
      export const Status: SelectItem[] = [
        { label: '初始化', value: 0 },
        { label: '未支付', value: 1 },
        { label: '已付款', value: 2 },
      ];
      export class MainOrderFinds {
        orderTypeList = [];
        thirdSeq = '';
        init() {
            this.orderTypeList = [];
            this.thirdSeq = '';
        }
      }
```   
###### [5.常用方法及属性](https://www.angular.cn/)
    ------------------------------------------------------------
    注：每个可输入，或者可以选择的控件都需要有一个唯一且不同的id
    ------------------------------------------------------------
    常用的方法：
    
    **1.ngModel**
    //双向绑定数据，后台传过来的数据，只要绑定在这里，就可以做到实时更换。
    <input id="cardTypeStat" [(ngModel)]="cardType">
    
    **2.click**
    //点击事件
    <button (click)="getVirtualCardStatistics()"></button>
    
    **3.ngIf**
    //判断一个模块是否需要显示，隐藏
    <div *ngIf="showJumpMenu"></div>
    
    **4.ngFor**
    //循环语句
    <li *ngFor="let menu of items" (click)="menuJump(menu.value)">{{menu.label}}</li>
    
    **5.组件通讯**
      (1)父子组件通讯
        大体结构：
        父组件 HTML：<app-page-modal-task [openCardId]='openCardId' (taskIdOutPut)="showScript($event)"></app-page-modal-task>
        父组件 TS：this.openCardId = {a: '', b: ''};
                   showScript(e){}
        子组件 TS：@Input() openCardId;
                   this.abc = this.openCardId;  // 传入
                   @Output() taskIdOutPut = new EventEmitter<string>();
                   this.taskIdOutPut.emit(this.dataTaskId); // 传出
        详情可自行百度:angular2父子组件通讯
``` ts
      (2)不相关组件（创建服务）
       // 创建服务
       import {Injectable} from '@angular/core';
       @Injectable()
       export class ModalBoxService {
           btnData: any[]; // 按钮数据
           constructor() {}
           setBtnData(e) {
               this.btnData = e;
           }
           getBtnData() {
               return this.btnData;
        }
        // 传出值的组件里调用ModalBoxService服务
        constructor(
            private modalBoxService: ModalBoxService
         ) { }
         abc(){
            this.modalBoxService.setBtnData('aaaaa');
         }
        // 接收方的组件里调用ModalBoxService服务
        constructor(
            private modalBoxService: ModalBoxService
         ) { }
         bcd(){
           this.bcd = this.modalBoxService.getBtnData();
         }
```
##### # 2 Admin-lte
      官网：https://adminlte.io/
      1.了解框架结构
      2.大概功能都有哪些
      3.图标，链接：https://adminlte.io/themes/AdminLTE/pages/UI/icons.html
``` ts
      引用方式：<span class="fa fa-angle-down"></span>
```
##### # 3 PrimeNG
      官网：https://www.primefaces.org/primeng/#/
      PrimeNG是我们除了Angular以外最常用的框架，大部分控件都源于这个前端UI框架。
``` ts
      常用控件：
      1.<p-calendar> （日历）
      2.<p-multiSelect> （下拉框）
      3.<p-table> （表格）
      4.<input pInputText/pButton > (输入框、按钮)
      5.<p-dialog header="Title" [(visible)]="display"> （弹框）
      6.<p-growl [(value)]="msgs" autoZIndex="true" baseZIndex="2"></p-growl> （提示框）
```
  
##### # 4 Echart
``` ts
      // 用法：
      // HTML：（柱状图and扇形图）
      <div echarts [options]="chartOption" class="demo-chart"></div>
      // TS：（柱状图）
      this.chartOption = this.METHOD([{amount: "0.00"，date: "2018年第30周"，number: "40"}])
      // TS：（扇形图）
      this.chartOption = this.METHOD([{name: 'InappTopup',value: this.backDataHotspotRatio.InappTopu}])
```
##### # 4 Echart MEHOD（详情见官网http://echarts.baidu.com/）：
``` ts
      const showData = {
          tooltip: {
            trigger: 'axis',
          },
          grid: {
            top: '20%',
          },
          toolbox: {
            feature: {
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          legend: {
            data: ['充值卡数']
          },
          xAxis: [
            {
              type: 'category',
              data: cardData.map(d => d.month),
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '充值卡数',
              max: Math.ceil(Math.max.apply(Math, cardData.map(n => n.number)) / 10) * 10,
              min: Math.floor(Math.min.apply(Math, cardData.map(n => n.number)) / 10) * 10,
              interval: (Math.ceil(Math.max.apply(Math, cardData.map(n => n.number)) / 10) * 10
                -
                Math.floor(Math.min.apply(Math, cardData.map(n => n.number)) / 10) * 10) / 5,
              axisLabel: {
                formatter: '{value}'
              }
            },
          ],
          series: [
            {
              name: '充值卡数',
              type: 'line',
              data: cardData.map(n => n.number),
              color: '#007bff',
              markPoint: {
                data: [
                  { type: 'max', name: '最大值' },
                  { type: 'min', name: '最小值' }
                ]
              },
              markLine: {
                data: [
                  // { type: 'average', name: '平均值' }
                ]
              }
            },
          ]
        };
        return showData;
```
![image](E:/bgMont.jpg)

#前端小项目练习  

1. 登陆模块  
设计一个登陆界面，包含用户名、密码、登陆按钮三个部分。  
考察点：
- 是否自适应PC及移动端。
- 提交表单用户名6-8位，只含字母、数字、下划线，密码为数字、字母、符号任意两种的组合。
- 点击按钮或输入回车键跳转页面  
2. 用户界面1  
设计一个用户界面，包含动态菜单、数据表格、选择树。
考察点：  
- 是否包含路由守卫  
- 各组件拆分、通信是否合理
- 动态菜单、数据表格、选择树是否正常使用  
- `界面通过懒加载模式导入`(附加题：奖励面包一块)
3. 用户界面2  
通过菜单跳转第二个用户界面。其包含折线图、柱状图、饼图、及右下角含有弹出的用户消息。
考察点: 
- 跳转是否正常。
- 图表功能正常。
- 弹出框采用动态模块。