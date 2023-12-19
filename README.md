
# Service Admin Panel

Service Admin Panel is an Angular application designed for managing various aspects of a service-based business, providing a centralized platform for effective administration.

## Project Overview

The Service Admin Panel allows administrators to:

- Authenticate users securely.
- Manage member details and memberships.
- Handle billing and payments efficiently.
- Track employee data and branch details effectively.

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Key Files](#key-files)
- [Environment Configuration](#environment-configuration)
- [Styling](#styling)
- [Significance](#significance)
- [Screenshots](#screenshots)

## Project Structure


## Overview

- **src:** Source code directory.
  - **app:** Main application directory.
    - **bar/sidebar:** Sidebar component for navigation.
    - **components:** Individual feature components.
  - **environments:** Environment configuration files.
  - **services:** Angular services.
  - **styles.css:** Global styles.
- **angular.json:** Angular project configuration.
- **karma.conf.js:** Karma configuration for unit testing.
- **package.json:** Project dependencies and scripts.
- **tsconfig.app.json:** TypeScript configuration for the app.
- **tsconfig.json:** TypeScript compiler configuration.
- **tsconfig.spec.json:** TypeScript configuration for testing.

## Technologies Used

- Angular 12
- Firebase for authentication and data storage
- Bootstrap for styling
- ApexCharts for charting

## Key Files

- **app-routing.module.ts:** Defines application routes.
- **app.module.ts:** Main module file for Angular application.
- **authentication/auth.service.ts:** Authentication service using Firebase.
- **environments/environment.ts:** Firebase configuration for development.
- **environments/environment.prod.ts:** Firebase configuration for production.
- **tsconfig.json:** TypeScript compiler configuration.
- **angular.json:** Angular project configuration.
- **styles.css:** Global styles.

## Environment Configuration

The Firebase configuration can be found in the `environment.ts` and `environment.prod.ts` files. Ensure to replace these configurations with your Firebase project credentials.

## Styling

Global styles are defined in the `styles.css` file, including a custom style for the "btn-month" class.

## Significance

Service Admin Panel serves as a comprehensive solution for businesses to streamline administrative tasks, enhance member management, and ensure efficient billing and payment processes. Its modular structure allows for easy expansion and customization based on specific business needs.

## Screenshots

Include screenshots or diagrams here to visually represent the application's UI or workflow.

![Authentication](/path/to/authentication-screenshot.png)
![Billing](/path/to/billing-screenshot.png)
...


