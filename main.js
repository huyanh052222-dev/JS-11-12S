const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});

function finalPage(){
    window.location.href = 'final.html';
}

let container = document.querySelectorAll('.container');
container.forEach(container=> {
    container.onmousemove = (e) => {
        let x = e.pageX - container.offsetLeft;
        let y = e.pageY - container.offsetTop;
        container.style.setProperty('--x', x + 'px');
        container.style.setProperty('--y', y + 'px');
    }
})