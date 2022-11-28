for (let i = 0; i < 1; i++) {
    document.write('<table>')
    for (let i = 0; i < 6; i++) {
        document.write('<tr>')
        for (let i = 1; i <5; i++) {
            document.write(`<td>${i}</td>`)
        }
        document.write('</tr>')
    }
    document.write('</table>')
}