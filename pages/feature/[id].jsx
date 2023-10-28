import React from 'react';
import { useRouter } from 'next/router';

function FeatureDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      hello world {id}
    </div>
  );
}

export default FeatureDetail;
