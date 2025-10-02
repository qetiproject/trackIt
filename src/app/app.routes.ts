import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Signals } from './signals/signals';
import { Todos } from './todos/todos';

export const routes: Routes = [
    {
        path: "dashboard", // address name
        component: Dashboard // which component we want to show
    },
    {
        path: '',
        component: Todos
    },
    {
        path: 'signals',
        component: Signals
    }
];
