import helloworld from './helloworld.js';

class Gos extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var vas = this.props.value;
        return(
            <button>{vas}</button>
        );
    };
}
