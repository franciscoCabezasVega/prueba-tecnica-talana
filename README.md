# PRUEBA-TECNICA-TALANA
 
This project aims to show the use of the cypress tool, as a test automation tool where you can easily run the tests corresponding to the system with the various use cases required.

## Installation

- Install auth-api-tutorial-cypress with npm (you can install nvm and configure npm version 8.15.0).

### Optional installation

- You can optionally install lockgit from: https://github.com/jswidler/lockgit

## Environment Variables

To run this project, you will need to add the cypress.env.json file to the project or open it with:

```bash
    lockgit set-key G5H52ENNMLZ4HCTRFSIC2B2WTTHD2X2LN5JRPMCMLYZK46RGHQ3Q
```

```bash
    lockgit open
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/franciscoCabezasVega/prueba-tecnica-talana.git
```

Go to the project directory

```bash
  cd prueba-tecnica-talana/
```

Install dependencies

```bash
  npm install
```

## Running Tests

To run tests, run the following command

```bash
  npx cypress run
```

To run tests with GUI, run the following command

```bash
  npx cypress open
```

## Appendix

With Cypress we can easily run several E2E tests quickly and make validations with the elements found, in this way we can quickly fill out forms and validations that will be seen by the end user.

The faker library is also used so that the data generated is always random data with relevant information that allows to have a database with real data.

## Tech Stack

**Security:** lockgit

**Server:** Node

**Automation Test:** Cypress, faker

## Criterios de aceptación

1. Añadir productos al carrito con un usuario registrado

- **Dado que** un usuario previamente registrado en el sistema inicia sesión 
- **Y** desea añadir sus productos al carrito de compras
- **Cuando** el usuario haga clic en la categoría deseada
- **Y** haga clic sobre el producto
- **Y** haga clic sobre el botón `"Add to cart"`
- **Entonces** se debe añadir el producto al carro de compra 
- **Y** debe aumentar el número de productos en el carrito

2. Realizar el pago de los productos solicitados diligenciando todos los campos

- **Dado que** un usuario previamente registrado en el sistema inicia sesión 
- **Y** ya ha añadido sus productos al carrito de compras
- **Cuando** el usuario haga clic sobre el botón `"Place Order"`
- **Y** el sistema despliegue el formulario con los campos requeridos para realizar el pago 
- **Y** al finalizar de diligenciar los campos requeridos el usuario haga clic sobre el botón `"Purchase"` 
- **Entonces** el sistema mostrará una nueva ventana con la información del pago realizado.

3. Realizar el pago de los productos solicitados diligenciando solo los campos requeridos

- **Dado que** un usuario previamente registrado en el sistema inicia sesión 
- **Y** ya ha añadido sus productos al carrito de compras
- **Cuando** el usuario haga clic sobre el botón `"Place Order"`
- **Y** el sistema despliegue el formulario con los campos requeridos para realizar el pago 
- **Y** al finalizar de diligenciar solo los campos obligatorios el usuario haga clic sobre el botón `"Purchase"` 
- **Entonces** el sistema mostrará una nueva ventana con la información del pago realizado.

4. Realizar el pago de los productos solicitados sin diligenciar ningún campo obligatorio

- **Dado que** un usuario previamente registrado en el sistema inicia sesión 
- **Y** ya ha añadido sus productos al carrito de compras
- **Cuando** el usuario haga clic sobre el botón `"Place Order"`
- **Y** el sistema despliegue el formulario con los campos requeridos para realizar el pago 
- **Y** al finalizar de diligenciar solo los campos opcionales el usuario haga clic sobre el botón `"Purchase"` 
- **Entonces** el sistema mostrará una alerta para solicitar que diligencie los campos obligatorios.

5. Añadir productos al carrito con un usuario no registrado

- **Dado que** un usuario inicia sesión en el sistema 
- **Y** desea añadir sus productos al carrito de compras
- **Cuando** el usuario haga clic en la categoría deseada
- **Y** haga clic sobre el producto
- **Y** haga clic sobre el botón `"Add to cart"`
- **Entonces** el sistema debe pedirle al usuario que inicie sesión o se registre en el sistema para continuar con la operación.