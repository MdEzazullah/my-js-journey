const myArr = [10,20,30,40,50,60,70]
console.log(myArr[1])
console.log(myArr.length);

const heros = ['shaktiman', 'doremon', 'pikachu', 'balveer']
console.log(heros[3]);

//Array methods
//push() method add element at the end of the array
heros.push('Arishu')
console.log(heros);//[ 'shaktiman', 'doremon', 'pikachu', 'balveer', 'Arishu' ]
//unshift method add eement at the front of the array
heros.unshift('Nobita')
console.log(heros);//[ 'Nobita', 'shaktiman', 'doremon', 'pikachu', 'balveer', 'Arishu' ]
//shift() method remove the front element of the array
console.log(heros.shift());//print the removed element i.e. nobita

heros.shift()//ye bhi dusra tarika hai element ko removed krne ka pehle removed kro fir array print krdo
console.log(heros);//[ 'shaktiman', 'doremon', 'pikachu', 'balveer', 'Arishu' ]
console.log(heros.shift());

//include() it tells whether the element is present in the array or not
console.log(heros.includes('shah rukh khan'))//it return false value because hsah rukh khan is not present in the array

//indexOf() method tell the index of the element 
console.log(heros.indexOf('doremon'));

const newArr = myArr.join()
console.log(myArr);//print as given array
console.log(newArr);//all element are converted into string separated by the comma

//slice, splice
//myArr = [10,20,30,40,50,60,70]
console.log("A", myArr);
const myArr1 = myArr.slice(1, 3)
console.log(myArr1);
console.log("B", myArr);

const myArr2 = myArr2.splice(1, 3)
console.log(myArr1);
console.log(myArr2);





