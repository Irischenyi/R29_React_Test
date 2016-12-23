import React from 'react';
class Section1 extends React.Component {
    render() {
        return (
            <div className = 'frame1'>
                <div>
                    <img src="../imgs/frame1/entrance.gif"/>
                </div>
                <div className='buttom' onClick={() => this.props.onClick(1)}>begin</div>
            </div>
        );
    }
}
export default Section1;
