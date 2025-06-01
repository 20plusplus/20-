$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);

const members = [
  {
    name: "Rudy",
    text: "Dummi. Mag Nasenbohren.",
    effect: () => {
      // Fullscreen-Overlay erstellen
      const overlay = $('<div id="rudy-overlay"></div>');
      $("body").append(overlay);

      // Nach 1 Sekunde wieder entfernen
      setTimeout(() => {
        overlay.fadeOut(300, () => overlay.remove());
      }, 1000);
    }
  },
  {
    name: "Shania",
    text: "Secret BadabingBadabung.",
    effect: () => {
      $("body").css("background", "#ff69b4");
      setTimeout(() => $("body").css("background", "#000"), 1000);
    }
  },
  {
    name: "Rami",
    text: "Dummi.Kaka.Pups.",
effect: () => {
  const ramiEl = $('.member[data-id="2"] img');
  const popup = $("#member-popup");

  ramiEl.addClass("spin-icon");
  popup.addClass("spin");

  setTimeout(() => {
    ramiEl.removeClass("spin-icon");
    popup.removeClass("spin");
    popup.css("transform", "translate(-50%, -50%)"); // ← WICHTIG!
  }, 1000);
}

  },
  {
    name: "Leon",
    text: "Dummi.Kaka.Pups.",
    effect: () => {
      const audio = new Audio("sounds/fart.mp3");
      audio.play();
    }
  },
  {
    name: "Yannik",
    text: "Dummi.Kaka.Pups.",
    effect: () => {
      $("body").append('<div id="explosion">💥</div>');
      $("#explosion").css({
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        fontSize: "80px",
        zIndex: 99999
      });
      setTimeout(() => $("#explosion").remove(), 1000);
    }
  },
  {
    name: "Erik",
    text: "Dummi.Kaka.Pups.",
    effect: () => {
      $("#member-name").text("Erik.");
    }
  },
  {
    name: "Jessi-Chan",
    text: "Dummi.Kaka.Pups.",
    effect: () => {
      $("#member-info").append("<br><em>UwU~ Senpai noticed you</em>");
    }
  },
  {
    name: "Semi",
    text: "Dummi.Kaka.Pups.",
    effect: () => {
      $("#member-popup").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    }
  }
];

$(".member").click(function () {
  const id = $(this).data("id");
  $("#member-name").text(members[id].name);
  $("#member-info").html(members[id].text);
  $("#member-popup").removeClass("hidden");
  members[id].effect();
});

$("#popup-close").click(function () {
  $("#member-popup").addClass("hidden");
});

$("#nase-btn").click(function () {
    const $tagline = $("#tagline");
    const originalText = $tagline.html();

    const sound = document.getElementById("boing-sound");
    if (sound) sound.play();

    $tagline
        .addClass("animated rubberBand")
        .html("Looking for Rudy's Holes…");

    setTimeout(function () {
        $tagline
            .removeClass("animated rubberBand")
            .addClass("animated tada")
            .html("Mission completed: U picked in Rudy's Nose!");
    }, 1500);

    setTimeout(function () {
        $tagline.removeClass("animated tada").html(originalText);
    }, 5000);
});


$("#play-btn").click(function () {
    const player = $("#theme-music")[0];
    const icon = $("#music-player");

    if (player.paused) {
        player.play();
        icon.addClass("playing");
    } else {
        player.pause();
        icon.removeClass("playing");
    }
});

const quotes = [
  "Tora:,,Yummy!'' Rami:,,Ja?:D''.",
  "Boing.",
  "Bing.",
  "Bang.",
  "Beng.",
  "Bong.",
];

$("#random-quote-btn").click(() => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  $("#random-quote-output").text(quote);
});

let partyOn = false;
const partyAudio = new Audio("sounds/party.mp3");
partyAudio.loop = true;

$("#party-btn").click(() => {
    if (!partyOn) {
        $("body").addClass("party-mode");
        partyAudio.play();
        $("#party-btn").text("AAAAAAAAAA"); 
        partyOn = true;
    } else {
        $("body").removeClass("party-mode");
        partyAudio.pause();
        partyAudio.currentTime = 0;
        $("#party-btn").text("aaaaaaaaaa");
        partyOn = false;
    }
});

let egg = "";
$(document).keydown(e => {
  egg += e.key.toLowerCase();
  if (egg.includes("nase")) {
    $("#tagline").text("Boom");
    egg = "";
  }
});

$(document).keydown(function (e) {
    if (e.key.toLowerCase() === "n") {
        // Nasenbohr-Effekt starten!
        const overlay = $('<div id="rudy-overlay"></div>');
        $("body").append(overlay);

        const boing = document.getElementById("boing-sound");
        if (boing) boing.play();

        setTimeout(() => {
            overlay.fadeOut(300, () => overlay.remove());
        }, 1000);
    }
});