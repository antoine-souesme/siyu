import { client } from '@src/libs/api/api';
import { paths } from '@src/libs/api/schemas';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { FetchResponse, RequestBodyOption } from 'openapi-fetch';

const endpoint: keyof paths = '/auth/login';

type LoginOptions = {
} & RequestBodyOption<paths[typeof endpoint]['post']>

const Login = ({ body }: LoginOptions) => {
    return client().POST(endpoint, {
        params: {},
        body,
    });
};

type UseLoginOptions = {
    config?: UseMutationOptions<FetchResponse<paths[typeof endpoint]['post'], paths[typeof endpoint]['post'], 'application/json'>, Error, RequestBodyOption<paths[typeof endpoint]['post']>, any>;
}

export const useMutationLogin = ({ config = {} }: UseLoginOptions) => {
    return useMutation({
        ...config,
        mutationKey: [endpoint],
        mutationFn: (data) => Login({
            body: data.body,
        }),
    });
};
