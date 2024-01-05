
function groupName() {
    let adj = ["New", "Radical", "Conservative", "Pragmatical", "Democratic", "Revolution", "United", "Liberal", "Republican", "National", "Royal"];
    let noun = [" Unionists", "ists", " Democrats", " Republicans", " Nationalists", " Peasants", " Liberalists", "ists", "ists", "s"];
    return adj[Math.floor(Math.random()*adj.length)]+noun[Math.floor(Math.random()*noun.length)]
}

let yourGroupName = groupName();
document.getElementById("name").innerHTML += yourGroupName;

// COLORS
colors = ["#ff8CEC", "#5abf73", "#fff365", "#70e9ff", "#ff4b44", "#3b48fa", "#21ff00", "#F201FA", "#4488bf", "#902a9e", "#63633a", "#959199", "#c4a4f4", "#050c00", "#00db33", "#061d2d"];
function groupColor() {
    colorIndex = colors[Math.floor(Math.random()*colors.length)];
    colors.splice(colorIndex, 1);
    return colorIndex;
}
let yourColor = groupColor();
document.getElementById("color").style = 'background-color: '+yourColor+';'

//the other groups
g1name = groupName();
g2name = groupName();
g3name = groupName();
g4name = groupName();
document.getElementById("g1n").innerHTML += g1name;
document.getElementById("g2n").innerHTML += g2name;
document.getElementById("g3n").innerHTML += g3name;
document.getElementById("g4n").innerHTML += g4name;

g1color = groupColor();
g2color = groupColor();
g3color = groupColor();
g4color = groupColor();
document.getElementById("g1c").style = 'background-color: '+g1color+';';
document.getElementById("g2c").style = 'background-color: '+g2color+';';
document.getElementById("g3c").style = 'background-color: '+g3color+';';
document.getElementById("g4c").style = 'background-color: '+g4color+';';
