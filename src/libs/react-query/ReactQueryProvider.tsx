import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';

type ReactQueryProviderProps = {
    children: React.ReactElement | Array<React.ReactElement>;
}

export const ReactQueryProvider = ({
    children,
}: ReactQueryProviderProps) => {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Contexts                                                                                       <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> State                                                                                          <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Libs                                                                                           <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Queries                                                                                        <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Getters                                                                                        <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    const queryClient = useMemo(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    retry: true,
                    // onSuccess: (response) => handleResponseSuccess(response),
                    // onError: (response) => handleResponseError(response),
                },
                mutations: {
                    // onSuccess: (response) => handleResponseSuccess(response),
                    // onError: (response) => handleResponseError(response),
                },
            },
        });
    }, []);

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Callbacks                                                                                      <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    return (
        <QueryClientProvider client={ queryClient }>
            {children}
        </QueryClientProvider>
    );
};
