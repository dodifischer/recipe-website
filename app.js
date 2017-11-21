(function(){
	var app = angular.module("store", []);

	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;
				this.selectTab = function(setTab) {
					this.tab = setTab;
				}
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				}
			},
			controllerAs: 'tab'
		};
	});
	
	var gems = [
		{
			name: 'Lokum beef',
			price: 90,
			description: 'blazzing hot pan, olive oil, salt, done.',
			canPurchase: true,
			images: [
				'images/Lokum1Full.jpg',
				'images/Lokum1Thumb.jpg'
				
			],
			reviews: [
				{
					stars: 5,
					body: "Awesome",
					author: "Nysret"
				},
				{
					stars: 5,
					body: "Best ever",
					author: "Pep"
				}
			]
		},
		{
			name: 'Dallas',
			price: 120,
			description: 'Huge steak with oils.',
			canPurchase: true,
			images: [
				'images/Dallas1Thumb.jpg',
				'images/Dallas1Thumb.jpg'
			],
			reviews: [
				{
					stars: 5,
					body: "Sweeeet",
					author: "Dodi"
				},
				{
					stars: 5,
					body: "Such good",
					author: "Viper"
				}
			]
		}
	];

})();
