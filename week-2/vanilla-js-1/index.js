console.dir(document);
let myH1 = document.getElementById("my-h1");
console.dir(myH1)
let myArr = [1,2,3,4,5,6];

//write a function that console.logs an array with only the even numbers
function removeOdds(){
   let filteredArr = myArr.filter(element => {
        if(element % 2 === 0){
            return true;
        }else {
            return false;
        }
    });
    console.log(filteredArr);
}

function updateH1() {
  const myInput =  document.getElementById("my-input");
 // console.dir(myInput.value);
const myH1 = document.getElementById("my-h1");
myH1.innerText = myInput.value;
console.dir(myH1);
//myH1.classList.add("blue");
myH1.style.color = "red";
const myUl = document.getElementById("bands");
//console.log(myUL);
myUl.innerHTML += "<li>" + myInput.value + "</li>";   

}
