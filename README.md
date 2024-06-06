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
Copy code
cd <project_directory>
```
Install Dependencies:

```bash
Copy code
npm install
```
Usage
To integrate the customizable web component into your project, follow these steps:

Import the Custom Element:

```html
Copy code
<script src="path/to/dist/main.js"></script>
```
Include the Custom Element in HTML:

```html
Copy code
<calculator-widget theme="light"></calculator-widget>
```
Customization
The customizable web component supports two themes: light and dark. You can customize the appearance by specifying the theme attribute.

Light Theme:

```html
Copy code
<calculator-widget theme="light"></calculator-widget>
```
Dark Theme:

```html
Copy code
<calculator-widget theme="dark"></calculator-widget>
```
Example
Here's an example of how to use the customizable web component in an HTML file:

```html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator Widget</title>
  <script src="path/to/dist/main.js"></script>
</head>
<body>
  <!-- Light Theme -->
  <calculator-widget theme="light"></calculator-widget>

  <!-- Dark Theme -->
  <calculator-widget theme="dark"></calculator-widget>
</body>
</html>
```
