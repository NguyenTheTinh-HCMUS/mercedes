$(document).ready(function() {
    $('.btn_products1').click(function(e) {
        $(this).hide();
        var hiddenObject = $('#New .products__itemhidden');
        var hiddenArr = Array.from(hiddenObject);
        showProducts(hiddenArr);
    });
    $('.btn_products2').click(function(e) {

        $(this).hide();
        var hiddenObject = $('#Popular .products__itemhidden');
        var hiddenArr = Array.from(hiddenObject);
        showProducts(hiddenArr);
    });
    $('.btn_products3').click(function(e) {
        $(this).hide();
        var hiddenObject = $('#Video .products__itemhidden');
        var hiddenArr = Array.from(hiddenObject);
        showProducts(hiddenArr);


    });
});

function showProducts(hidenArr) {
    return new Promise(
        function(resolve, reject) {
            var i = 0;
            var dem = setInterval(() => {
                hidenArr[i].style.display = 'block';
                if (i + 1 == hidenArr.length) {
                    clearInterval(dem);
                    resolve();
                }

                i++;
            }, 500);
        }
    )

}

$(window).resize(function() {
    contentProducts();
    footer();
    header();
    carousel();
    wellcome();
});


function reset() {
    contentProducts();
    footer();
    header();
    carousel();
    wellcome();

}
reset();


function contentProducts() {
    var arrClass = ['responsive__content-lg', 'responsive__productsbig-lg', 'responsive__content-md',
        'responsive_productstext-md', 'products__text'
    ];
    var selector = ['.products__content', '.products__big', '.products__textcall']

    if ($(window).width() < 1200 && $(window).width() > 700) {
        removeAllClass(selector, arrClass)
        $('.products__content').addClass('responsive__content-lg');
        $('.products__big').addClass('responsive__productsbig-lg');
        $('.products__textcall').addClass('products__text');
    } else if ($(window).width() < 700) {
        removeAllClass(selector, arrClass)
        $('.products__content').addClass('responsive__content-md');
        $('.products__big').addClass('responsive__productsbig-lg');
        $('.products__textcall').addClass('responsive_productstext-md');
    } else {
        removeAllClass(selector, arrClass);
        $('.products__textcall').addClass('products__text');
    }
}


function footer() {
    var arrClass = ['responsive_footergroupmedia', 'responsive_footermediaitem'];
    var selector = ['.footer__groupmedia', '.footer__mediaitem']

    if ($(window).width() > 1200) {
        $('.footer__groupmedia').addClass('responsive_footergroupmedia');
        $('.footer__mediaitem').addClass('responsive_footermediaitem');
    } else {
        removeAllClass(selector, arrClass);
    }
}

function header() {
    if ($(window).width() < 720) {
        $('.headerNone').hide();
    } else {
        $('.headerNone').show();
    }
}

function carousel() {
    var arrClass = ['responsive_captionCarousel', 'mycaption__carousel'];
    var selector = ['.carousel-caption'];
    removeAllClass(selector, arrClass);
    if ($(window).width() < 750) {
        $('.carousel-caption').addClass('responsive_captionCarousel');
        $('.myInditor').hide();
    } else {
        $('.carousel-caption').addClass('mycaption__carousel');
        $('.myInditor').show();
    }
}



function removeAllClass(selector, arrClass) {
    selector.map(function(elem) {
        $(`${elem}`).removeClass(`${arrClass.join(' ')}`);
    });
}

function wellcome() {
    if ($(window).width() < 900) {
        $('#idcontent__wellcome').css("width", "100%");
        $('#idbtn__wellcome').css({ "width": "100%", "display": "block" });
    } else {
        $('#idcontent__wellcome').css("width", "80%");
        $('#idbtn__wellcome').css({ "width": "50%", "display": "inline" });
    }
}

document.getElementsByClassName('footer__topup')[0].addEventListener('click', function() {
    //   document.body.scrollTop = 0;
    document.documentElement.scrollTop;
    var a = setInterval(function() {
        document.documentElement.scrollTop -= 15;
        if (document.documentElement.scrollTop == 0)
            clearInterval(a);
    }, 0)
})