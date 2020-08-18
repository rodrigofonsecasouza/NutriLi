import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingModule } from '../components/loading/loading.module';

// import { AlertModule } from '../shared/components/alert/alert.module';
// import { LoadingModule } from '../shared/components/loading/loading.module';
// import { MenuModule } from '../shared/components/menu/menu.module';
//import { ShowIfLoggedDirective } from '../shared/directives/show-if-logged/show-if-logged.directive';
//import { ShowIfLoggedModule } from '../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
    ],
    exports: [
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        LoadingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }