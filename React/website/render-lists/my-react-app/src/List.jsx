import PropTypes from 'prop-types';

function List(props){
    
    // fruits.sort((a,b) => a.calories - b.calories);
    // fruits.sort((a,b) => a.name.localeCompare(b.name));

    const category = props.category;
    const itemList = props.items;
    const lowCalFruits = itemList.filter(fruit =>  (fruit.calories < 100));

    const listItems = itemList.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;<b>{fruit.calories}</b></li>);
    
    return (<><h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol></>);
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number })),
}
List.defaultProps = {
    category: "Category",
    items: [],
}

export default List             