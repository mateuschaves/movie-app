import { RootAuthenticated, RootNotAuthenticated } from './navigations';

const logged = true;
let Routes;

if (logged)
  Routes = RootAuthenticated;
else
  Routes = RootNotAuthenticated;

export default Routes;
