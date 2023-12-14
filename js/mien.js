const quotes = [
    {
        "quote":"That which does not kill us makes us stronger",
        "author":"- Friedrich Nietzsche"
    },
    {
        quote:"Remember no one can make you feel inferior without your consent.",
        author:"- Eleanor Roosevelt"
    },
    {
        quote:"Your worth consists in what you are and not in what you have.",
        author:"- Thomas Edison"
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"- Oscar Wilde"
    },
    {
        quote:"This above all: to thine own self be true.",
        author:"- William Shakespeare"
    },
];
function Quote() {
    const random = Number.parseInt(Math.random()*quotes.length + 1);
    document.querySelector('#ranQuote').textContent = `\"${quotes[random].quote}\"`;
    document.querySelector('#ranAurthor').textContent = `--${quotes[random].author}`;

}


