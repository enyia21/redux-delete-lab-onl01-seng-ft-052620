import React, { Component } from 'react'
import Band from './Band'
export class Bands extends Component {
    render() {
        
        console.log(this.props.bands);
        const bands = this.props.bands.map((band) => <Band key={band.id} band={band} delete={this.props.delete}/>)
        debugger;
        return (
            <div>
                {bands}
            </div>
        )
    }
}

export default Bands
