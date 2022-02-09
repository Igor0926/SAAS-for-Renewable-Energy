export default function boolSet ( newLeft,
                                  newTop,
                                  newOpacity,
                                  delta, 
                                  left, 
                                  top, 
                                  opacity) {

    var directionLeft = delta.left >= 0 ? true : false;
    var directionTop = delta.top >= 0 ? true : false;
    var directionOpacity = delta.opacity >= 0 ? true : false;

    var moveLeft = true;
    var moveTop = true;
    var changeOpacity = true;

    if (directionLeft && directionTop && directionOpacity) {
        moveLeft = left < newLeft ? true : false;
        moveTop = top < newTop ? true : false;
        changeOpacity = opacity < newOpacity ? true : false;
    } 
    else if (directionLeft && directionTop && !directionOpacity) {
        moveLeft = left < newLeft ? true : false;
        moveTop = top < newTop ? true : false;
        changeOpacity = opacity > newOpacity ? true : false;
    } 
    else if (directionLeft && !directionTop && directionOpacity) {
        moveLeft = left < newLeft ? true : false;
        moveTop = top > newTop ? true : false;
        changeOpacity = opacity < newOpacity ? true : false;
    } 
    else if (directionLeft && !directionTop && !directionOpacity) {
        moveLeft = left < newLeft ? true : false;
        moveTop = top > newTop ? true : false;
        changeOpacity = opacity > newOpacity ? true : false;
    } 
    else if (!directionLeft && directionTop && directionOpacity) {
        moveLeft = left > newLeft ? true : false;
        moveTop = top < newTop ? true : false;
        changeOpacity = opacity < newOpacity ? true : false;
    } 
    else if (!directionLeft && directionTop && !directionOpacity) {
        moveLeft = left > newLeft ? true : false;
        moveTop = top < newTop ? true : false;
        changeOpacity = opacity > newOpacity ? true : false;
    } 
    else if (!directionLeft && !directionTop && directionOpacity) {
        moveLeft = left > newLeft ? true : false;
        moveTop = top > newTop ? true : false;
        changeOpacity = opacity < newOpacity ? true : false;
    } 
    else {
        moveLeft = left > newLeft ? true : false;
        moveTop = top > newTop ? true : false;
        changeOpacity = opacity > newOpacity ? true : false;
    }

    return([moveLeft, moveTop, changeOpacity]);
};
