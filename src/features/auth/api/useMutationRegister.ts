
import { client } from '@src/libs/api/api';
import { paths } from '@src/libs/api/schemas';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { FetchResponse, RequestBodyOption } from 'openapi-fetch';

const endpoint: keyof paths = '/auth/register';

type RegisterOptions = {
} & RequestBodyOption<paths[typeof endpoint]['post']>

const Register = ({ body }: RegisterOptions) => {
    return client().POST(endpoint, {
        params: {},
        body,
    });
};

type UseRegisterOptions = {
    config?: UseMutationOptions<FetchResponse<paths[typeof endpoint]['post'], paths[typeof endpoint]['post'], 'application/json'>, Error, RequestBodyOption<paths[typeof endpoint]['post']>, any>;
}

export const useMutationRegister = ({ config = {} }: UseRegisterOptions) => {
    return useMutation({
        ...config,
        mutationKey: [endpoint],
        mutationFn: (data) => Register({
            body: data.body,
        }),
    });
};
