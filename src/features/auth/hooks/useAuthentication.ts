import { getAuthenticationData } from "@src/features/auth/utils/auth.util";

export const useAuthentication = () => {
    return getAuthenticationData();
};
