const controller = "carreras";
const base_url = "https://hackathon-2022-b997c-default-rtdb.firebaseio.com/";


const obtenerCarrerasAsync = async (universidadId) => {

  const full_url = `${base_url}${controller}/${universidadId}.json`;

  try {
    const response = await fetch(full_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status == 200) {
      const result = await response.json();

      const carreras = Object.keys(result).map((value) => {
        return {
          id: value,
          ...result[value]
        };
      });

      return {
        ok: true,
        data: carreras
      };
    }
  }
  catch (err) {
    console.log(err);

    return {
      ok: false,
      message: "error"
    };
  }
};


const obtenerCarreraAsync = async (carreraId) => {
  const full_url = `${base_url}roadmaps/${carreraId}.json`;

  try {
    const response = await fetch(full_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status == 200) {
      const result = await response.json();

      return {
        ok: true,
        data: result
      };
    }
  }
  catch (err) {
    console.log(err);

    return {
      ok: false,
      message: "error"
    };
  }

};


const crearCarreraAsync = async () => {

};


export {
  obtenerCarrerasAsync,
  obtenerCarreraAsync,
  crearCarreraAsync
};



