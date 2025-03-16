import { LocalStorageKeys } from "@src/constants/local-storage-keys";
import { DecodedUserAccessToken } from "@src/features/auth/types/decoded-user-access-token";

type AuthenticationData = {
    token: string | null;
    authorized: boolean;
    decoded: DecodedUserAccessToken | null;
}

export const getAuthenticationData = () => {
    const token = localStorage.getItem(LocalStorageKeys.AccessToken);

    const res: AuthenticationData = {
        token,
        authorized: !!token,
        decoded: null,
    };

    return res;
};
