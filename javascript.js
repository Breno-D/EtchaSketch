const container = document.querySelector('.container');
console.log(container);

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
resetButton.addEventListener('click', removeColor);

function removeColor()
{
    divs.forEach((div) => { 
        div.classList.remove("coloredBlock");
    })

}