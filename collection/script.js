var xmlhttp = new XMLHttpRequest();
var url = "data-json.txt"; //your file name
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);  //works
    if (document.getElementById('index')) {
     buildIndex(data);
    }
    else {
      buildItem(data);
    }
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


function buildIndex(data){
  for (i = 0; i < data.length; i++){
    var item = document.createElement("li");
    item.classList.add('items');  
    let temp = data[i].Artist
    let t2 = temp.replace(/\s/g, '');    //ARTIST
    item.classList.add(t2);




    let temp3 = data[i].Album          //ALBUM!
    let t3 = temp3.replace(/\s/g, '');

    //var elem = document.createElement("a"); 


    var elem = document.createElement('a');
    var img = document.createElement('img');
    img.classList.add('imageClass');
    elem.setAttribute("href", "item.html?id="+ i);
    img.setAttribute("src", "images/"+i+".jpg");
    //csv -> create new column called iamgeURL, 

    elem.appendChild(img);
  //  elem.src = data[i].imageURL; //"/images/muramasa.jpg";
    //elem.innerText = t3; //initally t3





    item.appendChild(elem);
    //finally, attach to '.result' div
    document.querySelector('.result').appendChild(item);
  }
}

function buildItem(data){
  //get URL parameter "id"
  var queryString = window.location.search;  
  var urlParams = new URLSearchParams(queryString);
  var id = parseInt(urlParams.get('id'));
  console.log('currently seeing item ' + id);
  

  document.querySelector('h1').innerText = data[id].Album;

  document.querySelector('.artist').innerText = data[id].Artist 
  document.querySelector('.year').innerText= data[id].Year;
  
  document.querySelector('.music').innerText = data[id].Music;
  document.querySelector('.innerImage').src = data[id].imageURL;

  var nextId, prevId;
  if (id == data.length - 1) {
    nextId = 0;
  }
  else {
    nextId = id + 1;
  }

  if (id == 0) {
    prevId = data.length - 1;
  }
  else {
    prevId = id - 1;
  }
  document.querySelector('.next').href = "item.html?id=" + nextId;
  document.querySelector('.prev').href = "item.html?id=" + prevId;
}



