// Event handlers
function changeImage() 
{
    document.getElementById("littleBrain").style.height="35%";
    document.getElementById("littleBrain").style.width="35%";
    return true;
}

function alertMe() 
{
    alertMsg = document.littleBrain.src + "\nHeight: " + document.littleBrain.height
        + "\nWidth: " + document.littleBrain.width;
    alert(alertMsg);
    return true;
}

/**
 * Comment
 */
function changeColor() 
{
    document.getElementById("h3Style").style.color="red";
    document.getElementById("h3Style").firstChild.nodeValue="Excited";
    return true;
}

/**
 * Comment
 */
function changeColorAgain() 
{
    document.getElementById("h3Style").style.color="gray";
    document.getElementById("h3Style").firstChild.nodeValue="Bored";
    return true;
}

/**
 * Comment
 */
function showPara() {
    document.getElementById("firstParagraph").style.visibility=(document.formEx.firstPara.checked) ?
        "visible" : "hidden";
    document.getElementById("secondParagraph").style.visibility=(document.formEx.secondPara.checked) ?
        "visible" : "hidden";
    document.getElementById("thirdParagraph").style.visibility=(document.formEx.thirdPara.checked) ?
        "visible" : "hidden";
    return true;
}


/**
 * Comment
 */
function mousePos(e) 
{
    if (!mIE)
    {
        mouseX = e.pageX;
        mouseY = e.pageY;
    }
    else 
    {
        mouseX = event.clientX + document.body.scrollLeft;
        mouseY = event.clientY + document.body.scrollTop;
    }
    document.formEx2.mouseX.value = mouseX;
    document.formEx2.mouseY.value = mouseY;
    return true;
}
