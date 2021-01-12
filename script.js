// Declarations 

const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMsg = document.querySelector('.final')
const replay = document.querySelector('#replay')

// Event Listeners 

runCountdown()

replay.addEventListener('click', () => {
    resetDOM();
    runCountdown();
})

// Functions 

function resetDOM() {
    counter.classList.remove('hide')
    finalMsg.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}

function runCountdown() {
    nums.forEach((num, idx) => {
        // console.log(num, idx)
        const nextToLastNum = nums.length - 1

        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx !== nextToLastNum) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMsg.classList.add('show')
            }
        })
    })
}