import React from 'react'

export default class Results extends React.Component {
    

    render () {
        console.log(this.props.data[0])
         let results = this.props.data
    return (
        <div>
         {results}
        </div>
    )
        }
}