let black = '<td style="background-color:black;heigth:50px">&nbsp;</td>';
let white = '<td>&nbsp;</td>';
let result = '';
let row = true;

for (let t = 0; t < 1; t++) {
    document.write('<h2>Результат:</h2>');
    document.write('<table>');

    for (let r = 0; r < 8; r++) {
        for (let d = 0; d < 8; d++) {
            if ((d+row) % 2 == 0) {
                result += white;
            } else {
                result += black;
            }
        }

        document.write(`<tr>${result}</tr>`);
        result='';
        row = ! row;
    }

    document.write('</table>');
}