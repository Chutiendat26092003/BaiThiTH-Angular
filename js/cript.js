 var app = angular.module('myApp', []);
app.controller('coffee', function ($scope){
    $scope.nameCustomer = "";
    $scope.sizeM1 = "";
    $scope.sizeL1 = "";
    $scope.sizeM2 = "";
    $scope.sizeL2 = "";
    $scope.sizeM3 = "";
    $scope.sizeL3 = "";
    $scope.total = function(){
        this.total = this.sizeM1*20000 + this.sizeL1*25000 + this.sizeM2*25000 + this.sizeL2*28000 + this.sizeM3*30000 + this.sizeL3*35000;
    };
})


const model = {
    CurrentCoffee: null,
    coffees: [
        {
            codeNameSizePrice: '1.Cafe đen đá  size M $20000VND; size L $25000 VDN',
        },
        {
            codeNameSizePrice: '2.Bạc sỉu   size M $25000 VND; size L $28000 VND',
        },
        {
            codeNameSizePrice: '3.Matcha trà xanh  size M $30000 VND; size L $35000 VND',
        },
    ],
};
const controller = {
    init(){
        model.currentCoffee= model.coffees[0];

        coffeeListView.init();
    },
    getCoffees(){
        return model.coffees;
    },
};
const coffeeListView = {
    init(){
        this.coffeeListElem = document.getElementById('coffee-list');

        // hiển thị chế độ xem và cập nhập phần tử
        this.render();
    },
    render() {
        let coffee;
        let elem;
        let i;
        const coffees = controller.getCoffees();
        this.coffeeListElem.innerHTML = '';

        for (let i = 0; i < coffees.length; i++){
            coffee = coffees[i];
            elem = document.createElement('li');
            elem.className = 'list-group-item';
            elem.textContent = coffee.codeNameSizePrice;
            this.coffeeListElem.appendChild(elem);
        }
    },
};

controller.init();

