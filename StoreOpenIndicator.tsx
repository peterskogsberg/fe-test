import * as React from 'react';
import { getDataForStore } from './api';
import { isStoreCurrentlyOpen } from './date-utils';
import { OpeningHours } from './types';

// No Webpack / module loading, SVGR etc
// @ts-expect-error
import closedIcon from './img/closed.svg';
// @ts-expect-error
import openIcon from './img/open.svg';

type StoreOpenIndicatorProps = {
  storeId: number;
};

const StoreOpenIndicator: React.FunctionComponent<StoreOpenIndicatorProps> = ({
  storeId,
}) => {
  const [data, setData] = React.useState<OpeningHours[] | null>(null);

  const isOpen = data !== null ? isStoreCurrentlyOpen(data) : null;
  console.log({ isOpen });

  React.useEffect(() => {
    const _fetchStoreData = async () => {
      const { result } = await getDataForStore(storeId);
      const [firstResult] = result;
      const { openingHours } = firstResult;
      console.log({ openingHours });
      setData(openingHours);
    };
    void _fetchStoreData();
  }, []);

  return (
    <div>
      <p>
        Store {storeId} is
        <br />
        <img src={isOpen ? openIcon : closedIcon} height="100" width="100" />
      </p>
    </div>
  );
};

export { StoreOpenIndicator };
