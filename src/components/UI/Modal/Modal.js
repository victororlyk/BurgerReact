import React from 'react';

import styles from './Modal.module.css'
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.show !== this.props.show
  }

  render() {
    const {show, children, modalClosed} = this.props;
    return (
      <Aux>
        <Backdrop
          show={show}
          clicked={modalClosed}/>
        <div
          className={styles.Modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
          }}>
          {children}
        </div>
      </Aux>
    );
  };
}


export default Modal;
