const fieldImg = require('./img/Field.svg');
const cellsTypesImg = require('./img/CellTypes.svg');
const waterBarrierImg = require('./img/WaterBarrier.svg');
const timerImg = require('./img/Timer.svg');
const roundImg = require('./img/Round.svg');
const controllersImg = require('./img/Controllers.svg');

export const rules = [
  {
    title: 'Title',
    description:
      '3. Играй за краба на побережье острова, старайся выжить во время наводнения!',
    img: fieldImg,
  },
  {
    title: 'Title',
    description: 'Побережье состоит из случайно появляющихся ячеек.',
    img: cellsTypesImg,
  },
  {
    title: 'Title',
    description: 'Избегайте ячеек с водой! При попадании на них вы проиграете.',
    img: waterBarrierImg,
  },
  {
    title: 'Title',
    description:
      'Следите за таймером! По истечении времени игровое поле изменится. Болото превратится в воду, появятся новые ячейки с болотом.',
    img: timerImg,
  },
  {
    title: 'Title',
    description: 'Старайтесь продержаться как можно дольше!',
    img: roundImg,
  },
  {
    title: 'Title',
    description: 'Управляйте вашим крабом с помощью клавиш.',
    img: controllersImg,
  },
];
