import { useEffect, useState } from 'react';
import { getInitialData } from '../helpers/helper';
import { MainModel } from '../zoomcare-api';

export const useFetchData = () => {
 
    const [data, setData] = useState<MainModel[]>([]);
    const [isLoading, setIsLoading] = useState( true );

    const getMainModel = async() => {
        const mainModel = await getInitialData();
        setData(mainModel);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getMainModel();
    }, []);

    return {
        data,
        isLoading
    }

}