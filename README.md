# Start1A

## Steps

INIZIO:

controllare la cartella in cui si è
creare un progetto --> ng new NomeProg
routing --> no
stylesheets --> scss

cancellare tutto il contenturo dentro app -> app.component.html 

creare nuovo component TodoList
clic destro dentro app e clicco "Ganerete a component" oppure nel terminale scrivo ng generate component NomeComp


ESERCIZIO:

- dentro al ts del mio component lavoro dentro a ngOnIntit(){ qui }

- leggo i dati con la fetch e stampo in console
  quando abbiammo una FETCH è essenziale avere l'interface per i dati
  ng generate interface NomeInterface
  le interface avranno un loro file e per essere utilizzate nel componente doveremmo importarle all'interno del ts del component --> import {NomeInterface} from "./path"

- posso anche visualizzarli nel template (*ngFor)

- inserire il nuovo component nell'app.component.html con il tag del selector <blabla-bla></blabla-bla>

- avviare il live server --> ng serve


# README

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
