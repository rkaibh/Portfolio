var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "서울시 금천구 가산디지털2로 115 대륭테크노타운3차";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio(AngularJS)";
    	$rootScope.name = "김원중";
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/team.pdf", 
			 title: "Team",
			 name: "Impression",
			 img: "team/TeamImpression.png",
			 type : true, 
			 contents: "교육기관에서 참여한 첫번째 팀 프로젝트로서 Java, Spring, Java Script, My Batis, MariaDB 를 학습하고 활용하여 구현하였고 팀원들이 각자 분담한 부분에서 먼저 완성된 팀원이 완성이 안된 부분을 도와가며 팀 프로젝트를 진행하였고 팀 구성원들과의 큰 마찰이나 의견 대립이 없어 수월하게 진행할 수 있었습니다. 또 초기 기획 구성에서 구현하기 힘든부분은 팀원들의 의견을 모아 대체하였습니다. 이 경험을 기반으로 저를 더 성장시킬 수 있었으며 팀으로 구성되고서야 알게 되었던 팀원들과의 친밀도도 향상되었습니다."
			},{
			 path: "portfolio/",
			 url : "personal/personal.docx", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/PersonalImpression.png",
			 type : false,
			 contents: "개인프로젝트를 시작하면서 어떤 주제로 정할지 많은 고민이 있었습니다. 고민 중 문득 아르바이트 했었을 당시 POS 기기가 생각이 나서 방향성을 잡고 시작하였는데, 팀프로젝트 때와는 달리 혼자서 모든 부분을 해결해야 한다는 부분에 걱정이 앞섰지만 부족한 부분을 github를 통하여 서버에 백업하고 개발환경이 구축되있는 집에서 내려받아 시간을 더욱 투자할 수 있었습니다. 아직 부족하였기에 기능적인 부분에 시간을 많이 할애할 수 밖에 없었고 그것에 의해 디자인이 직격으로 맞았던것 같습니다. 아직 부족하지만 혼자서도 개발할 수 있다는 자신감을 불어넣어준것 같아 좋은 경험이 되었습니다."
			},{
			 path: "media/",
			 url : "personal.mp4", 
			 title: "Personal",
			 name: "Media",
			 img: "personal/PersonalMedia.png",
			 type : false, 
			 contents: ""
			}
		];
		
        $scope.toAlert = () => { alert("https://gist.githubusercontent.com/rkaibh/b2dc3fee9c58661897c0fc23253d9575/raw/2c1a80dd937271ec61a7dba9f1145bc9a023a111/forPort");};
        
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});
