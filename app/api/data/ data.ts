import {DataType } from "@/app/lib/types/types";

export const fetchData = async (): Promise<DataType[]> => {
    try {
     
        const response = await fetch('https://retoolapi.dev/rdy8zr/data');
        
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch data failed:', error);
        throw error;
    }
};