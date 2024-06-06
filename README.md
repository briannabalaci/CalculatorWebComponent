# CalculatorWebComponent
Overview
The customizable web component is a modern calculator widget built using Angular. It features both light and dark themes and provides customization options for seamless integration into various projects.

Installation
To use the customizable web component, follow these steps:

Clone the Repository:

```bash
Copy code
git clone <repository_url>
```
Navigate to the Project Directory:

```bash
cd <project_directory>
```
Install Dependencies:

```bash
npm install
ng add @angular/material
npm install @angular/elements --save
```
Usage
To integrate the customizable web component into your project, follow these steps:

Build the component:
```bash
ng build
```

Import the Custom Element:
Copy the 3 resulted js and the scss files from the dist directory after build and put them in the where you can find them to add the dependencies in the html:
```html
  <link rel="stylesheet" href="styles.css">
  <script src="./main.js"></script>
  <script src="./polyfills.js"></script>
  <script src="./runtime.js"></script>
```
Include the Custom Element in HTML:

```html
<calculator-widget theme="light"></calculator-widget>
```
Customization
The customizable web component supports two themes: light and dark. You can customize the appearance by specifying the theme attribute.

Light Theme:

```html
<calculator-widget theme="light"></calculator-widget>
```
Dark Theme:

```html
<calculator-widget theme="dark"></calculator-widget>
```
Example
Here's an example of how to use the customizable web component in an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="styles.css">
  <script src="./main.js"></script>
  <script src="./polyfills.js"></script>
  <script src="./runtime.js"></script>
</head>
<body>
<calculator-widget theme="dark"></calculator-widget>
</body>
</html>
```
