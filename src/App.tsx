import ConstructorPanel from './components/ConstructorPanel';
import ElementsPanel from './components/ElementsPanel';
import SwitchBar from './components/SwitchBar';

function App() {
  return (
    <div css={{ display: 'flex' }}>
      <div
        css={{
          // display: 'flex',
          // color: 'hotpink',
          width: '695px',
          height: '640px',
          background: '#FFFFFF',
          margin: '120px auto',
          padding: '38px 80px 86px 76px',
        }}
      >
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SwitchBar />
        </div>
        <div css={{ display: 'flex', marginTop: '30px', justifyContent: 'space-between' }}>
          <div>
            <ElementsPanel />
          </div>
          <div>
            <ConstructorPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
