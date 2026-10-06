# 📘 Conceptos Generales de TypeScript

TypeScript es un lenguaje de programación fuertemente tipado que se construye sobre JavaScript, añadiendo herramientas estáticas para la detección de errores.

Para su uso en la web, el código escrito en TypeScript se **transpila** (se traduce) a código JavaScript estándar. Esto es un paso obligatorio para que cualquier navegador web pueda interpretar y ejecutar la aplicación.

---

## 📂 Archivos de Configuración

En proyectos modernos, la configuración de TypeScript se divide en múltiples archivos para separar las reglas del navegador de las reglas del servidor o herramientas de construcción.

* **`tsconfig.json`**
  Es el archivo principal que actúa como **orquestador**. Por lo general, no contiene reglas directas, sino que hace referencia (`references`) a los otros archivos de configuración dependiendo de la parte del proyecto que se esté compilando.

* **`tsconfig.app.json`**
  Contiene la configuración y las reglas de TypeScript en las que se maneja el código de la aplicación (el frontend que correrá en el navegador).

* **`tsconfig.node.json`**
  Contiene la configuración de reglas relacionadas estrictamente al entorno de **Node.js** (utilizado comúnmente para archivos de configuración como Vite, Webpack o scripts internos del proyecto).

---

## Conceptos del módulo Tipos básicos, interfaces, arrays y tuplas.

* **Inferencia de tipos:** TypeScript determina automáticamente el tipo de una variable según el valor que recibe.

* **Anotación de tipos:** Permite definir manualmente el tipo de dato que tendrá una variable.

* **`let`:** Se utiliza para variables cuyo valor puede cambiar durante la ejecución.

* **`const`:** Se utiliza para valores que no serán reasignados.

* **Tipos básicos:** TypeScript incluye tipos como `string`, `number` y `boolean` para representar texto, números y valores lógicos.

* **Arrays:** Estructuras que permiten almacenar varios valores, normalmente del mismo tipo.

* **Tuplas:** Estructuras con una cantidad y un orden fijo de elementos, donde cada posición puede tener un tipo diferente.

* **Interfaces:** Definen la estructura y las propiedades que debe cumplir un objeto.

* **`any`:** Permite utilizar cualquier tipo de dato y reduce la comprobación estática. Se recomienda usarlo solo en casos necesarios, como la migración de proyectos antiguos.

* **`unknown`:** Representa un tipo de dato desconocido. Es necesario comprobar su tipo antes de utilizarlo.

## Conceptos del módulo 2 Props y Estados

* **Tipado de props:** Permite definir los tipos, propiedades y restricciones de los datos que recibe un componente.

* **Propiedades opcionales:** Se indican cuando una propiedad puede estar ausente dentro de un objeto o de las props de un componente.

* **Valores predeterminados:** Son valores asignados cuando no se recibe una propiedad o un parámetro.

* **Inferencia de tipos:** TypeScript deduce automáticamente el tipo de una variable o estado a partir de su valor inicial.

* **Anotación explícita:** Permite declarar manualmente el tipo que puede tener una variable, estado, parámetro o valor de retorno.

* **`null` y `undefined`:** Representan la ausencia de un valor y pueden formar parte de un tipo cuando una información todavía no está disponible.

* **Alias de tipos (`type`):** Permiten nombrar y reutilizar estructuras, uniones o combinaciones de tipos.

* **Uniones de tipos:** Permiten que un valor pueda pertenecer a uno entre varios tipos posibles.

* **Tipos literales:** Limitan un valor a opciones específicas y conocidas.

* **Funciones tipadas:** Definen los tipos de los parámetros que recibe una función y del valor que devuelve.

* **Parámetros opcionales:** Indican que una función puede ejecutarse sin recibir determinados argumentos.

* **Interfaces:** Describen la estructura y las propiedades que debe cumplir un objeto.

* **Extensión de interfaces:** Permite crear una nueva interfaz a partir de otra, heredando sus propiedades y agregando nuevas.

* **Intersecciones (`&`):** Combinan varios tipos en uno solo, por lo que el valor debe cumplir todas las estructuras involucradas.



