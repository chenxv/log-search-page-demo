import React from 'react';
import { SearchParams } from '../types';
import { Search, Calendar } from 'lucide-react';

interface SearchFormProps {
  searchParams: SearchParams;
  setSearchParams: React.Dispatch<React.SetStateAction<SearchParams>>;
  onSearch: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ searchParams, setSearchParams, onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(); }} className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label htmlFor="orderId" className="block text-sm font-medium text-gray-300">Order ID</label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={searchParams.orderId || ''}
            onChange={handleInputChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter Order ID"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="customerId" className="block text-sm font-medium text-gray-300">Customer ID</label>
          <input
            type="text"
            id="customerId"
            name="customerId"
            value={searchParams.customerId || ''}
            onChange={handleInputChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter Customer ID"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="facilityId" className="block text-sm font-medium text-gray-300">Facility ID</label>
          <input
            type="text"
            id="facilityId"
            name="facilityId"
            value={searchParams.facilityId || ''}
            onChange={handleInputChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter Facility ID"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="orderImportId" className="block text-sm font-medium text-gray-300">Order Import ID</label>
          <input
            type="text"
            id="orderImportId"
            name="orderImportId"
            value={searchParams.orderImportId || ''}
            onChange={handleInputChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter Order Import ID"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="referenceNo" className="block text-sm font-medium text-gray-300">Reference No</label>
          <input
            type="text"
            id="referenceNo"
            name="referenceNo"
            value={searchParams.referenceNo || ''}
            onChange={handleInputChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter Reference No"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="poNo" className="block text-sm font-medium text-gray-300">PO No</label>
          <input
            type="text"
            id="poNo"
            name="poNo"
            value={searchParams.poNo || ''}
            onChange={handleInputChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter PO No"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="status" className="block text-sm font-medium text-gray-300">Status</label>
          <select
            id="status"
            name="status"
            value={searchParams.status || ''}
            onChange={handleInputChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All</option>
            <option value="SUCCESS">Success</option>
            <option value="FAILED">Failed</option>
            <option value="PENDING">Pending</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="createdTimeStart" className="block text-sm font-medium text-gray-300">Created Time (Start)</label>
          <div className="relative">
            <input
              type="datetime-local"
              id="createdTimeStart"
              name="createdTimeStart"
              value={searchParams.createdTimeStart || ''}
              onChange={handleInputChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="createdTimeEnd" className="block text-sm font-medium text-gray-300">Created Time (End)</label>
          <div className="relative">
            <input
              type="datetime-local"
              id="createdTimeEnd"
              name="createdTimeEnd"
              value={searchParams.createdTimeEnd || ''}
              onChange={handleInputChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <button type="button" className="px-4 py-2 bg-gray-600 text-gray-200 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800">
          Customize Table
        </button>
        <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center">
          <Search className="h-5 w-5 mr-2" />
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;