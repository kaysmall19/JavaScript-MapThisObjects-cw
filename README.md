# Classwork: JavaScript Map/This/More Objects

#### Exercise 1:

1. Use .map to create a new array of objects where each object has a property for ```petnumber``` and ```pettype``` based on the elements in the array. Print the new array of objects.
```
let petTypes = ["dog", "cat", "pig", "hamster"];
let pet_objects = []; // new array to hold objects you produce
```
#### Exercise 2:
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

#### Exercise 3:

Write a function that takes a string and returns total character count of letters for all strings in the sentence. 

Use ```.reduce``` return this count.  Hint: See ```.split()``` and string ```length``` property.


#### Exercise 4: 
Use `map` to take an array of words in lower-case and returns an array of the strings where *every other word* is in all caps. Then use `foreach` to print out the new array.


ex: 
`hey pal, lets javascript together sometime` // => "HEY pal, LETS javascript TOGETHER sometime"

