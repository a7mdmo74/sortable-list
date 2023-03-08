import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DndContainer from './components/DndContainer';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center min-h-screen pt-16">
        <DndContainer />
      </div>
    </DndProvider>
  );
}

export default App;
