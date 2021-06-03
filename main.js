const main = document.querySelector('.main'),
    emogeWrap = document.querySelector('.emogeWrap'),
    header = document.querySelector('.header'),
    defaultNav = document.querySelector('.header nav > .default_nav'),
    navA = document.querySelectorAll('.header nav a'),
    navButton = document.querySelectorAll('.default_nav a.nav_button'),
    hamburgerButton = document.querySelector('.hamburger > a'),
    sectionAll = document.querySelectorAll('section'),
    mainPage = document.querySelector('.main__title'),
    summaryPage = document.querySelector('.summary_page'),
    aboutMePage = document.querySelector('.aboutme'),
    toggleButton = document.querySelector('.checkbox'),
    myview = document.querySelector('.myview'),
    Anothers = document.querySelector('.Anothers'),
    myviewTitle = document.querySelector('.myview_title'),
    AnothersTitle = document.querySelector('.Anothers_title'),
    myviewCaption = document.querySelector('.myview_caption'),
    AnothersCaption = document.querySelector('.Anothers_caption'),
    navMenuPage = document.querySelector('.nav_menu'),
    navMenuPageButton = navMenuPage.querySelectorAll('.nav_button'),
    navOpen = document.querySelector('.nav_open'),
    navCloseButton = navOpen.querySelector('.delete'),
    smileButton = document.querySelector('.nav .smile a');

let signal = false,
    isThereEmoge = false;

function randomRotate() {
    return Math.random() * 360;
}

function pickText() {
    const emogeList = [
        "./images/img_key_60px_orange@3x.png",
        "./images/img_emba4_72px_yellow@3x.png",
        "./images/img_key_60px_orange@3x.png",
        "./images/img_happy1_72px_yellow_2@3x.png",
        "./images/img_key_60px_orange@3x.png",
        "./images/img_happy1_72px_yellow@3x.png",
        "./images/img_key_60px_orange@3x.png",
        "./images/img_love6_72px_yellow@3x.png",
        "./images/img_mad3_72px_yellow@3x.png",
        "./images/img_tired5_72px_yellow@3x.png",
    ];
    const pickNum = Math.floor(Math.random() * emogeList.length);
    return emogeList[pickNum];
}

function removeAllEmoge(allEmoge) {
    console.log('모든 이모지 삭제!!');
    allEmoge.forEach(emoge => {
        emogeWrap.removeChild(emoge);
    });

    isThereEmoge = false;
    console.log(`isThereEmoge = ${isThereEmoge}`);
}

function createEmoge(event) {
    if (event.target.className === 'new') return;

    const clickLocationX = event.clientX - 50,
        clickLocationY = event.clientY - 50;
    const emoge = pickText();
    console.log(clickLocationX, clickLocationY);


    console.log(randomRotate());
    let newImg = document.createElement('img');
    newImg.src = emoge;
    newImg.style.width = '90px';
    newImg.style.transform = `rotate(${randomRotate()}deg)`;
    emogeWrap.appendChild(newImg);

    console.log(newImg);

    newImg.classList.add('new');
    newImg.style.position = `absolute`;
    newImg.style.left = `${clickLocationX}px`;
    newImg.style.top = `${clickLocationY}px`;
    console.log(newImg);

    // audio.play();

    isThereEmoge = true;
    console.log(`isThereEmoge = ${isThereEmoge}`);
}

function stampEmoge() {

    smileButton.addEventListener('click', () => {
        console.log(signal);
        signal = !signal;

        if (signal) {
            console.log('signal');
            emogeWrap.style.display = 'block';
            main.style.position = 'fixed';
        } else {
            let allEmoge = document.querySelectorAll('.new');
            emogeWrap.style.display = 'none';
            main.style.position = 'relative';
            if (allEmoge.length !== 0) {
                removeAllEmoge(allEmoge);
            }
        }
    })

    emogeWrap.addEventListener('click', (event) => {
        createEmoge(event);
    })

}

function openNavPage() {
    hamburgerButton.addEventListener('click', () => {
        defaultNav.classList.add('hide');
        navMenuPage.classList.add('show');
        navOpen.classList.add('show');
    });

    navCloseButton.addEventListener('click', () => {
        defaultNav.classList.remove('hide');
        navMenuPage.classList.remove('show');
        navOpen.classList.remove('show');
    })

    navMenuPageButton.forEach(ele => {
        ele.addEventListener('click', () => {
            defaultNav.classList.remove('hide');
            navMenuPage.classList.remove('show');
            navOpen.classList.remove('show');
        })
    })
}

function defaultAboutme() {
    myview.classList.add('show_flex');
    myviewTitle.classList.add('show');
    AnothersCaption.classList.add('gray');
}

function aboutmeConts() {
    toggleButton.addEventListener('click', (event) => {
        const target = event.target;

        if (target.checked === false) {
            myview.classList.add('show_flex');
            Anothers.classList.remove('show_flex');
            myviewTitle.classList.add('show');
            AnothersTitle.classList.remove('show');
            AnothersCaption.classList.add('gray');
            myviewCaption.classList.remove('gray');
        } else if (target.checked === true) {
            myview.classList.remove('show_flex');
            Anothers.classList.add('show_flex');
            myviewTitle.classList.remove('show');
            AnothersTitle.classList.add('show');
            myviewCaption.classList.add('gray');
            AnothersCaption.classList.remove('gray');
        }
    })
}

function handleClickNav() {
    navA.forEach(ele => {
        ele.addEventListener('click', event => {
            event.preventDefault();
        })
    });

    navButton.forEach((ele, index) => {
        ele.addEventListener('click', (event) => {
            event.preventDefault();
            let height = 0;
            for (let i = 0; i < index; i++) {
                let sectionHeight = sectionAll[i].clientHeight;
                height += sectionHeight;
            }
            window.scrollTo({
                top: height,
                behavior: "smooth",
            });
        });
    })

    navMenuPageButton.forEach((ele, index) => {
        ele.addEventListener('click', (event) => {
            event.preventDefault();
            let height = 0;
            for (let i = 0; i < index; i++) {
                let sectionHeight = sectionAll[i].clientHeight;
                height += sectionHeight;
            }
            window.scrollTo({
                top: height,
            });
        });
    })
}

function fixedHeader() {
    window.addEventListener('scroll', () => {
        let mainHeight = mainPage.clientHeight,
            scrollTop = document.documentElement.scrollTop;

        if (scrollTop >= (mainHeight - header.clientHeight)) {
            navA.forEach(ele => {
                ele.classList.add('black');
            });
            smileButton.style.opacity = 0;
            setTimeout(() => { smileButton.style.display = 'none'; }, 500)

        } else {
            navA.forEach(ele => {
                ele.classList.remove('black');
            });

            smileButton.style.display = 'block';
            setTimeout(() => { smileButton.style.opacity = 1; }, 500)
        }
    })

}

function init() {
    fixedHeader();
    handleClickNav();
    aboutmeConts();
    defaultAboutme();
    openNavPage();
    stampEmoge();
}

init();