var shopper = {
    name: "Joe",
    age: 21,
    isAlive: true,
    purchases: [55,24,33,15,12],
    purchaseDates: ["11/15/2020", "5/12/2019", "3/3/2019", "12/18/2018", "7/31/2018"],
    cart: ["Lettuce", "Spinach", "Sunflower Seeds", "Redbull"],
    shopperData: function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.isAlive);
        console.log(purchases);
        console.log(purchaseDates);
        console.log(cart);
    }
}

console.log(shopper);