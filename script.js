boyksr = document.getElementById('boyksr')
wrapper = document.getElementsByClassName('wrapper')[0]
text = document.getElementById('boyksr-text')
button = document.getElementById('boyksr-btn')
vrchat = document.getElementsByClassName('vrchat')[0]
unmute = document.getElementsByClassName('unmute')[0]

video = document.getElementsByClassName('boyksr_vid')[0]

window.onload = () => {
    setTimeout(() => {
        //boyksr.src = 'images/boykisser_meow.png'
        text.classList.add('pop-up')

        setTimeout(() => {
            button.classList.add('pop-up')
            vrchat.classList.add('pop-up')
            setTimeout(() => {
                button.classList.remove('pop-up')
                button.style.opacity = 1
            }, 1000)
        }, 300)
    }, 800)

}
var muted = true
mute_modal = document.getElementsByClassName('mute-modal')[0]
mute_btn = document.getElementsByClassName('unmute')[0]
button.addEventListener('mouseover', () => {
    boyksr.src = 'images/boykisser_meow.png'
    boyksr.style.transform = 'scale(1.05)'
    boyksr.style.animation = 'shake 0.3s infinite'

    video.play()

    if (muted) {
        mute_modal.style.display = 'block'

        var rect = mute_btn.getBoundingClientRect();
        mute_modal.style.top = rect.top + 'px'
        mute_modal.style.left = (rect.left + 125) + 'px'
    }
    else {
        mute_modal.style.display = 'none'
    }
})

button.addEventListener('mouseout', () => {
    boyksr.src = 'images/boykisser_smile.png'
    boyksr.style.transform = 'scale(1)'
    boyksr.style.animation = 'none'

    video.pause().currentTime(0).trigger('loadstart')
})

button.addEventListener('click', () => {
    window.open('https://vrchat.com/home/group/grp_da97de09-4b4e-4b0f-8243-ecad5f91fe14', '_blank')
})



mute_btn.addEventListener('click', () => {
    muted ? mute_btn.children[0].src = 'images/boykisser_meow.png' : mute_btn.children[0].src = 'images/boykisser_muted.png'
    muted ? muted = false : muted = true

    video.muted = !video.muted;
    mute_modal.style.display = 'none'
    mute_btn.style.opacity = 0
})
