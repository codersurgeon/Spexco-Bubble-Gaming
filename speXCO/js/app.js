
//this application finds the highest total value by generating random numbers by taking a value from the user
const form=document.querySelector("#game-form");
const gameStartInput= document.querySelector("#blockSize"); // received value
let stringHtml="";
let areaBlockSize;
eventListeners();

function eventListeners()
{
    form.addEventListener("submit",StartGame);
    form.addEventListener("reset",EndGame);
}

function StartGame(e)
{
    e.preventDefault();
    areaBlockSize = gameStartInput.value;
   if(areaBlockSize===null || areaBlockSize==="")
            showPatternModal("Error","Please enter a value.");
             else
                 drawPatternTriangle (areaBlockSize);
}

function EndGame(e)
{
    e.preventDefault();
    if(areaBlockSize===null || areaBlockSize===""|| areaBlockSize===undefined )
         showPatternModal("Error","Enter a value to start the game and press Start Game.");
    gameStartInput.value="";
    clearArea();

}

function drawPatternTriangle(size)
{
    let bubbleArray =[...new Array(parseInt(size))].map((_arr, index) =>
     [...new Array(Math.pow(2,index))].map(() => Math.floor(Math.random() * 100))); // array created
    let sumValue =bubbleArray.map(_array => Math.max(..._array)).reduce((a, b) => a + b); // total value
    for(let i=0; i<size; i++)
    {
        for(let j=0; j<Math.pow(2,i); j++)
        {
            stringHtml+= `<span class='dot'><p>${bubbleArray[i][j]}</p></span>`
        }
        stringHtml+='</br>';
        root = document.getElementsByTagName('p')[0];
    }
    document.getElementsByClassName("bubbleTriangle")[0].innerHTML=`${stringHtml}` ;
    document.getElementsByClassName("maxSumValue")[0].innerHTML=" <strong> Best Total:</strong> "+ `${sumValue}` ;

}

function showPatternModal(modalTitle,modalBody)
{
    $("#mdl").trigger('click');
    $("#mdl").modal("show");
    $(".modalTitle").text(modalTitle);
    $(".modalBody").text(modalBody);
}
function clearArea()
{
    document.getElementsByClassName("bubbleTriangle")[0].innerHTML="" ;
    document.getElementsByClassName("maxSumValue")[0].innerHTML="";

}
