const url = 'https://source.unsplash.com/NN83EXPgQ5c/600x600';

function closure(width, url) {
    let left = (window.innerWidth - width) / 2;
    let top = (window.innerHeight - width) / 2;
    let index = 0;

    return function (innerPicturesWidth) {
        left += innerPicturesWidth / 2;
        top += innerPicturesWidth / 2;
        width -= innerPicturesWidth;

        document.write(`<img style="
            position: absolute;
            left:${left}px;
            top:${top}px;
            width:${width}px;
            z-index:${index++};" 
            src="${url}" alt="picture"></img>`
        )
    }
}

let picture = closure(800, url);
picture(10)
picture(20)
picture(30)
picture(40)
picture(50)
picture(60)
picture(70)
picture(80)
picture(90)
picture(100)