const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const c4 = document.querySelector('.c4');
const c5 = document.querySelector('.c5');
const c6 = document.querySelector('.c6');

const upper = document.querySelector('.up1');
const upper2 = document.querySelector('.up2');
let aray = [c1,c2,c3,c4,c5,c6];
console.log(aray);

let random1 = Math.random();
let random2 = Math.random();
let random3 = Math.random();
let random4 = Math.random();
let random5 = Math.random();
let random6 = Math.random();

let rgb1 = Math.round(random1*260);
let rgb2 = Math.round(random2*260);
let rgb3 = Math.round(random3*260);
let rgb4 = Math.round(random4*260);
let rgb5 = Math.round(random5*260);
let rgb6 = Math.round(random6*260);


// console.log(rgb1,rgb2,rgb3,rgb4,rgb5,rgb6);


// let r1 = `rgb(${rgb1},${rgb2},${rgb3})`;
// let r2 = `rgb(${rgb2},${rgb3},${rgb3})`;
// let r3 = `rgb(${rgb1},${rgb3},${rgb2})`;
// let r4 = `rgb(${rgb4},${rgb5},${rgb6})`;
// let r5 = `rgb(${rgb5},${rgb4},${rgb6})`;
// let r6 = `rgb(${rgb6},${rgb2},${rgb2})`;


let rrandom = Math.round(Math.random()*5);
console.log(rrandom);

//let arry = [r1,r2,r3,r4,r5,r6];


c1.style.background = `rgb(${rgb1},${rgb2},${rgb3})`;
c2.style.background = `rgb(${rgb2},${rgb3},${rgb3})`;
c3.style.background = `rgb(${rgb1},${rgb3},${rgb2})`;
c4.style.background = `rgb(${rgb4},${rgb5},${rgb6})`;
c5.style.background = `rgb(${rgb5},${rgb4},${rgb6})`;
c6.style.background = `rgb(${rgb6},${rgb2},${rgb2})`;


let counter = 0;
//c1
if(aray.indexOf(c1) === rrandom){
    upper.textContent = `rgb(${rgb1},${rgb2},${rgb3})`;
    
    aray.forEach(col => {
        col.addEventListener('click', () => {
            col.style.background = 'rgba(0,0,0,0)';
            upper2.textContent = 'Wrong answer, try again';
        });
        c1.addEventListener('click', () => {
            col.style.background = `rgb(${rgb1},${rgb2},${rgb3})`;
            upper2.textContent = 'Correct, thumbs up!!!';
            col = c1;
        });

    })
    
    
};


//c2
 if(aray.indexOf(c2) === rrandom){
    upper.textContent = `rgb(${rgb2},${rgb3},${rgb3})`;
    
    aray.forEach(col => {
        col.addEventListener('click', () => {
            col.style.background = 'rgba(0,0,0,0)';
            upper2.textContent = 'Wrong answer, try again';
        });
        c2.addEventListener('click', () => {
            col.style.background = `rgb(${rgb2},${rgb3},${rgb3})`;
            upper2.textContent = 'Correct, thumbs up!!!';
            col = c2;
        
        });

    })
    
    
};



//c3
if(aray.indexOf(c3) === rrandom){
    upper.textContent = `rgb(${rgb1},${rgb3},${rgb2})`;
    
    aray.forEach(col => {
        col.addEventListener('click', () => {
            col.style.background = 'rgba(0,0,0,0)';
            upper2.textContent = 'Wrong answer, try again';

        });
        c3.addEventListener('click', () => {
            col.style.background = `rgb(${rgb1},${rgb3},${rgb2})`;
            upper2.textContent = 'Correct, thumbs up!!!';
            col = c3;
        });

    })
    
    
};


//c4
if(aray.indexOf(c4) === rrandom){
    upper.textContent = `rgb(${rgb4},${rgb5},${rgb6})`;
    
    aray.forEach(col => {
        col.addEventListener('click', () => {
            col.style.background = 'rgba(0,0,0,0)';
            upper2.textContent = 'Wrong answer, try again';
        });
        c4.addEventListener('click', () => {
            col.style.background = `rgb(${rgb4},${rgb5},${rgb6})`;
            upper2.textContent = 'Correct, thumbs up!!!';
            col = c4;
        });

    })
    
    
};


//c5
if(aray.indexOf(c5) === rrandom){
    upper.textContent = `rgb(${rgb5},${rgb4},${rgb6})`;
    
    aray.forEach(col => {
        col.addEventListener('click', () => {
            col.style.background = 'rgba(0,0,0,0)';
            upper2.textContent = 'Wrong answer, try again';
        });
        c5.addEventListener('click', () => {
            col.style.background = `rgb(${rgb5},${rgb4},${rgb6})`;
            upper2.textContent = 'Correct, thumbs up!!!';
            col = c5;
        });

    })
    
};


//c6
if(aray.indexOf(c6) === rrandom){
    upper.textContent = `rgb(${rgb6},${rgb2},${rgb2})`;
    
    aray.forEach(col => {
        col.addEventListener('click', () => {
            col.style.background = 'rgba(0,0,0,0)';
            upper2.textContent = 'Wrong answer, try again';
        });

        c6.addEventListener('click', () => {
            col.style.background = `rgb(${rgb6},${rgb2},${rgb2})`;
            upper2.textContent = 'Correct, thumbs up!!!';
            col = c6;
            
        });
        

    })
    
    
};


aray.forEach(click => {
    click.addEventListener('click', () => {
        counter++
        document.querySelector('.up3').textContent = `Number of attempts: ${counter}`;
    })
    
})

