const Result= document.querySelector("#Result");
const increment= document.querySelector("#increment");
const decrement= document.querySelector("#decrement");
const reset= document.querySelector("#reset");
let count=0;
console.log(Result.innerHTML)

increment.addEventListener("click", function(){
    count=count+1;
    Result.innerHTML = count;
})
decrement.addEventListener("click", function(){
    count=count-1;
    Result.innerHTML = count;
})
reset.addEventListener("click", function(){
    count=0;
    Result.innerHTML = count;
})

