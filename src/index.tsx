import * as React from 'libs/Cheburact';
import * as CheburactDOM from 'libs/CheburactDOM';

class Lol extends React.Component {
  render() {
    return (
        <div className={'root'} hidden={false} onClick={ () => console.log('kek') }>
          <h2 className={'header'}>Lol component!</h2>
          { Array
              .from(Array(5).keys())
              .map((i) => (
                <p className={'list-item'}>{`${i}`}</p>
              ))
          }
        </div>
    );
  }
}

class Kek extends React.Component {
  render() {
    return (
        <Lol/>
    );
  }
}

CheburactDOM.render(
    <div kek={'lol'}>
      <Kek/>
      <p>Hello world</p>
    </div>,
    document.getElementById('root'),
);
