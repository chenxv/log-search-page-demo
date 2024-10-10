import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { OrderLog, SearchParams } from '../types';

interface OrderLogTableProps {
  data: OrderLog[];
  loading: boolean;
  totalCount: number;
  searchParams: SearchParams;
  setSearchParams: React.Dispatch<React.SetStateAction<SearchParams>>;
  onPageChange: () => void;
}

const OrderLogTable: React.FC<OrderLogTableProps> = ({
  data,
  loading,
  totalCount,
  searchParams,
  setSearchParams,
  onPageChange,
}) => {
  const handlePageChange = (newPage: number) => {
    setSearchParams(prev => ({ ...prev, currentPage: newPage }));
    onPageChange();
  };

  const totalPages = Math.ceil(totalCount / searchParams.pageSize);

  return (
    <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Customer ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Facility ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Order Import ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Reference No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">PO No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Created Time</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {loading ? (
            <tr>
              <td colSpan={9} className="px-6 py-4 text-center text-gray-300">Loading...</td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={9} className="px-6 py-4 text-center text-gray-300">No data available</td>
            </tr>
          ) : (
            data.map((log) => (
              <tr key={log.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{log.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{log.orderId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{log.customerId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{log.facilityId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{log.orderImportId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{log.referenceNo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{log.poNo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    log.status === 'SUCCESS' ? 'bg-green-100 text-green-800' :
                    log.status === 'FAILED' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {log.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{new Date(log.createdTime).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="bg-gray-700 px-4 py-3 flex items-center justify-between border-t border-gray-600 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => handlePageChange(searchParams.currentPage - 1)}
            disabled={searchParams.currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(searchParams.currentPage + 1)}
            disabled={searchParams.currentPage === totalPages}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-400">
              Showing <span className="font-medium">{(searchParams.currentPage - 1) * searchParams.pageSize + 1}</span> to <span className="font-medium">{Math.min(searchParams.currentPage * searchParams.pageSize, totalCount)}</span> of{' '}
              <span className="font-medium">{totalCount}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => handlePageChange(searchParams.currentPage - 1)}
                disabled={searchParams.currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-600 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              {/* Add page numbers here if needed */}
              <button
                onClick={() => handlePageChange(searchParams.currentPage + 1)}
                disabled={searchParams.currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-600 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700"
              >
                <span className="sr-only">Next</span>
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderLogTable;