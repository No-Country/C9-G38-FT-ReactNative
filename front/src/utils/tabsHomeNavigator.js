import { Icons } from './icons';
import { Calendar, Feed, Profile, Search } from '../views';

export const tabsArr = [
  {
    route: 'Feed',
    label: 'Inicio',
    type: Icons.MaterialIcons,
    icon: 'home',
    component: Feed,
  },
  {
    route: 'Search',
    label: 'Busqueda',
    type: Icons.MaterialIcons,
    icon: 'search',
    component: Search,
  },
  // {
  //     route: 'Calendar',
  //     label: 'Calendario',
  //     type: Icons.FontAwesome5,
  //     icon: 'calendar',
  //     component: Calendar,
  // },
  {
    route: 'Profile',
    label: 'Perfil',
    type: Icons.MaterialIcons,
    icon: 'person',
    component: Profile,
  },
];
