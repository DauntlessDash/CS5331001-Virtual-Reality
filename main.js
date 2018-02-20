document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('a-scene');
    const splash = document.querySelector('#splash');
    const loading = document.querySelector('#splash .loading');
    const startButton = document.querySelector('#splash .start-button');

    const emitEvent = (eventName, listeners) => {
        listeners.forEach((listener) => {
            const el = document.querySelector(listener);
            el.emit(eventName);
        })
    };

    const emitMediaEvent = (eventType, listeners) => {
        listeners.forEach((listener) => {
            const el = document.querySelector(listener);
            el.components.sound[eventType]();
        })
    };

    const activateSoundsForTouch = () => {
    	const sounds = document.querySelectorAll('a-sound')
        sounds.forEach((soundEl) => {
            soundEl.components.sound.playSound();
            soundEl.components.sound.stopSound();
        })
    };

    scene.addEventListener('loaded', function (e) {
        setTimeout(() => {
            loading.style.display = 'none';
            splash.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
            startButton.style.opacity = 1;
        }, 50);
    });

    startButton.addEventListener('click', function (e) {
        activateSoundsForTouch();
        splash.style.display = 'none';
        emitEvent('scene-started', ['#image-2']);
    });

    document.querySelector('#box-76').addEventListener('click', function (e) {
        emitEvent('box-76-clicked', ['#point-light-4', '#point-light']);
    });

    document.querySelector('#box-77').addEventListener('click', function (e) {
        emitEvent('box-77-clicked', ['#point-light-4', '#point-light']);
    });

    document.querySelector('#box-78').addEventListener('click', function (e) {
        emitEvent('box-78-clicked', ['#point-light']);
    });
});