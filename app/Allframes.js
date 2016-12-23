import React from 'react';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';


class Allframes extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }
    change(value, persons, trait, num) {
        this.props.onClick(value, persons, trait, num);
    }
    render() {
        let fameSel;
        const frameclick = this.props.frames;
        if (frameclick === 0) {
            fameSel = <Section1 onClick={this.change}/>;
        } else if (frameclick === 1) {
            fameSel = <Section2 persons={this.props.persons} person={this.props.person} trait={this.props.trait} onClick={this.change} ifsee = {this.props.ifsee}/>;
        } else if (frameclick === 2) {
            fameSel = <Section3 onClick={this.change} person={this.props.person} trait={this.props.trait} num={this.props.num}/>;
        } else if (frameclick === 3) {
            fameSel = <Section4 onClick={this.change} person={this.props.person} trait={this.props.trait} persons={this.props.persons}/>;
        }
        
        return (
            <div>
                {fameSel}
            </div>
        );
    }
}
export default Allframes;
