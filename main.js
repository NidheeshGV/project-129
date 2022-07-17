Bts_butter="";
Bts_dynamite="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
song_name = "";


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function draw(){
    image(video,0,0,600,500);

    fill("#00ff00");
    stroke("#ff0000");

    song_name = Bts_butter.isPlaying();
    console.log(song_name);

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        Bts_dynamite.stop();
        if(song_name == false){
            Bts_butter.play();
        }
        else{
            console.log("Song Name: BTS-butter");
            document.getElementById("song_id").innerHTML = "Song Name: BTS-butter Song";
        }
    }
}

function preload(){
    Bts_butter=loadSound("butter.mp3");
    Bts_dynamite=loadSound("dynamite.mp3");
    }

    function gotposes(results){
        if(results.length > 0){
            console.log(results);
            scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);
             
            leftWrist_x = results[0].pose.leftWrist.x;
            leftWrist_y = results[0].pose.leftWrist.y;
            console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);
    
            rightWrist_x = results[0].pose.rightWrist.x;
            rightWrist_y = results[0].pose.rightWrist.y;
            console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
        }
    }
    