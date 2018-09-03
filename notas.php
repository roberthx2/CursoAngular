
1. Instalar Angular CLI

    npm install -g @angular/cli

2. Vefiricar version de angular/cli

    ng --version

3. Crear proyecto angular

    ng new /path

4. Opciones al crear un proyecto

	ng new /path

		--routing --> Genera un modulo exclusivo para las rutas
		--prefix pre --> Componentes con prefijos
		--dry-run --> Debud
		 --style scss --> Tipos de estilos para el proyecto
		 --skip-install --> Controla las dependencias

5. Estructura de directorios

	- angular.json: Configuracion del proyecto
	- .editorconfig: Configuracion del editor

6. Instalar dependencias

	npm install

7. Preview de la app 

	ng serve

8. General build

	ng build --
	
9. Probar app con http-server  

	http-serve path

10. Realizar unit-test

	ng test

11. Test e2e

	ng e2e

12. Generar compoonente

	ng generate component login

13. Generar class

	ng generate class usuario

14. Generar modulo

	ng generate module 
	
15. Crear modulo y relacionarlo con otro

	ng generate module name --module other-module