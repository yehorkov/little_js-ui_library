import $ from './lib/lib';

// $('button').on('click', function() {
//     $('div').eq(1).toggleClass('active');
// });

// $('div').click(function() {
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findmeq'));
// $('button').fadeIn(1800);

// console.log($('button').html('Hello'));

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: 'Modal title',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt accusantium quo sequi officia fugiat vel reiciendis quae veritatis saepe. Quos itaque facere quibusdam cum mollitia! Ipsam fuga fugiat unde.'
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Данные сохранены');
                    }
                ],
                [
                    'Another button',
                    ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('Hello World');
                    }
                ]
            ]
        }
    });
});