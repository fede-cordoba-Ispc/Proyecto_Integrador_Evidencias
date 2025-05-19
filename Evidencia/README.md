# Primer Evidencia

## **Pasos para la ejecucion del proyecto**

1 Clonar este repositorio.

2 Ingresar a la carpeta del proyecto clonada.

3 Instalar las dependencias necesarias (npm install).

4 Ejecutar la aplicacion con npm run dev.

### Imagen del proyecto
La misma tiene aplicado el filtro para que muestre menor cantidad de productos y sea mas legible. Cuenta con la posibilidad de visualizarse hasta 50 productos.

![image](https://github.com/user-attachments/assets/bdd5aaf8-d289-4020-bc3e-2b18cbbab763)


# Segunda Evidencia

## Estadisticas Incorporadas

Las siguientes estadisticas fueron incorporadas a las ya requeridas en la tarea:
   * Total de Productos: corresponde a la cantidad de productos que cumplen con el criterio de busqueda definido. Se obtiene contando la cantidad de elementos que se encuentran dentro del arreglo de filtrado.
   * Precio Promedio: Es el valor promedio de los precios de los productos que fueron filtrados.

Estos valores se actualizan automaticamente ante cualquier cambio en la informacion filtrada. 

## Componentes del Código

Esta aplicacion se estructura por medio de los siguientes componentes:

* **Tarjeta** Este componente muestra el nombre del alumno y la materia.
* **Productlist** Es el componente que muestra en pantalla el titulo y le precio de los productos filtrados.
* **Statspanel** Este componente recibe por propiedades las estadisticas y las renderiza.

Modularizar el proyecto permite la reutilizacion de código, poder aislar y corregir inconvenientes, dar mantenimiento de una forma mas facil y ordenada.
