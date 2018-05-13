// Action creator for when an item is moved.
export const ITEM_MOVED = 'ITEM_MOVED'
export function moveItem(oldIndex, newIndex) {
  return(
    {
      type: ITEM_MOVED,
      payload: {oldIndex, newIndex}
    }
  )
}
