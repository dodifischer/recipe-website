(function(){
	var app = angular.module("store", []);

	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		}
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}
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
	
	var gems = [
		{
			name: 'Lokum beef',
			price: 90,
			description: 'blazzing hot pan, olive oil, salt, done.',
			canPurchase: true,
			images: [
				{
					full: 'images/lokum1Full.jpg',
					thumb: 'images/lokum1Thumb.jpg'
				}
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
				{
					full: 'images/Dallas1Thumb.jpg',
					thumb: 'images/Dallas1Thumb.jpg'
				}
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
