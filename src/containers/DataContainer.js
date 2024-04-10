import React, {useState, useEffect} from "react";
import DataComponent from "../components/DataComponent";
import { withLoader } from "../components/withLoader";

// This component has all the logic in it
const DataContainer = ({setLoading}) => {
    const [data, setData] = useState([]);
    console.log('data', data)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/')
          .then(response => response.json())
          .then(data => {
            setData(data)
            setLoading(false)
          })
          .catch(error => {
            console.error('Error Fetching', error)
            setLoading(false)
          })
    }, [setLoading])

    return (
        <DataComponent data={data} />
    )
}

const DataContainerWithloader = withLoader(DataContainer);

export default DataContainerWithloader
