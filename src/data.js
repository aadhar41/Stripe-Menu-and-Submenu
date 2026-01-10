import {
  FaCreditCard,
  FaTerminal,
  FaLink,
  FaPlug,
  FaBook,
  FaLifeRing,
  FaFileInvoiceDollar,
  FaInfoCircle,
  FaUsers
} from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaTerminal />, url: '/products' },
      { label: 'connect', icon: <FaLink />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaPlug />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaLifeRing />, url: '/products' },
      { label: 'billing', icon: <FaFileInvoiceDollar />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaInfoCircle />, url: '/products' },
      { label: 'customers', icon: <FaUsers />, url: '/products' },
    ],
  },
];

export default sublinks;
