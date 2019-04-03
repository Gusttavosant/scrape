const scrapeIt = require("scrape-it")

scrapeIt("https://www.imdb.com/name/nm0000226/",{
    filmes:{
        listItem: "[id^=actor-]",
        data: {
            url:{
                selector: 'a:first-child',
                attr: 'href'
            }
        }
    }
})
.then( page => {
    urls = page.filmes( filme => 'https://www.imdb.com' + filme.url)

    Promise.all(urls.slice(0,3).map( url => getPage(url) ))
    .then(result => {
            console.log(result);
    })
})
.catch( err => console.log(err));







let getPage = url => {
console.log(`Start ${url}`);

    return scrapeIt(url, {
        titulo: "h1",
        Tempo: "div.subtext time",
        Sinopse: "div.summary_text"
    }).catch( err => console.log(err));
}
  Promise.all([getPage('https://www.imdb.com/title/tt4154664/')])
  .then( data => console.log(data))


















// scrapeIt('https://www.imdb.com/title/tt4154664/', {
//     titulo: "h1",
//     Tempo: "div.subtext time",
//     Sinopse: "div.summary_text"
   
//     }
// ).then(({ data }) => {
//     console.log(data)
// })
