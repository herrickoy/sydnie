import React, { Component } from 'react';
import ReactModal from 'react-modal';


export default class Styles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: null
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShow(id) {
        this.setState({show: id});
      }

    handleClose() {
        this.setState({show: null});
      }

    render() {
        return (
            <div className="hair-styles-wrapper">
                <button className="syle-selection" onClick={() => this.handleShow('womensModal')}>
                    <h1>Womens Hair</h1>
                </button>
                <button className="syle-selection" onClick={() => this.handleShow('mensModal')}>
                    <h1>Mens Hair</h1>
                </button>
                <button className="syle-selection" onClick={() => this.handleShow('kidsModal')}>
                    <h1>Kids Hair</h1>
                </button>


                <ReactModal 
                    isOpen={this.state.show == 'womensModal'} onHide={this.handleClose}
                >
                    <button className="closeModal" onClick={() => this.handleClose('womensModal')}>
                        <h1>X</h1>
                    </button>
                    {/* <div className='landing-page-markers womensModal'>
                        { 
                            womensStyles.map((product) => (
                            <p className="item-d-p" key={product.id}>
                                {product.name} ${Math.floor(product.price / 100)}
                                <button onClick={() => {
                                    this.props.addItem(product)
                                    // window.alert('Something')
                                }}><img id="0" name={product.name} src={product.imgSrc} price="$1" className="modal-img" alt="image" /></button>
                            </p>
                            ))
                        }
                    </div> */}
                </ReactModal>   

                <ReactModal 
                    isOpen={this.state.show == 'mensModal'} onHide={this.handleClose}
                >
                    <button className="closeModal" onClick={() => this.handleClose('mensModal')}>
                        <h1>X</h1>
                    </button>
                    {/* <div className='landing-page-markers mensModal'>
                        { 
                            mensStyles.map((product) => (
                            <p className="item-d-p" key={product.id}>
                                {product.name} ${Math.floor(product.price / 100)}
                                <button onClick={() => {
                                    this.props.addItem(product)
                                    // window.alert('Something')
                                }}><img id="0" name={product.name} src={product.imgSrc} price="$1" className="modal-img" alt="image" /></button>
                            </p>
                            ))
                        }
                    </div> */}
                </ReactModal>

                <ReactModal 
                    isOpen={this.state.show == 'kidsModal'} onHide={this.handleClose}
                >
                    <button className="closeModal" onClick={() => this.handleClose('kidsModal')}>
                        <h1>X</h1>
                    </button>
                    {/* <div className='landing-page-markers kidsModal'>
                        { 
                            kidsStyles.map((product) => (
                            <p className="item-d-p" key={product.id}>
                                {product.name} ${Math.floor(product.price / 100)}
                                <button onClick={() => {
                                    this.props.addItem(product)
                                    // window.alert('Something')
                                }}><img id="0" name={product.name} src={product.imgSrc} price="$1" className="modal-img" alt="image" /></button>
                            </p>
                            ))
                        }
                    </div> */}
                </ReactModal>

            </div>
        )
    }
}