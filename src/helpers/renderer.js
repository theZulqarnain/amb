import React from 'react';
import {renderToString} from 'react-dom/server';
import Main from '../client/components/Main';

export default () =>{
    const content = renderToString(<Main />)
    console.log('testing server')
    return `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
            <link rel="stylesheet" type="text/css" href="/styles.css" />
            <title>Book Ambulance - Stanplus</title>
        </head>

        <body>

            <div id="root">
                ${content}
            </div>
            
        <script  src="/bundle.js"></script>
        </body>
        </html>
    `;
}