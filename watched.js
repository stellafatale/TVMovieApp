
const wtw = document.querySelectorAll('[data-type="wtw"]');
const watched = document.getElementById('watched');
wtw.forEach(element => {
    element.addEventListener('change', () => {
        if (element.checked === true) {
            console.log(element);
            let text = element.parentElement.childNodes[1].textContent;
            let li = document.createElement('li');
            li.textContent = text;
            watched.appendChild(li);
            element.parentElement.remove();
        }
    })
});

const wtw2 = document.querySelectorAll('[data-type="wtw2"]');
const watched2 = document.getElementById('watched2');
wtw2.forEach(element => {
    console.log(element);
    element.addEventListener('change', () => {
        if (element.checked === true) {
            let text = element.parentElement.childNodes[1].textContent;
            let li = document.createElement('li');
            li.textContent = text;
            watched2.appendChild(li);
            element.parentElement.remove();
        }
    })
});