function preload()
{

}
function setup()
{
a = createCanvas(600,600);
a.center()
video = createCapture(300,300);
video.size(300,300);
video.hide()
}
function draw()
{
    image(video,100,100,450,450)
    fill('red')
    stroke('blue')
    circle(100,100,100)
    circle(550,100,100)
    circle(100,550,100)
    circle(550,550,100)
    fill('green')
    stroke('pink')
    rect(70,125,60,400,20)
    rect(520,125,60,400,20)
    rect(120,70,400,60,20)
    rect(120,525,400,60,20)
}
function dok()
{
    save("picture.png")
}