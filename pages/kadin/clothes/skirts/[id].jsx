import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getSkirtseById } from '../../../api/skirts'; 

//Components
import CardDetail from '../../../../components/cardDetail';

function FeatureDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      if (id) {
        const featureData = await getSkirtseById(id);
        if (featureData) {
          setData(featureData);
        }
      }
    };

    fetchDataFromApi();
  }, [id]);


  return (
    <div>
      <CardDetail id={id} data={data}/>
    </div>
  );
}

export default FeatureDetail;
