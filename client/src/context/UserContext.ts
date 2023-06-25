import { createContext } from 'react';
import { User } from '../type';

const UserContext = createContext<any>(null);

export default UserContext;