import React from 'react';
import { MarkerType } from 'react-flow-renderer';

const getFlowItems = (data) => {
  const { roadMap, name } = data;

  const nodes = [];
  const edges = [];

  // Mostrar el título
  nodes.push({
    id: "0",
    data: {
      label: (
        <>
          {name}
        </>
      )
    },
    type: "input",
    position: { x: 50, y: 10 },
    style: {
      background: '#5D6BE4',
      color: '#FFFFFF',
      border: '1px solid #222138CC',
      width: 180,
    },
  });




  let idLastParent = undefined;
  let yParentPosition = 0;
  let prevSpace = 0;

  // Recorre cada elemento principal
  roadMap.filter(x => !x.link).forEach((value, index, array) => {

    const { id, content } = value;
    // Contar elementos hijos
    const childrenItems = roadMap.filter(x => x.link === id);
    const childrenItemsPerSide = Math.ceil(childrenItems.length / 2);
    // Designar el espacio de separación
    const marginX = (Math.ceil(childrenItems.length / 2) * 80);

    const position = {
      x: 100,
      y: yParentPosition + 60 + prevSpace + (marginX / 2)
    };
    // Guardar la mitad del margin para agregarlo al siguiente Nodo
    prevSpace = (marginX / 2);
    // Guarda la posición donde se quedó el último nodo
    yParentPosition = position.y;
    // Agregar el nodo
    nodes.push({
      id,
      data: {
        label: (
          <>
            {content}
          </>
        ),
        showBottom: array.length - 1 !== index,
        showLeft: childrenItems.length > 0,
        showRight: childrenItems.length - childrenItemsPerSide > 0
      },
      type: "periodo",
      sourcePosition: "left",
      position: position
    });

    // Agregar el primer enlace
    if (!idLastParent) {
      edges.push({
        id: `e0-${id}`,
        source: "0",
        target: id,
        targetHandle: "t-t",
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
      });


    }
    // Agregar el enlace de un nodo con el anterior
    if (idLastParent) {
      edges.push({
        id: `e${idLastParent}-${id}`,
        source: idLastParent,
        target: id,
        sourceHandle: "s-b",
        targetHandle: "t-t",
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
      });

    }

    // Dibujar Hijos
    //
    // calcula la cantidad de elementos que se pondrán a cada lado
    childrenItems.forEach((item, itemIndex) => {
      // Determina si se dibuja a la derecha o izquierda
      const side = itemIndex < childrenItemsPerSide;
      // Guarda cuantos elementos habrá en ese lado
      const totalItemsOnSide = side ? childrenItemsPerSide : childrenItems.length - childrenItemsPerSide;
      // SAber el index del elemento en el lado donde se dibuja
      const itemSideIndex = side ? itemIndex : itemIndex - childrenItemsPerSide;

      // Asigna su lugar (derecha o izquierda )
      const itemXPosition = side ? -150 : 300;
      const itemYPosition = (yParentPosition - (marginX / 2)) + ((marginX / (totalItemsOnSide + 1)) * (itemSideIndex + 1));

      // Agrega el nodo
      nodes.push({
        id: item.id,
        data: {
          label: (
            <>
              {item.content}
            </>
          )
        },
        position: { x: itemXPosition, y: itemYPosition },
        sourcePosition: side ? "right" : "left",
        type: "input"
      });

      // Agrega su enlace
      edges.push({
        id: `e${item.id}-${item.link}`,
        source: item.id,
        target: item.link,
        targetHandle: side ? "t-l" : "t-r",
        type: "smoothstep",
        animated: true
      });

    });
    // Actualiza el id del último nodo padre
    idLastParent = id;
  });
  console.log({ nodes, edges });
  return [nodes, edges];
};

export default getFlowItems;
