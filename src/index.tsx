import { ModalContextWrapper } from './components/Contexts';
import { createRoot } from 'react-dom/client'
import './index.css';
import { Project } from './components/Project';


const container: Element = document.querySelector('#root') as Element;
const root = createRoot(container);

root.render((
    <ModalContextWrapper>
        <Project />
    </ModalContextWrapper>
))
