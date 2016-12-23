import React from 'react';
import ReactDOM from 'react-dom';
import Allframes from './Allframes.js';
import ChangeBefore from './ChangeBefore.js';
const traits = [
    {
        name: 'Chill',
        bool: false,
    }, {
        name: 'Chic Aesthete',
        bool: false,
    }, {
        name: 'Emo',
        bool: false,
    }, {
        name: 'Type A',
        bool: false,
    }, {
        name: 'Early Adopter',
        bool: false,
    }, {
        name: 'Fancy',
        bool: false,
    },
];
const persons = [
    'Mom',
    'Dad',
    'S.O.',
    'BFF',
    'Work Spouse',
    'surprise me',
];
class Alldiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ifsee: false,
            frame: 0,
            person: '',
            trait: traits,
            num: 3,
        };
        this.changeFrame = this.changeFrame.bind(this);
        this.Click = this.Click.bind(this);
    }
    changeFrame(value, persons, trait, num) {
        if (value === 1) {
            this.setState({
                ifsee: false,
                person: '',
                trait: traits,
                num: 3,
            });
        }
        if (value === 2) {
            this.setState({
                person: persons,
            });
        }
        if (value === 3) {
            if (!this.state.ifsee) {
                if (this.state.frame === 1) {
                    this.setState({
                        num: num,
                        person: persons,
                        ifsee: true,
                    });
                } else {
                    this.setState({
                        num: num,
                        trait: trait,
                        ifsee: true,
                    });
                }
            } else {
                if (this.state.frame === 1) {
                    this.setState({
                        person: persons,
                        num: 0,
                    });
                }
                else if (this.state.frame === 2) {
                    this.setState({
                        trait: trait,
                        num: 0,
                    });
                }
            }
        }
        if (value === 4) {
            this.setState({
                person: persons,
                trait: trait,
                num:num,
            });
        }
        else{
            this.setState({frame: value});
        }
    }
    Click(value) {
        this.setState({
            frame: value,
        });
    }
    render() {
        return (
            <div>
                <div >
                    <Allframes onClick={this.changeFrame}
                        ifsee ={this.state.ifsee}
                        frames={this.state.frame}
                        person={this.state.person}
                        trait={this.state.trait}
                        num ={this.state.num}
                        persons ={persons}/>
                </div>
                <div>
                    <ChangeBefore value ={this.state.ifsee} onClick={this.Click}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Alldiv/>, document.getElementById('root'));
