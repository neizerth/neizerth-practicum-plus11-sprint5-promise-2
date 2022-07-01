const root = document.querySelector('#root');
const preloader = document.querySelector('#preloader');

async function getGirlsList(count) {
    const data = [];
    const promises = [];
    for (let i = 0; i < count; i++) {
        const promise = loadData()
            .then(item => data.push(item));
        promises.push(promise);
    }

    await Promise.all(promises);

    for (const item of data) {
        await renderImage(item);
    }
}

async function loadData() {
    const options = {
        type: 'json'
    }
    return await send('https://api.waifu.pics/sfw/neko', options);
}

async function getGirl () {
    try {
        const data = await loadData();
        renderImage(data);
    }
    catch (err) {
        console.log('Что-то пошло не так',);
    }
    
}

function renderImage(data) {    
    return new Promise((resolve, reject) => {
        const image = document.createElement('img');

        image.addEventListener('load', resolve)
        image.addEventListener('error', reject);
        image.classList.add('girl-image')
        image.src = data.url;

        root.append(image);
    })
}

document.addEventListener('click', getGirl);

function send(url, options = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = options.type
        xhr.addEventListener('load', e => {
            resolve(xhr.response);
        })
        xhr.addEventListener('error', reject);
        
        const method = options.method || 'GET';
        xhr.open(method, url);
        xhr.send(options.body);
    });
}

getGirlsList(3)
    .then(() => {
        preloader.remove()
    })