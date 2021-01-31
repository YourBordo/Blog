# Blog
## Table of Contents
- [Description](#description)
- [Structure](#structure)
- [Usage](#usage)
- [What is included](#what-is-included)

## Description
This app imitate blog for cat-lovers "KittyClysm".
User can: create an account (need to confirm by code, sent on email), login or enter without regisration (only draft articles seen), create and redact new articles, add tags and comments for them, search artecles by tag's name or article's title.


## Structure
This app is build on microservice architecture: backend[blog], fapi and frontend.
Frontend and fapi are binded with proxy which redirects all requests started with "/api/*" wildcard to fapi server.
Backend realize connection with database MySql for manage data.
Fapi responsible for data transfer and handling data, also fapi realize security of app.
Fronted is working as client side displayed in the browser.
Backend and fapi are java apps created with spring boot framework.
Frontend - Angular application.
Connection between services realize with http requests.
Users authentication is provided via JWT. 
There is interceptor, which add jwt to header, in frontend.

## Usage

* Spring Boot
* Spring Data
* Spring Security
* Maven
* JWT with Refresh token
* MySql
* Angular

## What is included
* Interceptor
* Proxy server
* Pagination 
* JWT with Refresh token
* Email sender and email token
