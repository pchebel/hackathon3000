import React, { memo, useContext, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import GridContext from '../GridProvider/GridProvider';

const DragItem = memo(({ id, onMoveItem, children }) => {
  const ref = useRef(null);
  const { isDraggable } = useContext(GridContext);

  const [{ isDragging }, connectDrag] = useDrag({
    item: { id, type: 'IMG' },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
    canDrag: (monitor) => isDraggable,
  });

  const [, connectDrop] = useDrop({
    accept: 'IMG',
    hover(hoveredOverItem) {
      if (hoveredOverItem.id !== id) {
        onMoveItem(hoveredOverItem.id, id);
      }
    },
  });

  connectDrag(ref);
  connectDrop(ref);

  const opacity = isDragging ? 0.5 : 1;
  const containerStyle = { opacity };

  return React.Children.map(children, (child) =>
    React.cloneElement(child, {
      forwardedRef: ref,
      style: containerStyle,
    })
  );
});

export default DragItem;
