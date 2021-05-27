

var img = new Image;
let file_img = document.querySelector("#file");
        img.addEventListener("load",function(){

            tool.drawImage(img,sx=100,sy=100,300,300);

        })

var loadFile = function(event) {
    img.src = URL.createObjectURL(event.target.files[0]);
   
};