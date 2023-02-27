import * as React from 'react';
import { getDataForStore } from './api';

type StoreOpenIndicatorProps = {
  storeId: number;
};

const StoreOpenIndicator: React.FunctionComponent<StoreOpenIndicatorProps> = ({
  storeId,
}) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const _fn = async () => {
      const d = await getDataForStore(storeId);
      console.log({d});
      const { openingHours } = d.result[0];
      console.log({ openingHours });
      setData(openingHours);
    };
    void _fn();
  }, []);

  return (
    <div>
      <p>{storeId}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export { StoreOpenIndicator };
