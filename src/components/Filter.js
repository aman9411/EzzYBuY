import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="d-flex">
                <div>{this.props.count}</div>
                <div className="m-2">
                   
                    Order{" "} 
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="Trending">Trending</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Heighest">Heighest</option>
                    </select>
                </div>
                <div className="m-2">
                    Filter{" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="All">All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
            </div>
        )
    }
}