console.log("running");
let a_elems = document.getElementsByClassName("a");
let b_elems = document.getElementsByClassName("b");


for(let i = 0; i <a_elems.length; i++){
  //addEventListener only takes function without parameter, so wrap call ()=>{}
  a_elems[i].addEventListener("click",()=>{test(i)});
}

function test(num){
  console.log("clicked");
  b_elems[num].classList.toggle('active');

  if(b_elems[num].classList.contains('active')){
    console.log("this is active");
  } else {
    console.log("this is NOT active");
  }

  // if(b_elems[num].style.display === "block"){
  //   b_elems[num].style.display = "none";
  // } else {
  //   b_elems[num].style.display = "block";
  // }
}