(function(){
	var app = angular.module("store", ['store-products']);

	app.controller('StoreController', function(){
		this.products = [
			{
				name: 'Lokum beef',
				price: 90,
				description: 'blazzing hot pan, olive oil, salt, done.',
				canPurchase: true,
				images: [
					'images/Lokum1Thumb.jpg',
					'images/Lokum1Full.jpg'
					
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
					'images/Dallas1Full.jpg'
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
	});
	
	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

})();