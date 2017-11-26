(function() {
    'use strict';

    angular.module("ShoppingListCheckOff", [])

    .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var showList = this;
        showList.itemsToBuy = ShoppingListCheckOffService.getItemesToBuy();
        showList.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
            showList.errorMessage = ShoppingListCheckOffService.errorHandler1();

        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;
        boughtList.boughtItems = ShoppingListCheckOffService.getItemesBought();
        boughtList.errorMessage = ShoppingListCheckOffService.errorHandler2();
        console.log(boughtList.error);
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var item1 = {
            name: "cookies",
            quantity: 1
        };
        var item2 = {
            name: "brownies",
            quantity: 2
        };
        var item3 = {
            name: "candies",
            quantity: 5
        };
        var item4 = {
            name: "icecreams",
            quantity: 10
        };
        var item5 = {
            name: "carrots",
            quantity: 11
        };

        var itemsToBuy = [item1, item2, item3, item4, item5];
        var boughtItems = [];
        var error1 = "Everything is bought!";
        var error2 = "3";
        var error = [];
        error = ["Nothing is bought yet!"];

        service.getItemesToBuy = function(itemIndex) {
            return itemsToBuy;
        };
        service.getItemesBought = function() {
            return boughtItems;
        };
        service.geterr = function() {
            return error;
        };

        service.errorHandler1 = function() {
            if (itemsToBuy.length == 0) {
                return "Everything is bought!";
            }
        };
        service.errorHandler2 = function() {
            console.log("errorHandler2");
            if (boughtItems.length == 0) {
                error2 = "Nothing is bought yet!";
            }else{ 
            	error2 = "";
            }
            return error2;
        };

        service.buyItem = function(itemIndex) {
            if (boughtItems.length == 0) {
                error.pop();
            }
            boughtItems.push(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex, 1);

        };
    }

})();