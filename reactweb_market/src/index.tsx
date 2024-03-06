import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/App';
import "bootstrap/dist/css/bootstrap.min.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <QueryClientProvider client = {queryClient}>
    <App />
    </QueryClientProvider>
   

);
