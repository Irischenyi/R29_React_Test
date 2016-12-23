import React from 'react';
class ChangeBefore extends React.Component {
    render() {
        return (
            <div className={this.props.value ? 'bottom see' : 'bottom'}>
                <div className='left' onClick = {() => this.props.onClick(1)}>Person</div>
                <div className='rights' onClick = {() => this.props.onClick(2)}>Trait</div>
            </div>
        );
    }
}
export default ChangeBefore;
