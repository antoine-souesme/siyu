import { LocalStorageKeys } from "@src/constants/local-storage-keys";
import { paths } from "@src/libs/api/schemas";
import createClient, { Middleware } from "openapi-fetch";

export type GetManyParameters = {
    page?: number;
    limit?: number;
}

export const client = () => {

    const accessToken = localStorage.getItem(LocalStorageKeys.AccessToken);

    const client = createClient<paths, 'application/json'>({
        baseUrl: import.meta.env.VITE_API_URL,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const middleware: Middleware = {
        async onResponse({ response }) {
            if (response.status >= 400) {
                const body = response.headers.get("content-type")?.includes("json")
                    ? await response.clone().json()
                    : await response.clone().text();
                throw body;
            }
            return undefined;
        },
    };

    client.use(middleware);

    return client;
};

export const handleErrorMessage = (error: unknown) => {
    console.error(error);
    // let apiFailure: components['schemas']['ApiFailure'] | ApiFailure;

    // // Works with current client
    // if ((error as ApiException) && (error as ApiException).response) {
    //     apiFailure = JSON.parse((error as ApiException).response) as ApiFailure;
    // } else {
    //     apiFailure = error as components['schemas']['ApiFailure'];
    // }

    // // Works with schemas
    // if (apiFailure && apiFailure.errors) {
    //     const messages = apiFailure.errors.map((error) => error.detail);

    //     toastError({
    //         title: t('api-error.generic', { count: messages.length }),
    //         messages,
    //         duration: messages.length * 8000,
    //     });
    // } else {
    //     toastError({ message: t(`api-error.generic`) });
    // }
};
