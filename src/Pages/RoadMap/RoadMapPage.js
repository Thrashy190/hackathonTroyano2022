import React, { useEffect, useState } from 'react';
import RoadMap from '../../Components/Roadmap/RoadMap';
import Nav from '../../Components/Shared/nav';
import { obtenerCarreraAsync } from '../../services/carrerasService';
import { useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}


const RoadMapPage = () => {

  let query = useQuery();

  const [data, setData] = useState(undefined);

  useEffect(async () => {
    // Update the document title using the browser API
    const result = await obtenerCarreraAsync(query.get("id"));
    console.log(result.data);
    setData(result.ok ? result.data : undefined);
  }, []);


  return (
    <div>
      <Nav />
      {
        data &&
        <RoadMap data={data} />
      }
    </div>
  );
};

export default RoadMapPage;
