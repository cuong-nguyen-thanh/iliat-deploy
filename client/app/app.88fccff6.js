"use strict";angular.module("illiatApp",["ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),c.html5Mode(!0),a.state("main",{url:"/",views:{main:{templateUrl:"app/main/main.html",controller:"MainController"}}})}]).controller("AppController",["$rootScope","$scope",function(a,b){a.App=App,b.pageTitle=App.pageTitle.home,b.activeMenu="home",b.isActive=function(a){return b.activeMenu==a}}]),function(){function a(a,b){a.$parent.activeMenu="home";var c={items:1,smartSpeed:800,margin:20,loop:!1,nav:!0,navText:['<a class="prev main__feedback__carousel__item__link" href="#"><span class="glyphicon glyphicon-chevron-left"></span></a>','<a class="next main__feedback__carousel__item__link" href="#"><span class="glyphicon glyphicon-chevron-right"></span></a>'],dots:!1};$(".main__feedback__carousel--container").owlCarousel(c)}a.$inject=["$scope","$http"],angular.module("illiatApp").controller("MainController",a)}(),angular.module("illiatApp").directive("footer",function(){return{templateUrl:"components/footer/footer.html",restrict:"E",link:function(a,b){b.addClass("footer")}}}),angular.module("illiatApp").factory("Modal",["$rootScope","$modal",function(a,b){function c(c,d){var e=a.$new();return c=c||{},d=d||"modal-default",angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("illiatApp").controller("NavbarCtrl",["$scope",function(a){}]),angular.module("illiatApp").directive("navbar",function(){return{templateUrl:"components/navbar/navbar.html",restrict:"E",controller:"NavbarCtrl",link:function(a,b){b.addClass("nav-bar").addClass("nav-bar--fixed")}}}),angular.module("illiatApp").run(["$templateCache",function(a){a.put("app/main/main.html",'<navbar></navbar><section style="background-image: url(/assets/images/home/spotlight.9eb78fc0.jpg)" class=spotlight><div class=spotlight__content><div class=spotlight__content__box><h1 class=spotlight__content__box__text>Xin chào, Chúng tôi là iliat</h1></div></div></section><div class=main><div class=container><div class=row><div class=main__ignite-shine><h2 class="main__ignite-shine__title col-xs-12">{{App.home.vision.title}}</h2><div class=vertical-line><div class=vertical-line__hr-10></div></div><div ng-repeat="item in App.home.vision.items" class="main__ignite-shine__item col-sm-4"><div class=main__ignite-shine__item__img><img src={{item.image}} alt=""></div><h4 class=main__ignite-shine__item__name>{{item.name}}</h4><div class=main__ignite-shine__item__description>{{item.description}}</div></div></div></div><div class=row><div class=main__courses><h2 class="main__courses__title col-xs-12">{{App.home.courses.title}}</h2><div class=vertical-line><div class=vertical-line__hr-10></div></div><div ng-repeat="item in App.home.courses.items track by $index" class="main__courses__item col-sm-6 col-md-4"><div class=main__courses__item__logo--container><div class=main__courses__item__logo><img src={{item.image}} alt="" class="main__courses__item__logo__img"><div class=main__courses__item__logo__content><h3 class=main__courses__item__logo__header>Giới thiệu {{item.title}}</h3><p class=main__courses__item__logo__body>{{item.content}}</p></div><h3 class=main__courses__item__logo__tagline>{{item.title}}</h3></div></div></div></div></div></div><div class=main__feedback><div class=main__feedback__carousel><div class="owl-carousel main__feedback__carousel--container"><div class=main__feedback__carousel__item><div class=main__feedback__carousel__item--container><div class=main__feedback__carousel__item__img><img src=/assets/images/home/feedbacks/testimonial-Tran-Ha.jpg alt=""></div><div class=main__feedback__carousel__item__text><span>"Nhờ trên lớp được học kĩ càng và phân tích tại chỗ các case kinh điển; đồng thời, học cùng nhiều bạn rất giỏi, nên mình đã học được rất nhiều. Một điểm thú vị nữa là các lớp học nhóm bắt buộc, cả online và offline. Khi làm bài một mình, mình không có áp lực phải tự lý giải với bản thân vì sao lại đưa ra lựa chọn này. Chỉ khi học cùng nhóm, mình buộc phải tìm mọi cách bảo vệ lựa chọn của mình trước nhiều phản biện bất ngờ mà mình không nghĩ tới. Cảm ơn ILIAT rất nhiều và luôn sẵn lòng giới thiệu về ILAT cho nhiều nhiều bạn nữa"</span></div><div class=main__feedback__carousel__item__accepted><span class="glyphicon glyphicon-ok"></span></div><h3 class=main__feedback__carousel__item__name>Trần Hà - 720 GMAT (Top 6% Thế giới )</h3></div></div><div class=main__feedback__carousel__item><div class=main__feedback__carousel__item--container><div class=main__feedback__carousel__item__img><img src=/assets/images/home/feedbacks/testimonail_LuongAnhPhuong.jpg alt=""></div><div class=main__feedback__carousel__item__text><span>"ILIAT với mình là ấn tượng là một cái lớp học nho nhỏ, nơi mọi người tương tác và gắn bó với nhau, giúp nhau cùng tiến bộ. Đối với em, mô hình lớp học này thật sự là hiệu quả : không phải theo cách bắt ép, miễn cưỡng mà nó thật sự khiến con người ta kiên trì cảm hứng. Cảm giác đó thật sự tuyệt vời hơn tất cả. Giữa những ngày nắng thế này, em tự cảm thấy lớp học này giống như việc phải đi qua một quãng đường rất oi để đến nơi, nếu đi một mình thì sẽ rất buồn chán và mệt mỏi, nhưng được sát cánh cùng mọi người và truyền động lực nên vẫn không cảm thấy mệt"</span></div><div class=main__feedback__carousel__item__accepted><span class="glyphicon glyphicon-ok"></span></div><h3 class=main__feedback__carousel__item__name>Lương Anh Phương</h3></div></div><div class=main__feedback__carousel__item><div class=main__feedback__carousel__item--container><div class=main__feedback__carousel__item__img><img src=/assets/images/home/feedbacks/Testimonial-Trang-Nguyen.jpg alt=""></div><div class=main__feedback__carousel__item__text><span>"Mình cực kì cảm ơn 2 thầy giáo siêu nhiệt tình Tu Anh Pham ít tóc và Dũng Tiến Lê ngực to đến khi ngồi vào phòng thi rồi mới thấm thía hết một số lời dạy vàng ngọc. Cảm ơn chị Yến và mấy đứa trong lớp đã cho chị một khóa học không thể vui hơn được, nhớ mọi người đến mức tuần lại nằm mơ thấy lớp mình 1 lần. Cảm ơn mọi người trong ILIAT đều cực kỳ thân thiện và tận tụy với lớp"</span></div><div class=main__feedback__carousel__item__accepted><span class="glyphicon glyphicon-ok"></span></div><h3 class=main__feedback__carousel__item__name>Nguyễn Thùy Trang - 750 GMAT</h3></div></div><div class=main__feedback__carousel__item><div class=main__feedback__carousel__item--container><div class=main__feedback__carousel__item__img><img src=/assets/images/home/feedbacks/testimonail-thutra.jpg alt=""></div><div class=main__feedback__carousel__item__text><span>"Mình thực sự bất ngờ vì hiệu quả lớp học đem lại: giáo trình của ILIAT chọn lọc từ các tài liệu uy tín, được hệ thống rất khoa học – đỡ được công bơi trong tài liệu mình đã vô cùng cảm kích Giáo viên hướng dẫn cách tiếp cận đề bài và các bước làm bài rất hiệu quả, còn nhiệt tình vui tính nữa chứ ! (Có lần làm bài thi “vất vả” bọn mình còn được mua nước mía cho nữa). Thêm vào đó, nhờ các lớp tự học và việc đến lớp trao đổi về mẹo nhớ từ, các ví dụ, mình hứng thú và học hiệu quả hơn hẳn. Rất cám ơn ILIAT đã tổ chức lớp học để sinh viên kinh tế eo hẹp như mình cảm thấy “dễ thở” hơn rất nhiều"</span></div><div class=main__feedback__carousel__item__accepted><span class="glyphicon glyphicon-ok"></span></div><h3 class=main__feedback__carousel__item__name>Nguyễn Thu Trà</h3></div></div><div class=main__feedback__carousel__item><div class=main__feedback__carousel__item--container><div class=main__feedback__carousel__item__img><img src=/assets/images/home/feedbacks/testimonial_QuangHuy.jpg alt=""></div><div class=main__feedback__carousel__item__text><span>"ILIAT đã mang lại một môi trường học tiếng Anh rất tốt cho những học viên ở đây. Mọi thành viên của ILIAT đều nhiệt tình, năng nổ, và rất dễ gần làm cho các học viên đều cảm thấy thoải mái, vui vẻ khi được học cùng, dạy bởi những anh chị không hơn kém tuổi mình nhiều mà lại rất tài năng"</span></div><div class=main__feedback__carousel__item__accepted><span class="glyphicon glyphicon-ok"></span></div><h3 class=main__feedback__carousel__item__name>Nguyễn Quang Huy - 7.0 IELTS</h3></div></div></div></div></div><div class=container><div class=row><div class=main__news><h2 class="main__news__title col-xs-12">{{App.home.news.title}}</h2><div class=vertical-line><div class=vertical-line__hr-10></div></div><div ng-repeat="img in App.home.news.images track by $index" class="main__news__img col-md-4"><img src={{img}} alt=""></div></div></div><div class=row><div class=main__bottom><div class="main__bottom__item col-sm-6"><h4 class=main__bottom__item__title>{{App.home.bottom.connect}}</h4><div class="vertical-line vertical-line--left"><div class=vertical-line__hr-20></div></div><div class=main__bottom__item__content></div></div><div class="main__bottom__item col-sm-6"><h4 class=main__bottom__item__title>{{App.home.bottom.video}}</h4><div class="vertical-line vertical-line--left"><div class=vertical-line__hr-20></div></div><div class=main__bottom__item__content></div></div></div></div></div></div><footer></footer>'),a.put("app/main/spotlight.html",'<section style="background-image: url(/assets/images/home/spotlight.9eb78fc0.jpg)" class=spotlight><div class=spotlight__content><div class=spotlight__content__box><h1 class=spotlight__content__box__text>Xin chào, Chúng tôi là iliat</h1></div></div></section>'),a.put("components/footer/footer.html",'<div class=container><div class=row><div class="footer__left col-xs-9"><div class=footer__menu><ul><li ng-repeat="menu in App.footer.menu track by $index"><a href=#><span>{{menu}}</span></a></li></ul></div><div class="vertical-line vertical-line--left"><div class="vertical-line__hr-100 vertical-line__hr-100--white"></div></div><div class=footer__left__contact--container><div ng-repeat="item in App.footer.contacts track by $index" class=footer__left__contact><div class=row><div class="footer__left__contact__address col-xs-7">{{item.address}}</div><div class="footer__left__contact__phone col-xs-5">{{item.phone}}</div></div></div></div></div><div class="footer__right col-xs-3"><div class=footer__menu>{{App.footer.follow}}</div><div class="vertical-line vertical-line--left"><div class="vertical-line__hr-100 vertical-line__hr-100--white-double"></div></div></div></div></div>'),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div class=container><div class=row><div class=nav-bar__first-line><div class="nav-bar__first-line__logo col-xs-3"><div class=nav-bar__first-line__logo__img><a href="/"><img src=/assets/images/logo.0553fbc5.png alt=""></a></div></div><div class="nav-bar__first-line__menu col-xs-9"><ul><li><a href="/"><span ng-class="{\'nav-bar--active\': isActive(\'home\')}">Giới thiệu</span></a></li><li><a href=#>Sứ giả</a></li><li><a href=#>Khóa học</a></li><li><a href=#>Tin Tức</a></li><li><a href=#>Liên hệ</a></li></ul></div></div></div></div>')}]);