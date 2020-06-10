import { RootAuthenticated, RootNotAuthenticated } from './navigations';

const logged = false;
let Routes;

if (logged)
  Routes = RootAuthenticated;
else
  Routes = RootNotAuthenticated;

export default Routes;
