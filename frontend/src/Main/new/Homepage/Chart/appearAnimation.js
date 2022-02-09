var leftWidths = [];


export default  function drawAppearAnimation (parentElement, classKey, percentSize, index) {

    /** Draw Appearing Animation */

    let elemWidth;
    let overlap_width = window.innerWidth / 38;
    let left, top;
    let opacity = 0;
    let id = null;

    const element = parentElement.getElementsByClassName(`${classKey}-1`)[0];
    const nextElement = parentElement.getElementsByClassName(`${classKey}-2`)[0];
    element.innerHTML = `${percentSize}<small>%</small>`;

    /**
     * Calculate the width and height of circle and assign width value by percent size
     */
    if(window.innerWidth >= 1920) elemWidth = Math.sqrt(percentSize) * 63;
    else if( window.innerWidth >= 1440 && window.innerWidth < 1920) elemWidth = Math.sqrt(percentSize) * 60;
    else if( window.innerWidth >= 1200 && window.innerWidth < 1440 ) {
        elemWidth = Math.sqrt(percentSize) * 50;
    }
    else if( window.innerWidth < 1200 ) elemWidth = Math.sqrt(percentSize) * 40;

    elemWidth = elemWidth <= 150 ? elemWidth = 150 : elemWidth;

    element.style.width = (elemWidth) + "px";
    element.style.height = (elemWidth) + "px";
    element.style.lineHeight = (elemWidth) + "px";

    /**
     *  Calculate the position of starting point
     */
    switch (index) {
        case 0:
            top = 315; left = (window.innerWidth - elemWidth) / 2;
            leftWidths.push((window.innerWidth - elemWidth) / 2);
            break;
        case 1:
            top = 250; left = 100;
            leftWidths.push(leftWidths[0] - elemWidth + 100);
            leftWidths.push(elemWidth);
            break;
        case 2:
            top = 200; left = 50;
            break;
        case 3:
            top = 500; left = 25;
            break;
        default:
            break;
    }

    /**
     * Draw animation.
     */

    id = setInterval(appearFrame, 1);

    function appearFrame() {
        if (index == 0 && top <= 0) {
            clearInterval(id);
        }
        else if (index == 0 && top > 0) {
            top -= 315 / 300;
            opacity += 1 / 300;
            element.style.opacity = opacity;
            element.style.top = top + "px";
            element.style.left = left + "px";
        }
        else if (index == 1 && top <= 0) {
            clearInterval(id);

        }
        else if (index == 1 && top > 0) {
            top -= 250 / 300;
            left += (leftWidths[0] - elemWidth + overlap_width - 100) / 300;
            opacity += 1 / 300;
            element.style.opacity = opacity;
            element.style.top = top + "px";
            element.style.left = left + "px";
        }
        else if (index == 2 && left >= (leftWidths[1] - elemWidth - 25)) {
            clearInterval(id);

        }
        else if (index == 2 && left < (leftWidths[1] - elemWidth - 25)) {
            left += (leftWidths[1] - elemWidth - 75) / 300;
            top -= 200 / 300;
            opacity += 1 / 300;
            element.style.opacity = opacity;
            element.style.left = left + "px";
            element.style.top = top + "px";

        }
        else if (index == 3 && top <= ( leftWidths[2] - overlap_width)) {
            clearInterval(id);
        }
        else if (index == 3 && top > ( leftWidths[2] - overlap_width)) {
            top -= ( 500 - leftWidths[2] + overlap_width) / 300;
            left += (leftWidths[0] - elemWidth + overlap_width) / 300;
            opacity += 1 / 300;
            element.style.opacity = opacity;
            element.style.top = top + "px";
            element.style.left = left + "px";
        }
    }
    
    nextElement.className = nextElement.className.replace(/.$/, "1");
    element.className = element.className.replace(/.$/, "2");

}