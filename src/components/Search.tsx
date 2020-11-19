// core
import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

// actions
import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';

// ts
interface SearchProps {
  title: string;
}


const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  }

  return (
    <div className='search'>
      <h1 className='search__title'>{title}</h1>

      <form className='search__form' onSubmit={submitHandler}>
        <input
          type='text'
          className='search__input'
          placeholder='Введите название города'
          value={city}
          onChange={changeHandler}
        />

        <button className='search__button'>Найти</button>
      </form>
    </div>
  );
}

export default Search;