const maincontainer = document.createElement("div");
maincontainer.className = "maincontainer";
document.body.appendChild(maincontainer);

const drumlist = [
    "Clap",
    "Hihat",
    "Kick",
    "Openhat",
    "Ride",
    "Snare",
    "Tink",
    "Tom"
];

function playSound(name) {
    const audio = new Audio(`Sounds/${name}.wav`);
    audio.play();
}


drumlist.forEach(name => {
    const box = document.createElement('div');
    box.className ="box";
    box.id = name;
    box.textContent = name;
    box.addEventListener('click', () => playSound(name));
    maincontainer.appendChild(box);
});

document.addEventListener('keydown', (event) => {
    const keyMap = {
        'q': 'Clap',
        'w': 'Hihat',
        'e': 'Kick',
        'r': 'Openhat',
        't': 'Ride',
        'y': 'Snare',
        'u': 'Tink',
        'i': 'Tom'
    };

    const drumName = keyMap[event.key];
    if (drumName) {
        playSound(drumName);
        const box = document.getElementById(drumName);
        if (box) {
            box.classList.add('active');
            setTimeout(() => {
                box.classList.remove('active');
            }, 100);
        }
    }
});