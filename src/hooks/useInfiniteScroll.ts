import { GridApi } from 'ag-grid-community';
import { useState } from 'react';
import usePaging from './usePaging';

const useInfiniteScroll = ({ api, model }) => {
  const page = usePaging(10, 11);
  const [gridApi, setGridApi] = useState<GridApi | null>(null);

  const onGridReady = params => {
    setGridApi(params.api);

    const pageSize = page.pageLimit;
    const lastPage = page.lastPageNumber;
    const dataSource = {
      getRows: async params => {
        const firstIndex = params.startRow;
        const pageNumber = Math.floor(firstIndex / pageSize);

        if (pageNumber === lastPage) {
          params.failCallback();
          return;
        }

        try {
          const data = await api(pageNumber);
          const result = data.data?.universityData;
          if (data.isSuccess) {
            page.setPageLimit(data.data?.data?.limit);
            page.setLastPageNumber(data.data?.data?.page_end + 1);
            const resultArray = result?.map((item: any) => {
              const resultModel = new model(item);
              const row = resultModel.getTableRowData();
              return row;
            });
            params.successCallback(resultArray);
          }
        } catch (error) {
          console.error(error);
          params.failCallback();
        }
      },
    };
    params.api.setDatasource(dataSource);
  };
  return onGridReady;
};

export default useInfiniteScroll;
