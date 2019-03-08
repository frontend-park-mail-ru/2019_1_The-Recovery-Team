import * as React from 'libs/Cheburact';
import * as CheburactDOM from 'libs/CheburactDOM';

class Lol extends React.Component {
  headerRef: null | HTMLElement = null;
  state = {
    text: 0,
  };

  handleSetHeaderRef = (ref: HTMLElement) =>
      this.headerRef = ref;

  handleClick = () => {
    console.log('click');
    this.setState({ text: this.state.text + 1 });
    this.props.onClick(this.state.text + 6);
  };

  render() {
    console.log('RENDER', this.state);
    return (
        <div className={'root'} hidden={false} key='array-container'>
          <h2
              className={'header'}
              ref={this.handleSetHeaderRef}
          >{ `${this.state.text}` }</h2>
          { Array
              .from(Array(this.state.text).keys())
              .map((i) => (
                <p className={'list-item'} key={i}>{`${i}`}</p>
              ))
          }
          <button
            onClick={ this.handleClick }
          >click me</button>
          { this.state.text % 2 === 0 && 'Четное' }
        </div>
    );
  }
}

class Kek extends React.Component {
  state = {
    outerText: 0,
  };

  handleOuterClick = () => {
    this.setState({ newValue: 'aaa' });
  };

  render() {
    console.log('render lol', this.state);

    return (
        <div>
          <Lol aaa='bbb' onClick={(text) => this.setState({ outerText: text })}/>
          <button onClick={this.handleOuterClick}>{`outer ${this.state.outerText}`}</button>
        </div>
    );
  }
}

CheburactDOM.render(
    <div kek={'lol'} key='root'>
      <Kek />
      <p>Hello world</p>
    </div>,
    document.getElementById('root'),
);
