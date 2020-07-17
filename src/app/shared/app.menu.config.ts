import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'customers', name: 'CUSTOMERS',icon: 'people', route: '/main/customers'},
  { id: 'customers-grid', name: 'CUSTOMERS-GRID',icon: 'people', route: '/main/customers-grid'},
  { id: 'employees', name: 'EMPLOYEES', icon: 'business_center', route: '/main/employees'},
  { id: 'employees-grid', name: 'EMPLOYEES-GRID', icon: 'business_center', route: '/main/employees-grid'},
  { id: 'branches', name: 'BRANCHES', icon: 'account_balance', route: '/main/branches' },
  { id: 'branches-grid', name: 'BRANCHES-GRID', icon: 'account_balance', route: '/main/branches-grid' },
  { id: 'accounts', name: 'ACCOUNTS', icon: 'credit_card', route: '/main/accounts' },
  { id: 'accounts-grid', name: 'ACCOUNTS-GRID', icon: 'credit_card', route: '/main/accounts-grid' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
