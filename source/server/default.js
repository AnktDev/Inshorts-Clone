
import { data } from './constants/data.js';

import News from './model/newsSchema.js'

const DefaultData =  async () => {
    try {
        
        await News.insertMany(data);
        console.log('Data imported successfully');
    } catch (error) {
       console.log('Error', error); 
    }
}

export default DefaultData;