import { useEffect, useState } from 'react';

const usePaging = (page: number, lastPage: number) => {
  const [pageLimit, setPageLimit] = useState(page);
  const [lastPageNumber, setLastPageNumber] = useState(lastPage);

  useEffect(() => {
    setPageLimit(page);
    setLastPageNumber(lastPage);
  }, [page, lastPage]);

  return { pageLimit, lastPageNumber, setPageLimit, setLastPageNumber };
};

export default usePaging;
