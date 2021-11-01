const quote = document.querySelector('.quote');
const authorEl = document.querySelector('.author');
var i = 1;

export async function getQuotes() {  
    
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    quote.textContent = data[i].text;
    authorEl.textContent = data[i].author;
}

export function updateQuote() {
    i++;
    if(i == 3){
        i = 0;
    }
    getQuotes();
}