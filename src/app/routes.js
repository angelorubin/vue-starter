import { routes as home } from './home'
import { routes as cronograma } from './cronograma'
import { routes as diagnostico } from './diagnostico'

export default [...cronograma, ...diagnostico, ...home]