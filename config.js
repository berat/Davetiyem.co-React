module.exports = {
  apiURL: 'http://localhost:3100',
  // apiURL: 'https://api.davetiyem.co',
  version: '/v1/auth/',
  home: '/',
  loginPage: '/login',
  registerPage: '/register',
  forgetPass: '/forget-password',
  adminPage: '/admin',
  date: {
    weekdays: {
      longhand: [
        'Pazar',
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi'
      ],
      shorthand: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
    },
    months: {
      longhand: [
        'Ocak',
        'Subat',
        'Mart',
        'Nisan',
        'Mayis',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylul',
        'Ekim',
        'Kasim',
        'Aralik'
      ],
      shorthand: [
        'Oca',
        'Şub',
        'Mar',
        'Nis',
        'May',
        'Haz',
        'Tem',
        'Agu',
        'Eyl',
        'Eki',
        'Kas',
        'Ara'
      ]
    },
    today: 'Bugun',
    clear: 'Temizle'
  }
}
