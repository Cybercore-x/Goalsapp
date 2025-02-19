import './main.css'
import Vinculo from './vinculo.js'
import { ReactComponent as NewSvg} from '../assets/images/nueva.svg'
import { ReactComponent as ListSvg} from '../assets/images/lista.svg'

function Main ({children}) {
    return (
        <div className='container'>
            <aside className='aside'>
                <Vinculo href='/list' texto='List of Goals'>
              <ListSvg className='icon' />
              </Vinculo> 
              <Vinculo href='/create' texto='New Goals'>
            <NewSvg className='icon' />
              </Vinculo>
            </aside>
            <main className='main'>
                {children}
            </main>
        </div>
    );
}

export default Main;