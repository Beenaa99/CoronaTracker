import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';


const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries]);

    
    return (
        <FormControl variant="filled" className = {styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} className={styles.native}>
        <option value = "" className={styles.option}> Global </option>
        {fetchedCountries.map((country, i) => <option key={i} value={country} className={styles.option}>{country}</option>)}
        </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;