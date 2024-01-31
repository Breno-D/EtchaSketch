const container = document.querySelector('.container');
const body = document.querySelector('body');

const stylesheet = document.styleSheets[0];
let blockRule;

for(let i = 0; i < stylesheet.cssRules.length; i++) {
    if(stylesheet.cssRules[i].selectorText === '.block') {
        blockRule = stylesheet.cssRules[i];
    }
  }


for(let i = 0 ; i<10000; i++)
{
    let content = document.createElement('div');
    content.classList.add('block');
    container.appendChild(content);
}

const divs = document.querySelectorAll('.container > div');
divs.forEach((div) => 
    {
        div.addEventListener('mouseenter', function handleHover(event)
        {
            event.target.classList.add("coloredBlock");
            event.stopPropagation();
        }
        );
    });

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', startResetProcess);

function startResetProcess()
{
    let divsToBeRemoved = document.querySelectorAll('.container > div');
    divsToBeRemoved.forEach((div) => { 
        div.classList.remove("coloredBlock");
        div.classList.add("disabled");
        container.removeChild(div);
        body.appendChild(div);
    })
    let newNumberOfSquaresPerSide = window.prompt("How many squares per side in the new canvas? (valueXvalue) max 100", 100);
    setNewCanvas(newNumberOfSquaresPerSide);
}

function setNewCanvas(squaresPerSide)
{
    let maxNumberOfDivs = squaresPerSide*squaresPerSide;
    let counter = 0;
    divs.forEach((div) =>{
        if(counter < maxNumberOfDivs)
        {
            div.classList.remove("disabled");
            body.removeChild(div);
            container.appendChild(div);
            counter++;
        }
        let squareSideValue = 900/squaresPerSide;
        blockRule.style.setProperty('width', squareSideValue+"px");
        blockRule.style.setProperty('height', squareSideValue+"px");
    })
}

