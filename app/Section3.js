import React from 'react';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click() {
        const num = this.props.num;
        if (num === 0) {
            if (!this.props.item.bool) return;
        }
        this.props.onClick(!this.props.item.bool, this.props.item.name, this.props.index);
    }
    render() {
        return (
            <div className ={this.props.item.bool
                ? 'selectitem color'
                : 'selectitem'} onClick={this.click}>{this.props.item.name}</div>
        );
    }
}
class Section3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num,
            traits: this.props.trait,
        };

        this.pushtrails = this.pushtrails.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }
    pushtrails(bools, name, index) {
        const arrys = this.state.traits.map(item => {
            return {
                name: item.name,
                bool: item.bool,
            };
        });
        arrys[index].bool = bools;
        this.setState({
            num: this.state.num + (bools ? -1 : +1),
            traits: arrys,
        });
    }
    buttonClick() {
        if (this.state.num === 0) this.props.onClick(3, this.props.person, this.state.traits, 0);
    }
    render() {
        return (
            <div className='frame3'>
                <div>What is your {this.props.person}
                    like?</div>
                <div>Choose {this.state.num}
                    traits</div>
                <form>
                    {this.state.traits.map((item, index) => <Tab key ={index} item={item}
                    num={this.state.num} index ={index} onClick={this.pushtrails}/>)}
                </form>
                <div className='buttom' onClick={() => this.buttonClick()}>
                    begin
                </div>
                <div className='back' onClick={() => this.props.onClick(1, 0)}>back
                </div>
            </div>
        );
    }
}
export default Section3;
