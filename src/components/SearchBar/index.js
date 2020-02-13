import React from 'react';

// The SearchBar component has the input box to search on
//   and a submit button
export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="row search">
                <div className="col-4 offset-sm-4">
                    <form className="text-center">
                      <input
                          name='search'
                          onChange={this.props.handleSearchChg}
                          value = {this.props.search}>
                      </input>
                      <button
                        onClick={this.props.handleSubmit}
                      >Search</button>
                    </form>
                </div>
            </div>
        );
    }
}