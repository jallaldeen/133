textX=0;
texty=0;
difference=0;

 function setup(){
  video = createCapture(VIDEO);
  video.size(550, 500); 
  
  canvas = createCanavas(550, 550);
  canvas.position(560,150)

  poseNet = ml5.posenet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
 }

 function modelLoaded()
 {
     console.log('PoseNet is Initialized!');
 }

 function draw()
     {
         background('Aqua');
     }