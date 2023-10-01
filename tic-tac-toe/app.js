const scr = document.getElementById('screen');
const gridbtn = document.getElementsByClassName('gridbtn');
let move = 0;
let grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

scr.innerText = "X";
document.getElementById('reset').onclick = reset;
console.table(grid);
for (let i = 0; i < gridbtn.length; i++) {
    let b = gridbtn[i];
    b.onclick = clicked
}


function check() {
    for (let i = 0; i < 3; i++) {
        let p = grid[i][0];
        let c = 1;
        for (let j = 1; j < 3; j++) {
            if (grid[i][j] && grid[i][j] === p)
                c++;
        }
        if (c == 3) {
            return p;
        }
    }
    for (let i = 0; i < 3; i++) {
        let p = grid[0][i];
        let c = 1;
        for (let j = 1; j < 3; j++) {
            if (grid[j][i] && grid[j][i] === p)
                c++;
        }
        if (c == 3) {
            return p;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i])
            return grid[0][i];
    }

    if ((grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) || (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]))
        return grid[1][1];
    else
        return 0;
}

function clicked() {
    const btn = this;
    const btnid = btn.getAttribute('id');
    btn.disabled = true;
    i = btnid[1];
    j = btnid[2];
    console.log("i=" + i + " j=" + j);
    console.log(btn);
    if (++move & 1) {
        grid[i][j] = 1;
        btn.innerText = "X";
        scr.innerText = "O";
    } else {
        grid[i][j] = 2;
        btn.innerText = "O";
        scr.innerText = "X";
    }
    let result = check();
    if (result === 0) {
        if (move === 9)
            scr.innerText = "Draw!";
        return;
    } else if (result === 1)
        scr.innerText = "X Wins!";
    else if (result === 2)
        scr.innerText = "O Wins!";
    for (let i = 0; i < gridbtn.length; i++) {
        const b = gridbtn.item(i);
        b.setAttribute('disabled', '');
    }
}

function reset() {
    console.table(grid);
    scr.innerText = "X";
    move = 0;
    grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    for (let i = 0; i < gridbtn.length; i++) {
        const b = gridbtn.item(i);
        b.innerText = " ";
        b.removeAttribute('disabled');
    }
}
