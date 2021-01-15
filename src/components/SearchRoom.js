import React, {Component} from 'react';
import Title from '../components/Title';
import * as actions from '../actions/index';
import {connect} from 'react-redux';

class SearchRoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'all',
            price: 0,
            capacity: 0,
            minSize: 0, 
            maxSize: 1000,
            minPrice: 0,
            maxPrice: 0,
            pets: false,
            breakfast: false,
        }
    }

    componentDidMount() {
        this.setState({
            ...this.props.filter
        })
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(target.checked);
        this.setState({
            [name]: value
        });
        this.props.filterRoom(this.props.rooms, {[name]: value});
    }

    render() {
        let {   
            type,
            capacity, 
            price, 
            minPrice, 
            maxPrice, 
            minSize, 
            maxSize, 
            breakfast, 
            pets
        }   = this.state;
        let {rooms} = this.props;
        const getUnique = (items, value) => {
            return [...new Set(items.map(item => item[value]))];
        }
        let types = ['all', ...getUnique(rooms, 'type')];
        let capacities = [...getUnique(rooms, 'capacity')];
        types = types.map(type => (
            <option>{type}</option>
        ));
        capacities = capacities.map(capacity => (
            <option>{capacity}</option>
        ));
        maxPrice = Math.max(...getUnique(rooms, 'price'));
        maxSize = Math.max(...getUnique(rooms, 'size'));

        return (
            <div className='filter-container'>
                <Title title='search rooms' />
                <form className="filter-form">
                    {/* ROOM TYPE */}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select 
                            value={type} name="type" 
                            id="type" className='form-control'
                            onChange={this.handleChange}
                        >
                           {types}   
                        </select>
                    </div>
                    {/* GUESTS */}
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select 
                            name="capacity" id="capacity" 
                            className='form-control' value={capacity}
                            onChange={this.handleChange}
                        >
                            {capacities}
                        </select>
                    </div>
                    {/* PRICE */}
                    <div className="form-group">
                        <label htmlFor="price">room price ${price}</label>
                        <input type="range" name='price' min={minPrice} max={maxPrice} 
                                id='price' value={price} className='form-control'    
                                onChange={this.handleChange}
                        />
                    </div>
                    {/* SIZE */}
                    <div className="form-group">
                        <label htmlFor="size">room size</label>
                        <div className="size-inputs">
                            <input 
                                type="number" className="size-input"
                                name='minSize'
                                value={minSize}
                                onChange={this.handleChange}
                            />
                            <input 
                                type="number" className="size-input"
                                name='maxSize'
                                value={maxSize}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    {/* EXTRAS */}
                    <div className="form-group">
                        <div className="single-extra">
                                <input type="checkbox"
                                    name='breakfast'
                                    id='breakfast' 
                                    checked={breakfast}
                                    onChange={this.handleChange}
                            />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox"
                                    name='pets'
                                    id='pets' 
                                    checked = {pets}
                                    onChange={this.handleChange}
                            />
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
        filter: state.filterRoom
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterRoom: (rooms, filter) => {
            dispatch(actions.filterRoom(rooms, filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRoom)
