showWords("I've", "been", "learning", "JavaScript", "for", "a", "month");

function showWords(...args) {
    return document.write(args.join(' '));
}