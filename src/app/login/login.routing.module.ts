import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginGuard } from '../core/auth/login.guard';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [LoginGuard],
        children: [{
            path: '',
            component: SignInComponent,
            data: {
                title: 'Sign In'
            }
        },
        {
            path: 'signup',
            component: SignUpComponent,
            data: {
                title: 'Sign up'
            }
        }
        ]
    }
];

@NgModule({
    //imports: [RouterModule.forRoot(routes, { useHash: true })],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {

}