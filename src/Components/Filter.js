import React from 'react';
import styles from './Filter.module.css';
import {Form , Button, Col , Modal, Container , Image ,Row} from 'react-bootstrap';

const Filter = (props)=> {
   

    return(
    
            
            <Modal show={props.show} onHide={props.handleClose}>
             <Modal.Header className={styles.main}>
             <Modal.Title style={{fontSize:18 , fontWeight:700}} >Filter</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.bodymain}>
                <div className={styles.body}>
                    <input type="text" placeholder="Search by any keywords"></input>
                    <div className={styles.search}>
                        <label htmlFor='batch-no'>Search By Batch Number</label>
                        <input type="text"></input>
                    </div>
                    <div className={styles.content}>
                        <div>
                        Search by Date
                        </div>
                        <div className={styles.subcontent}>
                            <input type="radio"  id="datebetween" name="date"></input>
                            <label htmlFor='datebetween'>Date Between</label>
                            <div>
                            <input type="date" placeholder="From" style={{marginLeft:'40px'}}></input>

                            <input type="date" placeholder="To" style={{marginLeft:'40px'}}></input>
                            </div>
                        </div>
                        <div className={styles.subcontent}>
                        <input type="radio" id="specificdate" name='date' ></input>
                            <label htmlFor='specificdate'>Specific Date</label>
                            <input type="date" style={{marginLeft:'60px'}} placeholder="Select" ></input>
                        </div>
                    </div>
                </div>
            
            </Modal.Body>
            <Modal.Footer>
    <Button style={{color:'black',backgroundColor:'#f0f0f0', border:0 }} onClick={props.handleClose}>Close</Button>
    <Button style={{backgroundColor:'#fce201' , color:'black' , border:0}}>Apply</Button>
  </Modal.Footer>
        </Modal>
                                            

    )}

export default Filter;