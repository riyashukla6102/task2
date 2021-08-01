import React ,{useState} from 'react';
import Filter from './Filter';


const Content=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        
        <div className="content">
        <div className="content-text">
        <input type="checkbox"></input>
        <Filter show={show} handleClose={handleClose} handleShow={handleShow}>
        </Filter>
        <button className="filter-b" onClick={handleShow}><i class="fa fa-filter"></i>Filter
        </button>
        
        <div style={{fontSize: 12 , color: '#5d5d5f'}}>Ongoing data will be completed in <strong style={{color:'black'}}>15 days</strong></div>
        </div>
        <div className="button-flex">
            <button className="download-b"><i class="fa fa-download"></i>Download Bulk Batch File</button>
            <button className="upload-b"><i class="fa fa-upload"></i>Upload New Batch File</button>
        </div>
        </div>
        
    )
}

export default Content;