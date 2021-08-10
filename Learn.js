var images=["tree.jpeg","image 10.jpg","image 9.jpg","image 6.jpg","fox.jpg","face.jpg","bird.jpg","castle.jpg","Van Gogh.jpg","range.jpg"];
var i=0; 
function nextslide(){
    document.getElementById("pic").src= images[i];
    i++;
}