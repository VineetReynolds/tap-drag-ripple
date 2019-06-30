import React from 'react';
import './Ripple.css';

class Ripple extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(this);
        this.callCleanUp = this.callCleanUp.bind(this);
        this.cleanUp = this.cleanUp.bind(this);
    };

    initializeState = () => {
      return {
        spanStyles: {},
        count: 0
      }
    }
    state = this.initializeState();
  
    /* Debounce Code to call the Ripple removing function */
    callCleanUp = (cleanup, delay) => {
        // let func = function() {
        //   clearTimeout(this.bounce);
        //   this.bounce = setTimeout(() => {
        //     cleanup();
        //   }, delay);
        // };
        // func = func.bind(this);
        // return func;
        setTimeout(() => {
            cleanup();
        }, delay);
    }
  
    showRipple = (e) => {
      const rippleContainer = e.currentTarget;
      const size = 25; //rippleContainer.offsetWidth / 2;
      const pos = rippleContainer.getBoundingClientRect();
      const x = e.pageX - pos.x - (size / 2);
      const y = e.pageY - pos.y - (size / 2);
  
      const spanStyles = { top: y + 'px', left: x + 'px', height: size + 'px', width: size + 'px', opacity: 0.4 };
      const count = this.state.count + 1;
      this.setState({
        spanStyles: {...this.state.spanStyles, [count] : spanStyles},
        count: count
      });
    }
  
    cleanUp = () =>{
        setTimeout(() => {
            const initialState = this.initializeState();
            this.setState({ ...initialState });
        }, 500);
    }
  
    renderRippleSpan = () => {
      const {showRipple = false, spanStyles = {}} = this.state;
      const spanArray = Object.keys(spanStyles);
      if (spanArray && spanArray.length > 0) {
        return (
          spanArray.map((key, index) => {
            return <span draggable key={'spanCount_' + index} className="" style={{ ...spanStyles[key]}}></span>
          })
        )
      } else {
        return null;
      }
    }
  
    render() {
      const {children= null, classes = "", onClickHandler = null} = this.props;
      return (
        <div className={'ripple ' + classes} onClick={onClickHandler}>
          {children}
          <div className="rippleContainer" onTouchStart={this.showRipple} onMouseDown={this.showRipple} onMouseUp={this.cleanUp} onTouchEnd={this.cleanUp}>
            {this.renderRippleSpan()}
          </div>
        </div>
      );
    }
  }

export default Ripple;