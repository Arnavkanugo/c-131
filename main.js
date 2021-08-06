img=""
function draw()
{
    image(img,0,0,600,400);
fill("#9950C7");
text("dog",45,75);
stroke("#C75097");


}
function preload()
{
    img=loadImage("dog_cat.jpg");

}
function setup()
{
    canvas=createCanvas(600,400);
    canvas.center();
}