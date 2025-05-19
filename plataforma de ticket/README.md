
# Plataforma Tickets Angular

## Despliegue en GitHub Pages

1. Instala angular-cli-ghpages:

```
npm install -g angular-cli-ghpages
```

2. Construye el proyecto para producción con base href correcto:

```
ng build --prod --base-href /plataforma-tickets-angular/
```

3. Publica en GitHub Pages:

```
npx angular-cli-ghpages --dir=dist/plataforma-tickets
```

4. Configura GitHub Pages en el repositorio con la rama `gh-pages`.

5. Abre la app en:

```
https://TU-USUARIO.github.io/plataforma-tickets-angular/
```

---

## Usuarios para login

- admin / admin123
- user / user123
