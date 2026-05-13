ejemplo de crear POST
categoria
{
  "nombre": "Electrónica"
}
Producto
{
  "nombre": "Laptop HP",
  "precio": 3500,
  "stock": 10,
  "categoriaId": 1
}
Clientes
{
  "nombres": "Carlos",
  "paterno": "Escobar",
  "materno": "Lopez",
  "email": "cassrlos@gmail.com"
}
Ordenes
{
  "estado": "pendiente",
  "clienteId": 6
}
Orden productos
{
  "cantidad": 2,
  "precio_unitario": 3500,
  "ordenId": 5,
  "productoId": 3
}



# Tienda Online API

API REST desarrollada con NestJS, TypeORM y PostgreSQL.

## Tecnologías usadas

- NestJS
- TypeScript
- TypeORM
- PostgreSQL
- Docker
- Swagger

---

## Requisitos

Antes de ejecutar instalar:

- Node.js
- npm
- Docker
- Git

## Levantar PostgreSQL con Docker

```bash
docker start tienda_postgres
```

Si no existe:

```bash
docker run --name tienda_postgres \
-e POSTGRES_PASSWORD=postgres \
-e POSTGRES_DB=tienda_online \
-p 5432:5432 \
-d postgres
```

## Ejecutar proyecto

```bash
npm run start:dev
```

Servidor:

```bash
http://localhost:3000
```

Swagger:

```bash
http://localhost:3000/docs
```

## Módulos implementados

- Categorías
- Productos
- Clientes
- Órdenes
- OrdenProducto



## Autor

Carlos  Sanchez Escobar