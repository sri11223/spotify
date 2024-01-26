let songIndex = 0;
let audioelement = new Audio("https://res.cloudinary.com/dknw280mr/video/upload/v1705775233/dxod2sjadl0gvs6nvcrx.mp3")
let masterplay = document.getElementById("masterplay")
let myprogressbar = document.getElementById("myprogressbar")
let gif = document.getElementById("gif")
let aaa = document.getElementById("masterinfo")
let songs = [
    { songName: "Beast Mode", filePath: "https://res.cloudinary.com/dknw280mr/video/upload/v1705775233/dxod2sjadl0gvs6nvcrx.mp3", coverPAth: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/beast-et00311733-13-04-2022-01-25-10.jpg" },
    { songName: "Let ME love You", filePath: "https://res.cloudinary.com/dknw280mr/video/upload/v1705777870/aaucawhubzveh3e357ez.mp3", coverPAth: "https://res.cloudinary.com/dknw280mr/image/upload/v1666089018/cld-sample-2.jpg" },
    { songName: "Yaalo Yaalo", filePath: "https://res.cloudinary.com/dknw280mr/video/upload/v1705778159/dg4z4mnlbvawk8pw7eym.mp3", coverPAth: "https://assets.gadgets360cdn.com/pricee/assets/product/202301/Animal_1673270841.jpg" },
    { songName: "Ammayi", filePath: "https://res.cloudinary.com/dknw280mr/video/upload/v1705778178/durwqihdbaurziqbwjt4.mp3", coverPAth: "https://assets.gadgets360cdn.com/pricee/assets/product/202301/Animal_1673270841.jpg" },
    { songName: "Sooride Godugupathhi", filePath: "https://res.cloudinary.com/dknw280mr/video/upload/v1705778192/wvnvuxx0xqgq3tgoffzp.mp3", coverPAth: "https://assets-in.bmscdn.com/discovery-catalog/events/et00301886-vpwtttdmdt-landscape.jpg" },
    { songName: "Dum Masala", filePath: "https://res.cloudinary.com/dknw280mr/video/upload/v1705778251/xze9mw2yifu9vcpa7tzi.mp3", coverPAth: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Guntur_Kaaram_film_poster.jpg/220px-Guntur_Kaaram_film_poster.jpg" },
    { songName: "Dosti", filePath: "https://res.cloudinary.com/dknw280mr/video/upload/v1705778744/bmksisvabnfgsvisxghr.mp3", coverPAth: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg" },
    { songName: "Samayamma", filePath: "https://res.cloudinary.com/dknw280mr/video/upload/v1705778860/h57azaufvoynwegpjl98.mp3", coverPAth: "https://cdn.123telugu.com/videosimg/wp-content/uploads/2023/07/maxresdefault-32.jpg" },
    { songName: "O Antava Oo Anthava", filePath: "https://res.cloudinary.com/dknw280mr/video/upload/v1705779007/lzd76sm3mokj7nydchph.mp3", coverPAth: "https://tse2.explicit.bing.net/th?id=OIP.yfiJs6jQUF2j_VfGl13M4wHaJQ&pid=Api&P=0&h=180" },
    { songName: "Srivalli", filePath: "https://res.cloudinary.com/dknw280mr/video/upload/v1705778981/tyntcssb5qlux5hd4rcj.mp3", coverPAth: "https://tse2.explicit.bing.net/th?id=OIP.yfiJs6jQUF2j_VfGl13M4wHaJQ&pid=Api&P=0&h=180" },

]
masterplay.addEventListener("click", () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play()
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-circle-pause")
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause()
        masterplay.classList.remove("fa-circle-pause")
        masterplay.classList.add("fa-circle-play")
        gif.style.opacity = 0;
    }
})
audioelement.addEventListener("timeupdate", () => {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100)
    myprogressbar.value = progress
})
myprogressbar.addEventListener("change", () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100
})
const makeallplays = () => {
    Array.from(document.getElementsByClassName("songPlayerItem")).forEach((element) => {
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    })
}
Array.from(document.getElementsByClassName("songPlayerItem")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeallplays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioelement.src = songs[songIndex].filePath
        audioelement.currentTime = 0;
        audioelement.play()
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-circle-pause")
        aaa.innerHTML = songs[songIndex].songName
    })
})
document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    audioelement.src = songs[songIndex].filePath
    audioelement.currentTime = 0;
    audioelement.play()
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
    aaa.innerHTML = songs[songIndex].songName
    gif.style.opacity = 1;
})
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1
    }
    audioelement.src = songs[songIndex].filePath
    audioelement.currentTime = 0;
    audioelement.play()
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
    aaa.innerHTML = songs[songIndex].songName
    gif.style.opacity = 1;
})