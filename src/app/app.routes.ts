import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Todos } from './todos/todos';

export const routes: Routes = [
    {
        path: "dashboard", // address name
        component: Dashboard // which component we want to show
    },
    {
        path: '',
        component: Todos
    }
];
