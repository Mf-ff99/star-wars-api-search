import React from 'react'
import Results from '../Results/Results'

export default class SearchBar extends React.Component {

    state = {
        search: ' ',
        data: []
    }

    updateSearchState = (e) => {
        this.setState({search: e.target.value})
    }

    
    
    handleSubmit = (e) => {
    
        e.preventDefault()
        const newSearch = e.target['searchbar'].value
        
        const filter = e.target['searchParams'].value
        const url = `https://swapi-thinkful.herokuapp.com/api/${filter}/?search=${newSearch}`
        
        console.log(url)
        fetch(url)
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                console.log(res.status)
            })
            .then(data => {
                console.log(data.results)
                this.setState({data: data.results})
            })
    }

    render() {
        let results = this.state.data
        const allResults = results.map(result => {
            console.log(result)
            return <li key={result.created}>
                {result.name}
                {result.title}
                </li>
        })
        return (
            <>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <label name="search-bar-label" htmlFor="searchBar">Search: </label>
                <input 
                id="searchbar" 
                type="text" 
                value={this.state.value} 
                placeholder="Luke Skywalker"
                onChange={(e) => this.updateSearchState(e)}
                ></input>
                <br />
                <label htmlFor="search-params">Narrow down your search: </label>
                <select id="searchParams">
                    <option value={null}>...</option>
                    <option value="people">Person</option>
                    <option value="films">Films</option>
                    <option value="planets">Planets</option>
                    <option value="species">Species</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                </select>
                <br />
                <button type="submit">Submit search</button>
                <br />
              </form>
            <br />
            <br />
            <br />
              <div className="results">
                  <h2>Results: </h2>
                  <ul>
                  {allResults}
                </ul>
              </div>
            </>
        )
    }    
}