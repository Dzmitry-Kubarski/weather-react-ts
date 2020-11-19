// core
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { RootState } from './store';

// actions
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';

// components
import Search from './components/Search';
import Alert from './components/Alert';
import Weather from './components/Weather';

// icons
import MainBgSvg from './components/SVG/MainBgSvg';


const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className='app'>
      <div className='container'>
        <Search title='Введите название города и нажмите кнопку поиска' />

        {loading ? <h2 className='loading'>Loading...</h2> : weatherData ? <Weather data={weatherData} /> : <MainBgSvg />}

        {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
        {error && <Alert message={error} onClose={() => dispatch(setError())} />}
      </div>
    </div>
  );
}

export default App;
