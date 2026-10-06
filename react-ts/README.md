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


