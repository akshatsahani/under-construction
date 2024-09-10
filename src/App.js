import yourImage from './display_image.jpg'
function App() {
  return (
    <div className="App">
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img 
      src={yourImage} 
      alt="Under Construction" 
      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} 
    />
    </div>
    </div>
  );
}

export default App;
