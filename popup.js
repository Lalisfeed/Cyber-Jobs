async function jobs() {
    await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
    .then(res => { return res.json()})
    .then(res => { 
        // console.log(res)
        const id_0 = res[Math.floor(Math.random() * parseInt(res.length))];
        const id_1 = res[Math.floor(Math.random() * parseInt(res.length))];
        const id_2 = res[Math.floor(Math.random() * parseInt(res.length))];
        // console.log(id_0)
        async function jobId(id) {
            await fetch('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json')
            .then(re => { return re.json()})
            .then(ids => {
                console.log(ids)
                document.querySelector('.news-headline').innerHTML +=  `<div class="jobtitle"><a href="`+ ids.url +`" target="_blank"></h2>`+ ids.title + `</h2></a><br><p>- `+ ids.type +` by `+ ids.by +`</p></div>`
            })
        }
        jobId(id_0)
        jobId(id_1)
        jobId(id_2)
    })
    .catch(errr => {
        console.log(errr)
    })
}
jobs()