import { CallArgs, IResponse } from '../types/types';

export const callEndpoint = ({
  api, body, method,
}: CallArgs) => async (): Promise<IResponse> => {
  const options: any = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  };
  // if (noContentType) delete options.headers['Content-Type'];
  try {
    const url = process.env.REACT_APP_API;
    // console.log('calling ..... ', `${url}${api}`);
    const response = await fetch(
      `${url}${api}`,
      options,
    );

    // console.log('response', response);
    if (!response) {
      return { status: 'error', code: 0, description: 'Internet connection is not detected' } as IResponse;
    }

    const dataFromEndPoint: any = await response.json();
    return { ...JSON.parse(dataFromEndPoint), code: response.status } as IResponse;
  } catch (e: any) {
    return { status: 'error', code: 0, description: e.message } as IResponse;
  }
};
