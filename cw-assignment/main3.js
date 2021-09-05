//sanity test
//alert ("hey bestie!!")

//exercise 1: Use .map to create a new array of objects where each object has a property for ```petnumber``` and ```pettype``` 
// based on the elements in the array. Print the new array of objects.

ex1 = () =>
{ 
    let petTypes = ["dog", "cat", "pig", "hamster"]; // array of objects

    // using the .map method
    let pet_objects = petTypes.map
    ( 
        (element, index) =>
        {
            return ({pet_number: index, pet_type: element});
        }
    );

    console.log(pet_objects);
    };

    ex1();

//exercise 2: Use .filter to create an array of pet objects that only holds the hamsters.

ex2 = () => {
    let pets = 
    [
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
        },
    ];
           
    // let hamster = [];
    // for(x = 0; x < pets.length; x++)
    // {
    //     let idx = pets[x].type; // this works but not with the filter
    //     if(idx === 'Hamster')
    //     {
    //        hamster.push(idx).type;
    //     }
    // };
    // console.log(hamster);

    ex2 = () =>
    {

    let hamster = pets.filter
    (
        (element, index) =>
        {
            return pets[index].type === 'Hamster';
        }
    );
    console.log(hamster);
    
    }
    ex2();
    
    //let type = pets.forEach(
    // (index) =>
    //   {
    //      pets[index];
    //   }
    // );
    // console.log(type);
    
    
    // console.log(pets[0].type); // an array with objects.
    //     let hamsters = pets.filter(
    //         (index) => {
    //             return pets[index].type = 'Hamster';
    //         }
    //     );
    //     console.log(hamsters);
    // };
    
    //ex2();
    
       
        // let hamsters = pets.filter(
        //     (type) =>
        //     {
        //         return (type === ));
        //     }
        // );
        // console.log(hamsters);


//exercise 3: Write a function that takes a string 
//and returns total character count of letters for all strings in the sentence. 
//Use ```.reduce``` return this count.  Hint: See ```.split()``` and string ```length``` property.

// sentence = (string) =>{
// let split = string.split("");
// console.log(split.length);
// };

ex3 = () =>
{
    let string = "Hey, How are you today? I hope everything is well.";
    let split = string.split(""); 
    let count = split.reduce( 
        () =>  
        {
            return split.length; 
        }
    );
    console.log(count);
};
    ex3();
    
    //console.log(sentence("Hey, How are you today? I hope everything is well."));
    
    
    //exercise 4: 
    //Use `map` to take an array of words in lower-case 
    //and returns an array of the strings where *every other word* is in all caps.
    //Then use `foreach` to print out the new array.
    
    ex4 = () =>
    {
    let string = "hey pal, lets javascript together sometime!".toUpperCase();
    let split = string.split(" ");
    let capital = split.map(
        (element, index) => 
        { 
              if (index % 2 === 0)
            {
                return split[index].toUpperCase(); 
            }
            else {
                return split[index].toLowerCase();
            }
    
           
        }
    ); 
    console.log(capital); 
    };
    
    ex4();