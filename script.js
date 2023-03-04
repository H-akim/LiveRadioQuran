
class Player {
    constructor(){
        var heightplayer = document.getElementById("player") ;
        heightplayer.style.height = screen.height  + "px";
        if (screen.width < 630) {
            heightplayer.style.width = screen.width + "px";
        }
        var heightcontent = document.getElementById("content");
        heightcontent.style.height = screen.height-300  + "px";
    }
}
onload = new Player();


class Audio_Player{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_audio");
        this.play_pause_button = document.getElementById("play_button");
        this.isPlayed;  
        this.play_pause_button.addEventListener("click", ()=>{
            this.play_pause();
        });
        
        

        this.names_radio = [];
        this.names_radio[0] = "algerie Quran";
        this.names_radio[1] = "Saudi Arabia Quran";
        this.names_radio[2] = "Sharjah - United Arab Emirates Quran";  
        
        

        this.source_audio = [];
        this.source_audio[0] = "https://webradio.tda.dz/Coran_64K.mp3";
        this.source_audio[1] = "https://n02.radiojar.com/0tpy1h0kxtzuv";
        this.source_audio[2] = "https://l3.itworkscdn.net/smcquranlive/quranradiolive/icecast.audio";
        this.server = 0;
         
        this.setResource();

        document.getElementById("next").addEventListener("click",()=>{
                if (this.server<this.source_audio.length-1) {
                    ++this.server;
                    this.isPlayed = false;
                }else{
                    this.server = 0;
                }
                localStorage.setItem("save_position", this.server);
                this.setResource();
        });
        document.getElementById("back").addEventListener("click",()=>{
            if (this.server>0) {
                --this.server;
                this.isPlayed = false;
            }else{
                this.server = this.source_audio.length-1;
            }
            localStorage.setItem("save_position", this.server);
            this.setResource();
        });
    }

    setResource(){
        if (localStorage.getItem("save_position") != null ) {
            this.server = localStorage.getItem("save_position");
        }
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.names_radio[this.server];   
        this.play_pause();
    }


    play_pause(){
        if (this.isPlayed == false) {
            this.play_pause_button.src = "./images/pause.png";
            this.audio_file.play();
            this.isPlayed = true;
        }else{
            this.audio_file.pause();
            this.play_pause_button.src = "./images/play.png";
            this.isPlayed = false;
        }
    }
}
onload = new Audio_Player();


// ----------------------------- volume ---------------------------------

class Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.audio_file.volume = 50 / 100;

        this.volume_range = document.getElementById("volume_range");
        this.volume_range.addEventListener("change",()=>{
            this.audio_file.volume = this.volume_range.value / 100 ;
        });

            this.speed_range = document.getElementById("speed_range");
            this.speed_range.playbackRate = 1;
            this.speed_range.addEventListener("change",()=>{
             this.audio_file.playbackRate = this.speed_range.value / 100;
        });

    }
}
onload = new Volume();


// ------------------------------- color --------------------------------

class Color{
    constructor(){
        this.color1 = document.getElementById("color1");
        this.color1.addEventListener("click", ()=>{
            this.select_color("color1");
        });

        this.color2 = document.getElementById("color2");
        this.color2.addEventListener("click", ()=>{
            this.select_color("color2");
        });

        this.color3 = document.getElementById("color3");
        this.color3.addEventListener("click", ()=>{
            this.select_color("color3");
        });

        this.color4 = document.getElementById("color4");
        this.color4.addEventListener("click", ()=>{
            this.select_color("color4");
        });

        if (localStorage.getItem("COLOR")==null) {
            document.body.style.backgroundColor = "#8b2586";
        }
        this.select_color(localStorage.getItem("COLOR"));
    }
     select_color(color){
        if (color == "color1") {
            document.body.style.background = "green";
        }else if(color == "color2"){
            document.body.style.background= "black";
        }else if(color == "color3"){
            document.body.style.background = "#8b2586";
        }else if(color == "color4"){
            document.body.style.background = "#d4d400";
        }
        localStorage.setItem("COLOR",color)
     }
}
onload = new Color();