# Classwork: JavaScript Map/This/More Objects

#### MAP
1. Write a new function called ```swapCase``` that takes a string of words and uses ```.map``` and your newly written ```capitalize()``` function to return a string where every other word is in all caps. 

Hint: look up ````Array.prototype.map``` on MDN and see what arguments the .map callback can take. 

ex: 
```swapCase('hey pal, lets javascript together sometime') // => "HEY pal, LETS javascript TOGETHER sometime"
var swapCase = function(string){
  // Codeeeee
}
```

2. Write a function ```shiftLetters``` that takes a string and uses ```.map``` to return an encoded string with each letter shifted down the alphabet by one. 

Hint: Look up the JS functions ```String.fromCharCode()``` and ```String.CharCodeAt()``` and see if you can use Ascii code to acomplish this.
```
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
var shiftLetters = function(string){
  // code!
}
```

#### REDUCE

3. Write a function that takes a string and returns an object representing the character count for each letter. Use ```.reduce``` to build this object. 
```
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
var countLetters = function(string){
  // your code here
};
```

4. Write a function that takes a string and a target, and returns true or false if the target is present in the string. Use ```.reduce``` to acomplish this.

```
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false
var isPresent = function(string, target) {
  // GO GO GADGET CODE!
}
```

#### Even More Objects
5. Create a new empty array called ```pet_list```. Add 3 ```pet``` objects to the ```pet_list``` array (each ```pet``` should have a ```type``` and a ```breed property```) You can choose the pets.

* Add a new property called ```age``` to each pet instance in ```pet_list'''

* Assign a number for the ```age``` for all of the pets

* Iterate the list of pets and print the properties for each pet
