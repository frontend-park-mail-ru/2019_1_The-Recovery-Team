import * as React from 'libs/Cheburact';
import * as CheburactDOM from 'libs/CheburactDOM';

class Lol extends React.Component {
  headerRef: null | HTMLElement = null;
  text: number = 0;

  componentDidMount() {
    console.log(this.props);
  }

  handleSetHeaderRef = (ref: HTMLElement) =>
      this.headerRef = ref;

  handleClick = () => {
    // if (this.headerRef) {
    //   this.headerRef.innerText = 'Clicked';
    // }

    this.text++;
    (this.getUpdater() || { enqueueUpdate: () => null }).enqueueUpdate(this);
  };

  render() {
    return (
        <div className={'root'} hidden={false}>
          <h2
              className={'header'}
              ref={this.handleSetHeaderRef}
          >{ `${this.text}` }</h2>
          { Array
              .from(Array(5).keys())
              .map((i) => (
                <p className={'list-item'}>{`${i}`}</p>
              ))
          }
          <button
            onClick={ this.handleClick }
          >click me</button>
        </div>
    );
  }
}

class Kek extends React.Component {
  render() {
    return (
        <Lol aaa='bbb'/>
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
