# Tienda Online API

API REST desarrollada con **NestJS**, **TypeORM** y **PostgreSQL** para gestionar una tienda online.

# Autor

Carlos Alberto Sanchez Escobar

## Funcionalidades

El sistema permite administrar:

- Categorías
- Productos
- Clientes
- Órdenes
- Relación Orden-Producto

Incluye operaciones CRUD completas:

- Crear
- Listar
- Buscar por ID
- Actualizar
- Eliminar

Además cuenta con documentación interactiva usando **Swagger/Scalar**.

---

# Tecnologías utilizadas

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- Docker
- TypeORM
- Swagger

---

# Requisitos previos

Antes de ejecutar el proyecto, instalar:

## 1. Node.js

Verificar instalación:

```bash
node -v
npm -v
```

---

## 2. Docker Desktop

Verificar instalación:

```bash
docker --version
docker ps
```

---

## 3. Git

Verificar instalación:

```bash
git --version
```

```

Entrar al proyecto:

```bash
cd tienda_online
```

---

# Instalar dependencias

```bash
npm install
```

---

# Levantar PostgreSQL con Docker

Ejecutar:

```bash
docker run --name tienda_postgres \
-e POSTGRES_PASSWORD=postgres \
-e POSTGRES_DB=tienda_online \
-p 5432:5432 \
-d postgres
```

Verificar que el contenedor esté corriendo:

```bash
docker ps
```

---

# Ejecutar proyecto

Iniciar en modo desarrollo:

```bash
npm run start:dev
```

Servidor disponible en:

```bash
http://localhost:3000
```

---

# Documentación API (Swagger / Scalar)

Abrir en navegador:

```bash
http://localhost:3000/api
```

Aquí se pueden probar todos los endpoints de manera interactiva.

---

# Endpoints disponibles

## Categorías

- POST /categorias
- GET /categorias
- GET /categorias/:id
- PATCH /categorias/:id
- DELETE /categorias/:id

---

## Productos

- POST /productos
- GET /productos
- GET /productos/:id
- PATCH /productos/:id
- DELETE /productos/:id

---

## Clientes

- POST /clientes
- GET /clientes
- GET /clientes/:id
- PATCH /clientes/:id
- DELETE /clientes/:id

---

## Órdenes

- POST /ordenes
- GET /ordenes
- GET /ordenes/:id
- PATCH /ordenes/:id
- DELETE /ordenes/:id

---

## Orden Producto

- POST /orden-producto
- GET /orden-producto
- GET /orden-producto/:id
- PATCH /orden-producto/:id
- DELETE /orden-producto/:id

---

# Ejemplos JSON

## Crear categoría

```json
{
  "nombre": "Electrónica"
}
```

---

## Crear producto

```json
{
  "nombre": "Laptop HP",
  "precio": 3500,
  "stock": 10,
  "categoriaId": 1
}
```

---

## Crear cliente

```json
{
  "nombres": "Carlos",
  "paterno": "Escobar",
  "materno": "Lopez",
  "email": "carlos@gmail.com"
}
```

---

## Crear orden

```json
{
  "estado": "pendiente",
  "clienteId": 1
}
```

---

## Crear orden-producto

```json
{
  "cantidad": 2,
  "precio_unitario": 3500,
  "ordenId": 1,
  "productoId": 1
}
```

---

# Autor

Carlos Alberto Sanchez Escobar