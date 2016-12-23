import React from 'react';
class Section3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.person,
        };
        this.personchoose = this.personchoose.bind(this);
    }
    personchoose(item) {
        this.setState({
            person: item,
        });
    }
    clickchange(value) {
        if (this.state.person !== '') {
            if (this.props.ifsee) {
                this.props.onClick(3, this.state.person);
            } else {
                if (this.state.person === 'surprise me') {
                    this.props.onClick(3, this.state.person);
                } else {
                    this.props.onClick(2, this.state.person);
                }
            }
        }
    }

    render() {
        return (
            <div className = 'frame2'>
                {this.props.persons.map((item, index) =>
                    <div className = {this.state.person === item ? 'item color' : 'item'} key ={index} onClick = {() => this.personchoose(item)}>{item}</div>)}
                <div className='buttom' onClick={() => this.clickchange()}>onworld</div>
            </div>
        );
    }
}
export default Section3;
