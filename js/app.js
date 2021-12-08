(function () {
    const button = document.querySelector('.button')
    const body = document.querySelector('.body')
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
    const value = document.querySelector('#hex-value')

    button.addEventListener('click', change)

    function change() {
        let wed = '#'

        for (let k = 0; k < 6; k++) {
            const emjay = Math.floor(Math.random() * hexValues.length)
            wed += hexValues[emjay]
        }
        value.textContent = wed
        body.style.backgroundColor = wed
    }
})()