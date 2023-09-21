export const networkResponse = (status: 'success' | 'error', data: any) => {
 return JSON.stringify({ status, data });
}