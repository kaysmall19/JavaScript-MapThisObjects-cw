# Classwork: JavaScript Map/This/More Objects

#### MAP

1. Use .map to create a new array of objects where each object has a property for ```petnumber``` and ```pettype``` based on the elements in the array. Print the new array of objects.
```
let arr = ["dog", "cat", "pig", "hamster"];
let pet_objects = []; // new array to hold objects
```
#### FILTER
2. Use ```.filter``` to create an array of pet objects that only holds the hamsters.

```
let pets = [
{
  name: 'Spot',
  type: 'Hamster'
},
{
  name: 'Harry',
  type: 'Hamster'
},
{
  name: 'Kitty',
  type: 'Cat'
}
]

let hamsters = []; // new array to hold objects
```

#### REDUCE

3. Write a function that takes a string and returns an total representing the character count for each letter of each string in the sentence. Use ```.reduce``` to build this object.  Hint: See ```.split()`` and string ```length``` property.
```
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
var countLetters = function(string){
  // your code here
};
```

#### BONUS: 
Write a new function called ```swapCase``` that takes a lower-case string of words and uses ```.map``` and your newly written ```capitalize()``` function to return a string where every other word is in all caps. 

Hints: You may want to chain more than one ```map``` operation. Look up ````Array.prototype.map``` on MDN and see what arguments the .map callback can take if needed 

ex: 
```swapCase('hey pal, lets javascript together sometime') // => "HEY pal, LETS javascript TOGETHER sometime"
var swapCase = function(string){
  // Codeeeee
}
```


#### BONUS: Even More Objects
Create a new empty array called ```pet_list```. Add 3 ```pet``` objects to the ```pet_list``` array (each ```pet``` should have a ```type``` and a ```breed property```) You can choose the pets.

* Add a new property called ```age``` to each pet instance in ```pet_list'''

* Assign a number for the ```age``` for all of the pets

* Iterate the list of pets and print the properties for each pet
