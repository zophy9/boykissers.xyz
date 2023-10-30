boyksr = document.getElementById('boyksr')
wrapper = document.getElementsByClassName('wrapper')[0]
text = document.getElementById('boyksr-text')
vrc_button = document.getElementById('boyksr-btn')
disc_button = document.getElementById('boyksr-dbtn')
vrchat = document.getElementsByClassName('vrchat')[0]
discord = document.getElementsByClassName('discord')[0]
unmute = document.getElementsByClassName('unmute')[0]

video = document.getElementsByClassName('boyksr_vid')[0]

window.onload = () => {
    setTimeout(() => {
        //boyksr.src = 'images/boykisser_meow.png'
        text.classList.add('pop-up')

        setTimeout(() => {
            vrc_button.classList.add('pop-up')
            disc_button.classList.add('pop-up')
            vrchat.classList.add('pop-up')
            discord.classList.add('pop-up')
            setTimeout(() => {
                vrc_button.classList.remove('pop-up')
                vrc_button.style.opacity = 1
                disc_button.classList.remove('pop-up')
                disc_button.style.opacity = 1
            }, 1000)
        }, 300)
    }, 800)

}
var muted = true
mute_modal = document.getElementsByClassName('mute-modal')[0]
mute_btn = document.getElementsByClassName('unmute')[0]

function meowover() {
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
}

function meowout() {
    boyksr.src = 'images/boykisser_smile.png'
    boyksr.style.transform = 'scale(1)'
    boyksr.style.animation = 'none'

    video.pause().currentTime(0).trigger('loadstart')
}

vrc_button.addEventListener('mouseover', meowover())
vrc_button.addEventListener('mouseout', meowout())
disc_button.addEventListener('mouseover', meowover())
disc_button.addEventListener('mouseout', meowout())


vrc_button.addEventListener('click', () => {
    window.open('https://vrchat.com/home/group/grp_da97de09-4b4e-4b0f-8243-ecad5f91fe14', '_blank')
})
disc_button.addEventListener('click', () => {
    window.open('https://discord.gg/tV6ADEnf', '_blank')
})


mute_btn.addEventListener('click', () => {
    muted ? mute_btn.children[0].src = 'images/boykisser_meow.png' : mute_btn.children[0].src = 'images/boykisser_muted.png'
    muted ? muted = false : muted = true

    video.muted = !video.muted;
    mute_modal.style.display = 'none'
    mute_btn.style.opacity = 0
})
