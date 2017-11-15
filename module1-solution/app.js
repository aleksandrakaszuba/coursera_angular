(function(){
	'use strict';

	angular.module("MyApp",[])

	.controller('LunchCheckController', LunchCheckController);

		LunchCheckController.$inject = ['$scope'];

		function LunchCheckController($scope){
 		$scope.food = "";
		$scope.noOfItems = 0;
		$scope.msg = "";

		 if(!String.prototype.trim){  
		  String.prototype.trim = function(){  
		    return this.replace(/^\s+|\s+$/g,'');  
		  };  
		}
		//calculates and displays values 
		$scope.displayValues = function function_name(){
			var foodstring = trimString($scope.food);
			var noOfItems = countFood(foodstring);
			$scope.msg = generateMsg(noOfItems);
		}

		//f. removes all spaces between letters
		function trimString(string) {
			return string.replace(/\s+/gm,'').trim();
		}	

		//f. counts items of food (, , is not considered as an item towards the count)
		function countFood(string) {
			var counter = 0;
			if(string.length>0 & string.charAt(i)!==','){
				counter = 1; 
			}
			for (var i = 0; i < string.length; i++) {
				if(string.charAt(i)===',' & string.charAt(i+1)!==',' & string.charAt(i+1)!==''){
					counter++;
				}
			}
			return counter;
		}
		//f. generates messages based on number of items passed to it
		function generateMsg(num) {
 			if(num>3){
 				return "Too much";
 			}else if(num==0){
 				return "Please enter data first";
 			}
 			else{
 				return "Enjoy";
 			}
 		}
	};
})();