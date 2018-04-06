import { DetalhesComponent } from './detalhes/detalhes.component';
import { PersonagensComponent } from './personagens/personagem.component';

import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const rotas: Routes = [
    { path: 'personagens', component: PersonagensComponent },
    { path: 'personagem/:id', component: DetalhesComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rotas);