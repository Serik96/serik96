const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
  lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

// Скрипт для плавного перемещения

const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href')
      ? anchor.getAttribute('href')
      : 'body';
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

$(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    let that = $(this);
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: that.serialize(),
    }).done(function () {
      that.find('input').val('');
      alert('Сообщение успешно отправлено');
      that.trigger('reset');
    });
    return false;
  });
});
