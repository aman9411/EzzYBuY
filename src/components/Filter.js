import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="d-flex">
                {/* <div>{this.props.count}</div> */}
                <div className="ml-4">
                   
                    Sort{" "} 
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="Trending">Trending</option>
                        <option value="Lowest">high-Lowest</option>
                        <option value="Highest">lowest-High</option>
                    </select>
                </div>
                <div className="ml-4">
                    Color{" "}
                    <select value={this.props.color} onChange={this.props.filterProductsColor}>
                        <option value="All">All</option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Sky-Blue">Sky-Blue</option>
                    </select>
                </div>
                <div className="ml-4">
                    Filter{" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="All">All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <hr />
            </div>
            
        )
    }
}