import ReactDOM from 'react-dom/client';
import AdvancedFeaturesDemo from './AdvancedFeaturesDemo';

function Application() {
	return <AdvancedFeaturesDemo />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Application />)