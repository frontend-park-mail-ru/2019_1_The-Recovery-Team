import * as React from 'libs/Cheburact';
import * as CheburactDOM from 'libs/CheburactDOM';

class Lol extends React.Component {
  headerRef: null | HTMLElement = null;
  state = {
    text: 0,
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleSetHeaderRef = (ref: HTMLElement) =>
      this.headerRef = ref;

  handleClick = () => {
    // if (this.headerRef) {
    //   this.headerRef.innerText = 'Clicked';
    // }

    this.setState({ text: this.state.text + 1 });
  };

  render() {
    return (
        <div className={'root'} hidden={false}>
          <h2
              className={'header'}
              ref={this.handleSetHeaderRef}
          >{ `${this.state.text}` }</h2>
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
  handleOuterClick = () => {
    const updater = this.getUpdater();
    if (updater) {
      updater.enqueueUpdate(this, { newValue: 'aaa' });
    }
  };

  render() {
    return (
        <div>
          <Lol aaa='bbb'/>
          <button onClick={this.handleOuterClick}>Outer button</button>
        </div>
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
