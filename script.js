function speech() {
  var puppy1 = document.getElementById("mytext").value;
  document.getElementById("adjective").innerHTML=puppy1

  var puppy2 = document.getElementById("mytext2").value;
  document.getElementById("adjective2").innerHTML=puppy2

  var puppy3 = document.getElementById("mytext3").value;
  document.getElementById("name").innerHTML=puppy3

  var puppy4 = document.getElementById("mytext4").value;
  document.getElementById("verb ending in ing").innerHTML=puppy4

  var puppy5 = document.getElementById("mytext5").value;
  document.getElementById("verb").innerHTML=puppy5

  var puppy6 = document.getElementById("mytext6").value;
  document.getElementById("noun").innerHTML=puppy6

  document.getElementById("para").style.display="block";
}
