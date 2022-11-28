for (let i = 1; i < 7; i++) {
    let first = Math.floor(0 + Math.random() * (255 + 1 - 0));
    let second = Math.floor(0 + Math.random() * (255 + 1 - 0));
    let third = Math.floor(0 + Math.random() * (255 + 1 - 0));
    document.write(`<p class="text" style="background-color: rgb(${first}, ${second}, ${third})">Абзац ${i}</p>`)
}