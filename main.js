var counter = 1;
var score = 0;

$(document).ready(function(){
    scoredisplay();
    $("#count").click(function(){
       gun();      
        displaybullet();
        if(counter == 5){
            alert("No more Bullet");
             $("#target").hide();
            displaybutton();
        }
        counter++;
    })
    $("#target").click(function(){
        gun();
        $(this).hide();
        if(counter == 1){
            score = score + 50;
            scoredisplay();
        }
        else if(counter == 2){
            score = score + 40;
            scoredisplay();
        }
        else if(counter == 3){
            score = score + 30;
            scoredisplay();
        }
        else if(counter == 4){
            score = score + 20;
            scoredisplay();
        }
        else{
            score = score + 10;
            scoredisplay();
        }
        displaybutton();
        counter++;
    });
});

function gun(){
    var sound = $("audio")[0];
        sound.play();
};
function scoredisplay(){
    $("#gamescore").text("Score = "+score);
}
function displaybullet(){
    $("#bullet tr").last().remove();
}
function displaybutton(){
    $("button").css("visibility", "visible");
}