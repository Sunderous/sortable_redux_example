import React, {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'
import * as actions from './actions'

const SortableItem = SortableElement(({value}) =>
  <li>{value}</li>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  )
})

class SortableListExample extends Component {

  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.moveItem(oldIndex, newIndex);
  };

  render() {
    return <SortableList items={this.props.items} onSortEnd={this.onSortEnd} />
  }

}

function mapStateToProps({items}){
  return { items }
}

export default connect(mapStateToProps, actions)(SortableListExample)
