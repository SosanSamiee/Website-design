window.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('contextMenu');

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        menu.style.display = 'block';

        const mw = menu.offsetWidth;
        const mh = menu.offsetHeight;
        const vw = window.innerWidth + window.scrollX;
        const vh = window.innerHeight + window.scrollY;

        let x = e.pageX;
        let y = e.pageY;
        if (x + mw > vw) x = vw - mw - 2;
        if (y + mh > vh) y = vh - mh - 2;

        menu.style.left = x + 'px';
        menu.style.top = y + 'px';

        console.log('contextmenu fired at', e.pageX, e.pageY);
    }, { capture: true });

    document.addEventListener('click', () => {
        menu.style.display = 'none';
    });

    menu.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (a) {
            e.preventDefault();
            e.stopPropagation();
            alert('Clicked: ' + a.textContent.trim());
            menu.style.display = 'none';
        }
    });

    let touchTimer = null;
    document.addEventListener('touchstart', (e) => {
        touchTimer = setTimeout(() => {
            const t = e.touches[0];
            const fakeEvent = { pageX: t.pageX, pageY: t.pageY, preventDefault() { } };
            document.dispatchEvent(new Event('contextmenu')); // برای لاگ
            menu.style.display = 'block';
            const mw = menu.offsetWidth, mh = menu.offsetHeight;
            let x = t.pageX, y = t.pageY;
            const vw = window.innerWidth + window.scrollX;
            const vh = window.innerHeight + window.scrollY;
            if (x + mw > vw) x = vw - mw - 2;
            if (y + mh > vh) y = vh - mh - 2;
            menu.style.left = x + 'px';
            menu.style.top = y + 'px';
        }, 600);
    }, { passive: true });

    document.addEventListener('touchend', () => {
        clearTimeout(touchTimer);
    });
});