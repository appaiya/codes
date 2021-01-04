
const letters = 'abcdefghijklmnopqrstuvwxyz';


fade = (sentence, position) => {        
    let pos = position ? position : 0;
    if(sentence.length && pos < 26) {
        sentence = sentence.split(letters[pos]).join('');
        console.log(sentence + ' --- Removed letter ' + letters[pos]);
        fade(sentence, pos+1);
    }
}

alphabetFades = (input) => {
    console.log(input);
    fade(input.toLowerCase());
}

alphabetFades('Where there is a will there is a way');

/**
 * Algorithm for Alphabets fade
 * 
 * Read the sentence and find the letter and replace with the ''
 * 
 */