import { defaultAvatar } from 'config/images';
const vitalyaFoto = require('./img/Vitalya.jpg');
const arsenFoto = require('./img/Arsen.jpg');
const fedyaFoto = require('./img/Fedya.jpg');
const urijFoto = require('./img/Urij.jpg');
const dimaFoto = require('./img/Dima.jpg');
const alexFoto = require('./img/Alexandr.jpg');

export const members = [
  {
    name: 'Виталий Черков',
    description: 'Frontend',
    avatar: vitalyaFoto,
  },
  {
    name: 'Арсений Зорин',
    description: 'Backend',
    avatar: arsenFoto,
  },
  {
    name: 'Федор Биличенко',
    description: 'Frontend',
    avatar: fedyaFoto,
  },
  {
    name: 'Дмитрий Пудов',
    description: 'Backend',
    avatar: dimaFoto,
  },
  {
    name: 'Юрий Голубев',
    description: 'Ментор',
    avatar: urijFoto,
  },
  {
    name: 'Александр Азаров',
    description: 'Музыка',
    avatar: alexFoto,
  },
];
