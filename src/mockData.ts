import { OrderLog } from './types';

// Generate 100 mock order logs
export const mockOrderLogs: OrderLog[] = Array.from({ length: 100 }, (_, index) => ({
  id: `LOG${String(index + 1).padStart(3, '0')}`,
  isolationId: `ISO${String(index + 1).padStart(3, '0')}`,
  tenantId: `TENANT${String(Math.floor(index / 10) + 1).padStart(2, '0')}`,
  facilityId: `FAC${String(Math.floor(index / 5) + 1).padStart(3, '0')}`,
  orderImportId: `IMPORT${String(index + 1).padStart(3, '0')}`,
  orderId: `ORDER${String(index + 1).padStart(3, '0')}`,
  customerId: `CUST${String(Math.floor(index / 3) + 1).padStart(3, '0')}`,
  referenceNo: `REF${String(index + 1).padStart(5, '0')}`,
  poNo: `PO${String(index + 1).padStart(5, '0')}`,
  content: `Sample content for order ${index + 1}`,
  response: `Sample response for order ${index + 1}`,
  status: ['SUCCESS', 'FAILED', 'PENDING'][Math.floor(Math.random() * 3)] as 'SUCCESS' | 'FAILED' | 'PENDING',
  errorMessage: Math.random() > 0.7 ? `Error occurred in processing order ${index + 1}` : undefined,
  createdBy: `User${String(Math.floor(Math.random() * 10) + 1).padStart(2, '0')}`,
  createdTime: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
  updatedBy: `User${String(Math.floor(Math.random() * 10) + 1).padStart(2, '0')}`,
  updatedTime: new Date(Date.now() - Math.floor(Math.random() * 5) * 24 * 60 * 60 * 1000).toISOString(),
}));