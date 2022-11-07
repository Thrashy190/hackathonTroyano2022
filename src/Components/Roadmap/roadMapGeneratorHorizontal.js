import React from 'react';
import { MarkerType } from 'react-flow-renderer';

const getFlowItems = (data) => {
  console.log(data);
  const { roadMap, name } = data;

  const nodes = [];
  const edges = [];

  // Config General
  const espacioEntrePeriodos = 120;
  const stylesCarrera = {
    background: '#312e81',
    color: '#FFFFFF',
    border: '1px solid #222138CC',
    width: 180,
    fontSize: 'larger'
  };

  const stylesPeriodo = {
    background: '#FFF',
    color: '#232334',
    border: '1px solid #222138CC',
    borderRadius: "4px",
    textAlign: "center",
    padding: "8px 12px"
  };

  const stylesMateria = {
    background: "#6366f1",
    color: "#e0e7ff"
  };
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
    position: { x: -100, y: -20 },
    sourcePosition: "right",
    style: stylesCarrera
  });

  let idLastParent = undefined;
  // let yParentPosition = 0;
  let xParentPosition = 0;
  let prevSpace = 0;

  // Recorre cada elemento principal
  roadMap.filter(x => !x.link).forEach((value, index, array) => {

    const { id, content } = value;
    // Contar elementos hijos
    const childrenItems = roadMap.filter(x => x.link === id);
    const childrenItemsPerSide = Math.ceil(childrenItems.length / 2);
    // Designar el espacio de separación
    //     const marginX = (Math.ceil(childrenItems.length / 2) * 80);
    const marginY = (Math.ceil(childrenItems.length / 2) * 200);

    const position = {
      x: xParentPosition + espacioEntrePeriodos + prevSpace + (marginY / 2),
      y: 0
    };
    // Guardar la mitad del margin para agregarlo al siguiente Nodo
    prevSpace = (marginY / 2);
    // Guarda la posición donde se quedó el último nodo
    xParentPosition = position.x;
    // Agregar el nodo
    nodes.push({
      id,
      data: {
        label: (
          <>
            {content}
          </>
        ),
        showRight: array.length - 1 !== index,
        showTop: childrenItems.length > 0,
        showBottom: childrenItems.length - childrenItemsPerSide > 0
      },
      type: "periodo",
      sourcePosition: "left",
      position: position,
      style: stylesPeriodo
    });

    // Agregar el primer enlace
    if (!idLastParent) {
      edges.push({
        id: `e0-${id}`,
        source: "0",
        target: id,
        targetHandle: "t-l",
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
        sourceHandle: "s-r",
        targetHandle: "t-l",
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
      const itemYPosition = (side ? -1 : 1) * (150 + ((itemSideIndex % 2) * 70));
      const itemXPosition = (xParentPosition - (marginY / 2)) + ((marginY / (totalItemsOnSide + 1)) * (itemSideIndex + 1));

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
        sourcePosition: side ? "bottom" : "top",
        type: "input",
        style: stylesMateria
      });

      // Agrega su enlace
      edges.push({
        id: `e${item.id}-${item.link}`,
        source: item.id,
        target: item.link,
        targetHandle: side ? "t-t" : "t-b",
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
