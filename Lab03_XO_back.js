
function onClick()
{
    let i;

    this.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Letter_x.svg/1200px-Letter_x.svg.png";
    this.className = 'X';
    
    this.removeEventListener('click', onClick);
    if(isEnd() === true)
    {
        return;
    }
    turn += 1;

    do
    {
        i = Math.floor(Math.random() * 9);
    }while(board[i].className !== 'field');
    
    board[i].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/LetterO.svg/1200px-LetterO.svg.png";
    board[i].className = 'O';

    board[i].removeEventListener('click', onClick);
    isEnd();
    turn += 1;
    
}

function getPlayer()
{
    let player = turn % 2;
    if(player === 0)
        return 'X';
    else if(player === 1)
        return 'O';
}

function isEnd()
{

    if(
        (board[0].className === board[4].className && board[4].className === board[8].className && board[0].className !== 'field') ||
        (board[2].className === board[4].className && board[4].className === board[6].className && board[2].className !== 'field') ||
        (board[0].className === board[1].className && board[1].className === board[2].className && board[0].className !== 'field') ||
        (board[3].className === board[4].className && board[4].className === board[5].className && board[3].className !== 'field') ||
        (board[6].className === board[7].className && board[7].className === board[8].className && board[6].className !== 'field') ||
        (board[0].className === board[3].className && board[3].className === board[6].className && board[0].className !== 'field') ||
        (board[1].className === board[4].className && board[4].className === board[7].className && board[1].className !== 'field') ||
        (board[2].className === board[5].className && board[5].className === board[8].className && board[2].className !== 'field') )
        {
            let player = getPlayer();
            if(player === 'X')
                result.innerHTML = "You win!!";
            else if(player === 'O')
                result.innerHTML = "AI win!!";
            for(const square of board)
            {
                square.removeEventListener('click', onClick);
            }
            return true;
        }
    else if(turn === 8)
    {
        result.innerHTML = "Draw!!";
        return true;
    }
    else 
        return false;
}

var turn = 0;
const board = document.querySelectorAll('img');
const result = document.querySelector('.result');
for(const square of board)
{
    square.addEventListener('click', onClick);
}
