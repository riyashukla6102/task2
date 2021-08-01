import React from 'react';
import { RadialBar,RadialBarChart,Tooltip } from 'recharts';
const data = [
    {
      "name": "18-24",
      "uv": 20.47,
      "pv": 2400,
      "fill": "#3ec2ef"
    },
    {
      "name": "25-29",
      "uv": 24.69,
      "pv": 4567,
      "fill": "#f4ba8b"
    }
  ]
const Cards=()=>{
    return(
        <div classname="card-head">
            <div className="card-head1">
                <div className="card-body">
                    <div className="card-checkbox">
                            <input type="checkbox"></input>
                    </div>
                    <div className="card-text">
                            <div className="card-subtext">Batch No.4</div>
                            <div className="card-subtext1">
                                <div >Ref - May_Batch_File</div>
                                <div>29th May, 2021</div>
                            </div>
                    </div>
                </div>
                
                <div className="card-subtext1">
                    <div>Product/Portfolio</div>
                    
                    <select className="button-content" >
                    <option value="" disabled selected hidden>ALL</option>
                    </select>
                    
                        <div className="card-subtext1">
                            <table className='card-table'>
                                <th></th>
                                <th>Calls</th>
                                <th>PTP</th>
                                <tr style={{backgroundColor:'#f5f5f5'}}>
                                    <td>10,000 Accounts</td>
                                    <td style={{color:'#3e49e3'}}>30%</td>
                                    <td style={{color:'#3e49e3'}}>77%</td>
                                </tr>
                                <tr >
                                    <td>10.5 Cr. Value</td>
                                    <td style={{color:'#3e49e3'}}>80%</td>
                                    <td style={{color:'#3e49e3'}}>80%</td>
                                </tr>
                            </table>
                        </div>
                </div>

                <div className="card-pie">
                    <RadialBarChart 
                    width={250} 
                    height={250} 
                    innerRadius="70%" 
                    outerRadius="80%" 
                    data={data} 
                    startAngle={360} 
                    endAngle={0}
                    >
                    <RadialBar minAngle={15} background clockWise={true} dataKey='uv' />
                    <Tooltip />
                    </RadialBarChart>
                </div>

                <div className="card-subtext2">
                    <div className="card-subtext1">Action</div>
                    <select className="button-content" >
                    <option value="" disabled selected hidden>Select</option>
                    <option>Download Original Data</option>
                    <option>Download Report</option>
                    </select>
                    <div style={{fontSize:9}}>You can download row one by one.</div>
                </div>    
            </div>

            <div className="card-head1">
                <div className="card-body">
                    <div className="card-checkbox">
                            <div><input type="checkbox"></input></div>
                    </div>
                    <div className="card-text">
                            <div className="card-subtext">Batch No.3</div>
                            <div className="card-subtext1">
                                <div >Ref - May_Batch_File_New</div>
                                <div>27th May, 2021</div>
                            </div>
                    </div>
                </div>
                
                <div className="card-subtext1">
                    <div>Product/Portfolio</div>
                    
                    <div>CAR</div>
                    <select className="button-content" >
                    <option value="" disabled selected hidden>CAR</option>
                    </select>
                    <div className="card-subtext1">
                            <table className='card-table'>
                                <th></th>
                                <th>Calls</th>
                                <th>PTP</th>
                                <tr style={{backgroundColor:'#f5f5f5'}}>
                                    <td>12,000 Accounts</td>
                                    <td style={{color:'#3e49e3'}}>17%</td>
                                    <td style={{color:'#3e49e3'}}>22%</td>
                                </tr>
                                <tr>
                                    <td>12.3 Cr. Value</td>
                                    <td style={{color:'#3e49e3'}}>21%</td>
                                    <td style={{color:'#3e49e3'}}>45%</td>
                                </tr>
                            </table>
                        </div>
                </div>

                <div className="card-pie">
                <RadialBarChart 
                    width={250} 
                    height={250} 
                    innerRadius="70%" 
                    outerRadius="80%" 
                    data={data} 
                    startAngle={360} 
                    endAngle={0}
                    >
                    <RadialBar minAngle={15}  background clockWise={true} dataKey='uv' />
                    <Tooltip />
                    </RadialBarChart>
                </div>

                <div className="card-subtext2">
                    <div className="card-subtext1">Action</div>
                    <select className="button-content" >
                    <option value="" disabled selected hidden>Select</option>
                    <option>Download Original Data</option>
                    <option>Download Report</option>
                    
                    </select>
                </div>   
            </div>
        </div>
                
            
                
        
        
    )
}
export default Cards;