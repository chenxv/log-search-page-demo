import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import OrderLogTable from './components/OrderLogTable';
import SearchForm from './components/SearchForm';
import { OrderLog, SearchParams } from './types';
import { mockOrderLogs } from './mockData';

const App: React.FC = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>(() => {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    return {
      currentPage: 1,
      pageSize: 10,
      createdTimeStart: oneDayAgo.toISOString().slice(0, 16),
      createdTimeEnd: now.toISOString().slice(0, 16),
    };
  });
  const [tableData, setTableData] = useState<OrderLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = () => {
    setSearchParams(prev => ({ ...prev, currentPage: 1 }));
    getTableData();
  };

  const getTableData = async () => {
    setLoading(true);
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      const startIndex = (searchParams.currentPage - 1) * searchParams.pageSize;
      const endIndex = startIndex + searchParams.pageSize;
      const paginatedData = mockOrderLogs.slice(startIndex, endIndex);
      setTableData(paginatedData);
      setTotalCount(mockOrderLogs.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTableData();
  }, [searchParams.currentPage, searchParams.pageSize]);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-100">Public API Order Log</h1>
        </div>

        <SearchForm searchParams={searchParams} setSearchParams={setSearchParams} onSearch={handleSearch} />

        <div className="mt-6 flex justify-start">
          <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded flex items-center transition duration-150 ease-in-out">
            <ChevronDown className="mr-2" size={18} />
            Export
          </button>
        </div>

        <OrderLogTable
          data={tableData}
          loading={loading}
          totalCount={totalCount}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          onPageChange={getTableData}
        />
      </div>
    </div>
  );
};

export default App;