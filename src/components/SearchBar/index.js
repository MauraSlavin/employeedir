// don't need to be class based because there is no state.
// can be function (can't use state with functions)
// Look into "snipets"?
import React from 'react';

// can put all functionality in this component.
// Dumb components - no state, no component.  Just simply get props and render it.
//    doesn't have a function (fcn passed on); no state; nothing changes
// don't really need a <div> since only one element in it ( <form> )
export default class SearchBar extends React.Component {
    render() {
        console.log('*** Started SearchBar/index.js');
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