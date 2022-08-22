const song = document.getElementById("roitoiluon");

const sleep = ms => new Promise(r => setTimeout(r, ms));

song.addEventListener("play", function() {
    song.volume = 0.2;
    setTimeout(function() {
        song.volume = 1.0;
    }
    , 10000);
});

function playSong(id){
    document.getElementById(id).play();
}

// document.getElementById("train").addEventListener("play", function(){
//     setTimeout(function() {
//         document.getElementById("train").volume = 0.5;
//     }, 2750);
// });

// document.getElementById("nhintrai").addEventListener("play", function(){
//     document.getElementById("train").volume = 0.2;
// });

document.getElementById("thanhxuan").addEventListener("play", function(){
    document.getElementById("thanhxuan").volume = 0.2;
    setTimeout(function() {
        document.getElementById("thanhxuan").volume = 1;
    }, 7000);
    setTimeout(function() {
        document.getElementById("thanhxuan").volume = 0.2;
    }, 29125);
});
