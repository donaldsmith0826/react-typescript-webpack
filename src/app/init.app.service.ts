import * as AuthAppService from './auth.app.service';
import * as AuthService from '../auth/auth.service';
import * as AuthModel from '../auth/auth.model';
import * as AuthInterceptor from '../auth/auth.interceptor';
import * as LoadingInterceptor from '../common/loading/loading.interceptor.ts';
import * as TodoService from '../todo/todo.service';

export function init() {
    return AuthService.init()
        .then(() => { LoadingInterceptor.registerLoadingInterceptor(); })
        .then(() => { AuthInterceptor.registerUnauthorizedInterceptor(AuthAppService.logout); })
        .then(() => { TodoService.init(AuthModel.isAuthenticated()); });
}