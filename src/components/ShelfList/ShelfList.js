import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';

class ShelfList extends Component {

    componentDidMount() {
        this.getShelf();
    }

    getShelf() {
        console.log('getShelf');

        this.props.dispatch({ type: 'FETCH_SHELF' })
    }//end getShelf

    render() {
        return (
            <div>
            <h1 class="header-text">Shelf</h1>
                {/* Render each item from the shelf reducer */}
                {this.props.reduxStore.shelf.map((each) => {
                    return (<ShelfItem
                        key={each.id}
                        id={each.id} //this is NEEDED for delete
                        image={each.image_url}
                        description={each.description}
                        person={each.person_id}
                        username={each.username} />);
                })}
            </div>
        )
    }
}

// Instead of taking everything from state, we just want the shelf info.
const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ShelfList);
