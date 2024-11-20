import SlidePlayer from './components/slide-player/slide-player';
import useSliderData from './hooks/sliderData';
import "./app.css";

function App() {
  const { data } = useSliderData();
  
  return (
    <div className="app">
      {!data && (
        <div>Loading...</div>
      )}
      {data && (
        <SlidePlayer dataSlider={data} />
      )}
    </div>
  );
}

export default App
