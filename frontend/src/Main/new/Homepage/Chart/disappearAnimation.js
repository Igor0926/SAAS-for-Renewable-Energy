
export default function drawDisappearAnimation (parentElement, classKey) {
    const element = parentElement.getElementsByClassName(`${classKey}-2`)[0];
    if (element && element.style && element.style.left) {

        let id = null;
        let _start_left = Number(element.style.left.replace("px", ""));
        let _start_top = Number(element.style.top.replace("px", ""));
        let _end_left = 100;
        let _end_top = 500;
        let opacity = 1;
        
        id = setInterval(disappearFrame, 1);

        function disappearFrame() {
            if (opacity <= 0) {
                clearInterval(id);
            }
            else {
                _start_left -= (_start_left - _end_left) / 300;
                _start_top += (_end_top - _start_top) / 300;
                opacity -= 1 / 300;

                element.style.top = _start_top + 'px';
                element.style.left = _start_left + 'px';
                element.style.opacity = opacity;
            }
        }
    }
}

