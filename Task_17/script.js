for (let i = 1; i < 7; i++) {
    let first = Math.floor(Math.random() * 255);
    let second = Math.floor(Math.random() * 255);
    let third = Math.floor(Math.random() * 255);
    document.write(`<p class="text" style="background-color: rgb(${first}, ${second}, ${third})">Абзац ${i}</p>`)
}