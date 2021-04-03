const header = document.querySelector('.header'),
    navA = document.querySelectorAll('.header nav a'),
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
    AnothersCaption = document.querySelector('.Anothers_caption');

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
    navA.forEach((ele, index) => {
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
}

function fixedHeader() {
    window.addEventListener('scroll', () => {
        let mainHeight = mainPage.clientHeight,
            scrollTop = document.documentElement.scrollTop;

        if (scrollTop >= (mainHeight - header.clientHeight)) {
            navA.forEach(ele => {
                ele.classList.add('black');
            });
        } else {
            navA.forEach(ele => {
                ele.classList.remove('black');
            });
        }
    })

}

function init() {
    fixedHeader();
    handleClickNav();
    aboutmeConts();
    defaultAboutme();
}

init();