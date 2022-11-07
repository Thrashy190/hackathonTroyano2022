import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

const CustomNode = memo(({ data, isConnectable, style = {} }) => {

  const { showTop = true, showLeft = true, showRight = true, showBottom = true } = data;

  return (
    <div style={style}>
      {
        showTop &&
        <>
          <Handle
            type="target"
            position="top"
            id="t-t"
            isConnectable={false}
          />
          <Handle
            type="source"
            position="top"
            id="s-t"
            isConnectable={false}
          />
        </>
      }
      {
        showBottom &&
        <>
          <Handle
            type="target"
            position="bottom"
            id="t-b"
            isConnectable={false}
          />
          <Handle
            type="source"
            position="bottom"
            id="s-b"
            isConnectable={false}
          />
        </>
      }
      <div>
        {data.label}
      </div>
      {
        showLeft &&
        <>
          <Handle
            type="target"
            position="left"
            id="t-l"
            isConnectable={false}
          />
          <Handle
            type="source"
            position="left"
            id="s-l"
            isConnectable={false}
          />
        </>
      }
      {
        showRight &&
        <>
          <Handle
            type="target"
            position="right"
            id="t-r"
            isConnectable={false}
          />
          <Handle
            type="source"
            position="right"
            id="s-r"
            isConnectable={false}
          />
        </>
      }
    </div>
  );
});

export default CustomNode;

