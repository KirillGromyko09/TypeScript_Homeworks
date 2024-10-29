const initialText: string = "This is a test sentence with some bad words.";
const initialForbiddenWords: string[] = ["bad", "test"];
function highlightForbiddenWords(text: string , forbiddenWords: string[]): string {
    forbiddenWords.forEach((word: string) => {
        const regex = new RegExp(`\\b${word}\\b`, "gi");
        text = text.replace(regex, `<del>${word}</del>`);
    })
    return text;
}
document.body.innerHTML = `
    <h1>Highlight forbidden words</h1>
    <form id="inputForm">
         <label for="textInput">Text:</label><br>
        <textarea id="textInput" rows="4" cols="50">${initialText}</textarea><br>
        <label for="forbiddenWordsInput">Forbidden Words (comma separated):</label><br>
        <input type="text" id="forbiddenWordsInput" value="${initialForbiddenWords.join(',')}"><br><br>
        <input type="submit" value="Highlight">
    </form>
    <h2>Result:</h2>
    <div id="result"></div>
`;

const form = document.getElementById('inputForm');
if (form) {
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const inputText: string = (document.getElementById('textInput') as HTMLTextAreaElement).value;
        const inputForbiddenWords: string[] = (document.getElementById('forbiddenWordsInput') as HTMLInputElement).value.split(',').map(word => word.trim());
        document.getElementById('result')!.innerHTML = highlightForbiddenWords(inputText, inputForbiddenWords);
    });
}
