import {Link} from 'react-router-dom'
// material

//components
import Resource from '../resource/Resource'
//style
import './resourcelist.css'
import { CircularProgress} from "@mui/material"


const ResourceList = ({data, loader}) => {
    return(
        <>
                { loader ? <div className='loading'><CircularProgress /></div> : 
        <div className='item'>
         
            {data.map (product => {
                return (
                    <Link className='link' to={`/resource/${product.id}`} > 
                    <Resource  data={product} key={product.id} />
                    </Link>
                )
            })}
        </div>
}
        </>
    )
} 
export default ResourceList;