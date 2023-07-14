import { useState } from 'react';

const usePaging = ({ page, lastPage }) => {
  const [pageLimit, setPageLimit] = useState(page);
  const [lastPageNumber, setLastPageNumber] = useState(lastPage);

  return { pageLimit, lastPageNumber, setPageLimit, setLastPageNumber };
};

export default usePaging;
