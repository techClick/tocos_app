export type NetworkStatus = 200 | 500 | 401;

export const networkResponse = (status: 'success' | 'error', data: any) => {
 return { status, data }
}