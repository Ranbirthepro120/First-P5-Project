function preload() 
{
    img = loadImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcool%2520wallpaper%2F&psig=AOvVaw194ZB83j9C3wbAIn_iQ_-_&ust=1653575601483000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiZ6afv-vcCFQAAAAAdAAAAABAD')
}
function setup()
{
    canvas = createCanvas(600, 600);
}
function draw() 
{
    image(img, 300, 300, 500, 500);
    circle(50,50,50);
    circle(50,550,50);
    circle(550,50,50);
    circle(550,550,50);
    rect(50,50,500,50);
    rect(50,50,500,500);
    rect(50,550,500,50);
    rect(550,50,50,500);
    
}
function take_snapshot()
{
    save("Framed Cool Image.png")
}