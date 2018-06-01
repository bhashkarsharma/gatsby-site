import React from 'react'

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div
                    className={`inner ${this.props.conf.color} ${this.props.conf.shape} ${this.props.conf.fill} ${this.props.conf.clicked ? 'clicked' : ''} ${this.props.conf.visual}`}
                    onClick={this.props.onClick}>
                    {
                        Array.from(Array(this.props.conf.count).keys()).map((i, k) => {
                            const fill = this.props.conf.fill === 'empty' ? (this.props.conf.shape === 'circle' ? '-thin' : '-o') : ''
                            return <div key={k}>
                                {this.props.conf.fill === 'shaded' ?
                                    <span className='fa-stack'>
                                        <i className={`fa fa-${this.props.conf.shape}${fill} fa-stack-2x`}></i>
                                        <i className={`fa fa-${this.props.conf.shape}${fill} fa-inverse fa-stack-1x`}></i>
                                    </span> :
                                    <i className={`fa fa-${this.props.conf.shape}${fill}`} aria-hidden='true'></i>
                                }
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
