const controller = "universidades";
const base_url = "https://hackathon-2022-b997c-default-rtdb.firebaseio.com/";


const obtenerUniversidadesAsync = async () => {

  const full_url = `${base_url}${controller}.json`;

  try {
    const response = await fetch(full_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status == 200) {
      const result = await response.json();

      const universidades = Object.keys(result).map((value) => {
        return {
          id: value,
          ...result[value]
        };
      });

      return {
        ok: true,
        data: universidades
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


const obtenerUniversidadAsync = async () => {

};


const crearUniversidadAsync = async () => {

};


export {
  obtenerUniversidadesAsync,
  obtenerUniversidadAsync,
  crearUniversidadAsync
};

