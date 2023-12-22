//easy- anagram 

/*
let str1 = 'newyork';
let str2 = 'Newyork';

var sortedStr1 = str1.split('').sort().join('');
console.log(sortedStr1);
var sortedStr2 = str2.split('').sort().join('');
console.log(sortedStr2)
console.log(sortedStr2===sortedStr1);
*/

const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];
/*
category: 'Food', totalSpent: 30 },
			{ category: 'Clothing', totalSpent: 40 },
			{ category: 'Electronics', totalSpent: 30 },
		]);*/

        let ans = [];
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
console.log(ansObj);
//console.log(transactions[0]);
    //Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here


