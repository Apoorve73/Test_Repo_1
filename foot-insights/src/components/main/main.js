import React, {Component} from 'react'
import SideBar from '../sidebar/sidebar'
import FootTraffic from '../foottraffic/foottraffic'
import RadioBtn from '../radiobtn/radiobtn'
import Map from '../map/new'
import './main.css'


class Main extends Component {
    render() {
    return(
        <div className='main'>
            <SideBar />        

            <div className='flex-column'>
                <div className='center'>
                    <div className='content'>
                        <p className='paragraph'>
                            Foot-insights provide you information about footfall numbers of all your stores, competitors , shopping patterns, demongraphics, etc. You could easily share these with your colleagues or partners.
                        </p>

                        <RadioBtn />

                        <div className='form'>
                            <p className='title'>Choose your store</p>

                            <div className='city'>
                                City<br />
                                <input className='city-input' type='text' placeholder='Bangalore' />
                            </div>

                            <div className='store'>
                                Store Name<br />
                                <input className='store-input' type='text' placeholder='Store 1' />
                            </div>

                            <div className='checkbox'>
                                <label class="checkbox">
                                    <span class="checkbox__input">
                                        <input type="checkbox" name="checkbox" />
                                        <span class="checkbox__control">
                                        
                                        </span>
                                    </span>
                                    <span class="radio__label competitors">Show me the competitors</span>
                                </label>
                            </div>

                            <div className='submit'>
                                <button className='submit'>SUBMIT</button>
                            </div>
                        </div>                        
                    </div>

                    <div className='map'>
                        <Map/>
                    </div>                    
                </div>
                
                <div className='bottom'>
                    <FootTraffic />
                </div>
            </div>            
        </div>
    )
}
}
export default Main