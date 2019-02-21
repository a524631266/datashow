import { LoginStatus } from './../util/LoginStatus';
interface LoginResult {
    token?: string;
    status: LoginStatus;
}

export {
    LoginResult
};
