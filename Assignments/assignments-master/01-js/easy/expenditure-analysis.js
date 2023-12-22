/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let categories = [];
  let price = [];

transactions.forEach(element => {
categories.push(element.category);
price.push(element.price);
});


let uniqCategories = new Set(categories);
console.log(typeof(uniqCategories));
console.log(uniqCategories);

let ansObj = [];
uniqCategories.forEach(element => {
  let specificprice = 0;
for(let i=0;i<categories.length;i++){
      if(element==categories[i]){
         specificprice=specificprice+price[i];
      }

}

ansObj = ansObj.concat({'category':element,'totalSpent':specificprice});
//console.log(element);
});
//console.log(ansObj);

  return ansObj;
}

module.exports = calculateTotalSpentByCategory;
