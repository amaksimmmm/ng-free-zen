export const dataRuFromAPI = {
  primaryInfo: {
    langs: [
      {
        name: 'EN',
        key: 'en'
      },
      {
        name: 'RU',
        key: 'ru'
      },
    ],
    navigation: [
      {
        name: 'Загрузка',
        key: 'download'
      },
      {
        name: 'Гарантия',
        key: 'warranty'
      },
      {
        name: 'Уход',
        key: 'care'
      },
      {
        name: 'Кэшбэк',
        key: 'cashback'
      },
      {
        name: 'Клиенты',
        key: 'clients'
      },
    ],
  },
  download: {
    title: {
      content: 'Безопасные покупки с заботой о деньгах',
      priority: 1,
    },
    texts: [
      'Узнайте, как мы можем помочь сделать ваш опыт покупок и управления деньгами более совершенным c ZEN.',
    ],
    links: [
      {
        type: 'image',
        url: 'https://apple.com',
        content: 'apple',
      },
      {
        type: 'image',
        url: 'https://google.com',
        content: 'google',
      },
    ],
    image: {
      source: './assets/images/1.jpg',
      description: 'Bag and device',
    },
  },
  warranty: {
    title: {
      content: 'Увеличение с гарантией на 1 год',
      priority: 2,
    },
    texts: [
      'Карты ZEN обладают очень удобной функцией, которая поможет вам в тех случаях, когда ваши электронные устройства начинают выходить из строя после окончания стандартной гарантии, что случается довольно часто.',
      'При покупке любой электроники с помощью карты ZEN shopping Mastercard гарантия на нее продлевается на один год. Как это работает? Просто работает. Автоматически.',
    ],
    image: {
      source: './assets/images/2.jpg',
      description: 'Basket',
    },
  },
  care: {
    title: {
      content: 'ZEN Забота',
      priority: 2,
    },
    texts: [
      'Покупки в Интернете обычно приносят удовольствие. Но не всегда.',
      'Пока купленная вами вещь не окажется бракованной, или совсем не той, которую вы заказали, вам предстоит долгая процедура возврата товара.',
      'Но вот появилась ZEN с бесплатной встроенной защитой покупок.',
    ],
    image: {
      source: './assets/images/3.jpg',
      description: 'Card',
    },
  },
  cashback: {
    title: {
      content: 'Кэшбэк',
      priority: 2,
    },
    texts: [
      'Мы помогаем сэкономить деньги, пока вы делаете покупки, ведь зачастую требуется целая вечность, чтобы получить хоть какую-то выгоду.',
      'Мы подумали об этом и сделали cashback более дружелюбным.',
      'Используя ZEN Mastercard ®, до 14% от того, что вы потратили, поступит на ваш счет сразу после покупки.',
    ],
    buttonText: 'Заказать консультацию',
  },
  clients: {
    brands: [
      {
        name: 'rosegal',
        logo:{
          lightsource: 'assets/brands/light/1_Sun.svg',
          darksource: 'assets/brands/dark/1_Dark.svg',
        },
      },
      {
        name: 'gearbest',
        logo: {
          lightsource: 'assets/brands/light/2_Sun.svg',
          darksource: 'assets/brands/dark/2_Dark.svg',
        },
      },
      {
        name: 'allegro',
        logo: {
          lightsource: 'assets/brands/light/3_Sun.svg',
          darksource: 'assets/brands/dark/3_Dark.svg',
        },
      },
      {
        name: 'AliExpress',
        logo: {
          lightsource: 'assets/brands/light/4_Sun.svg',
          darksource: 'assets/brands/dark/4_Dark.svg',
        },
      },
      {
        name: 'bookingcom',
        logo: {
          lightsource: 'assets/brands/light/5_Sun.svg',
          darksource: 'assets/brands/dark/5_Dark.svg',
        },
      },
      {
        name: 'mediaMarket',
        logo: {
          lightsource: 'assets/brands/light/6_Sun.svg',
          darksource: 'assets/brands/dark/6_Dark.svg',
        },
      },
      {
        name: 'rtveuroagd',
        logo: {
          lightsource: 'assets/brands/light/7_Sun.svg',
          darksource: 'assets/brands/dark/7_Dark.svg',
        },
      },
      {
        name: 'groupon',
        logo: {
          lightsource: 'assets/brands/light/8_Sun.svg',
          darksource: 'assets/brands/dark/8_Dark.svg',
        },
      },
    ],
  },
  secondaryInfo: {
    columns:[
      {
        title: {
          content:'Изучите',
          priority: 3,
        },
        links: [
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Центр помощи',
          },
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Присоединяйтесь',
          },
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Политика',
          },
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Файлы cookie',
          },
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Правила',
          },
        ],
      },
      {
        title: {
          content:'Откройте',
          priority: 3,
        },
        links: [
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Разработчикам',
          },
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Apple Pay',
          },
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Google Pay',
          },
        ],
      },
      {
        title: {
          content:'Предложение',
          priority: 3,
        },
        links: [
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Бизнес',
          },
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Персональное',
          },
        ],
      },
      {
        title: {
          content:'Язык',
          priority: 3,
        },
        links: [
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Английский'
          },
          {
            url: 'http://example.com',
            type: 'text',
            content: 'Польский',
          },
        ]
      },
      {
        title: {
          content:'Следите за нами',
          priority: 3,
        },
        links: [
          {
            url: 'http://example.com',
            type: 'image',
            content: 'Linkedin',
          },
        ],
      },
      {
        title: {
          content:'Контакты',
          priority: 3,
        },
        links: [
          {
            url: 'mailto:hello@zen.com',
            type: 'text',
            content: 'hello@zen.com',
          },
        ],
      },
    ],
    texts: [
      'ZEN - являеться лицензированным финансовым учреждением под надзором Центрального банка Литвы, утвержденным Европейским банковским управлением для 31 страны.',
      'Регистрационный номер компании 304749651, ИДЕНТИФИКАТОР НДС LT100011714916.',
      'Лицензия учреждений по приему электронных денежных средств № LB000457.',
      'Уставный капитал 2,185,000.00 EUR.',
      'Адрес компании: ул. Мезиню, 5, LT-01133, Вильнюс, Литва.',
      'Офис продаж: ул. Эмилия Платера 53, 00-113 Варшава, Польша.',
    ],
    developer: {
      url: 'http://example.com',
      type: 'imege',
      contact: 'assets/icons/developer.svg',
    },
  },
  modal: {
    button: {
      url: 'assets/icons/close.svg',
      type: 'image',
      content: 'close',
    },
    title: {
      content: 'Заказать консультацию',
      priority: 3,
    },
    input: [
      {
        type: 'text',
        placeholder: 'Имя',
        id: 'имя',
      },
      {
        type: 'tel',
        placeholder: 'Тел',
        id: 'тел',
      },
      {
        type: 'email',
        placeholder: 'E-mail',
        id: 'email',
      },
    ],
    selectText: 'Соединение',
    selects: [
      {
        value: '',
        optionText: '',
      },
      {
        value: 'telegram',
        optionText: 'Telegram',
      },
      {
        value: 'whatsapp',
        optionText: 'WhatsApp',
      },
    ],
    checkbox: {
      url: 'https://example.com/policy',
      content: 'Политика конфиденциальности',
    },
    buttonText: 'Отправить',
  },
};
