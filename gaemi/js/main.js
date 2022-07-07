$(function () {
    $('.mainSlider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        centerMode: true,
        centerPadding: '700px',
    })
    $('.slideArrows i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev');
    })
    $('.slideArrows i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext');
    })
    $('.video').YTPlayer({
        videoURL: 'https://youtu.be/_kfMKSHdC_E',
        containment: '.mainVideo',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
        //보일때만 재생하라는 옵션

    });
})