const container = document.querySelector('#container');
const text = document.querySelector('#text');

const time = 7500;
const breatheTime = (time / 5) * 2;
const holdTime = time / 5;

const breathAnimation = () => {
    text.innerText = 'Breathe In';
    container.className = 'container grow';
    setTimeout(() => {
        text.innerText = 'Hold'
        setTimeout(() => {
            text.innerText = 'Breathe Out'
            container.className = 'container shrink';
        }, holdTime)
    }, breatheTime)
}

setInterval(breathAnimation, time);

breathAnimation();