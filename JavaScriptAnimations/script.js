var slidetime=4000;

function changePicture(){
    var arr=["images/01.jpg","images/02.jpg","images/03.jpg","images/01.jpg","images/02.jpg","images/03.jpg"];
    var image= document.getElementById('gallery');
    src=image.src;
    arr.forEach(img => {
        if(src.search(img)>1){
            index=arr.indexOf(img);
            if(index==length-1){
                image.src=arr[0];
            }
            else{
                image.src=arr[index+1];
                image.className="animated fadeIn";
            }
        }
    });
}

function startslides(){
    setInterval(changePicture,slidetime);
}