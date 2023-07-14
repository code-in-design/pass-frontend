import { GridApi } from 'ag-grid-community';
import { useState } from 'react';
import usePaging from './usePaging';

const useInfiniteScroll = ({ api, model }) => {
  const page = usePaging({ page: 10, lastPage: 11 });
  const [gridApi, setGridApi] = useState<GridApi | null>(null);

  /** TODO
   * 인자로 필요한것만 받아서 공통로직을 실행하고 리턴한다.
   * 페이지관련 메타데이터,모델, 데이터호출함수를 인자로 받아서
   * 공통 인피니티 로직을 처리하고
   * 결과값 배열만 리턴해야한다.
   */

  const onGridReady = params => {
    setGridApi(params.api);

    const { pageLimit, lastPageNumber } = page;
    const dataSource = {
      getRows: async params => {
        const firstIndex = params.startRow;
        const pageNumber = Math.floor(firstIndex / pageLimit);

        if (pageNumber === lastPageNumber) {
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
