export interface OrderLog {
  id: string;
  isolationId: string;
  tenantId: string;
  facilityId?: string;
  orderImportId: string;
  orderId?: string;
  customerId: string;
  referenceNo?: string;
  poNo?: string;
  content?: string;
  response?: string;
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
  errorMessage?: string;
  createdBy?: string;
  createdTime: string;
  updatedBy?: string;
  updatedTime: string;
}

export interface SearchParams {
  currentPage: number;
  pageSize: number;
  orderId?: string;
  customerId?: string;
  facilityId?: string;
  orderImportId?: string;
  referenceNo?: string;
  poNo?: string;
  status?: 'SUCCESS' | 'FAILED' | 'PENDING';
  createdTimeStart?: string;
  createdTimeEnd?: string;
}