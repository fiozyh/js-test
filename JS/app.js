// Question no 1
function quadraticEqn(a, b, c) {
    let x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let x = [x1, x2];
    console.log(x);
}

quadraticEqn(1, -1, -6);

// Question no 3
function areaOfCircle(r) {
    let A = (Math.PI * (Math.pow(r, 2)));
    let answer = [A];
    console.log(answer);
}

areaOfCircle(2);

// Question no 4
let eqn = Math.pow(8, 3);
console.log(eqn);

// Question no 5
let solve = document.querySelector('#solve');
function getRand(min, max) {
    let result = Math.floor(Math.random() * (max - min) ) + min;
    solve.innerHTML = result
}

// Question no 2
let staff = [
    {name: 'Jack Ma', gender: 'male', role: 'HR', complexion: 'fair'},
    {name: 'Okon Dan', gender: 'male', role: 'Programmer', complexion: 'dark'},
    {name: 'Suzan Joe', gender: 'female', role: 'Software Engineer', complexion: 'fair'},
    {name: 'Blessing Philip', gender: 'female', role: 'Secretary', complexion: 'dark'},
    {name: 'grace bassey', gender: 'female', role: 'Cleaner', complexion: 'dark'},
    {name: 'Mkpafrang Johnson', gender: 'male', role: 'frontend developer', complexion: 'fair'},
    {name: 'Jack Stevens', gender: 'male', role: 'Manager', complexion: 'dark'},
]

console.log(staff);

let staffString = "";

staff.forEach((staff) => {
    const {name, gender, role, complexion} = staff; 
    staffString += `
        <ul>
            <li giclass="size">${name}</li>
            <li>${gender}</li>
            <li>${role}</li>
            <li>${complexion}</li>
        </ul>
    `;
    document.querySelector('.staff-array').innerHTML = staffString
});




