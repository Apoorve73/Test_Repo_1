import React from 'react'
import './radiobtn.css'

const RadioBtn = () => {
    return(
        <div className='radio-btn'>
            <label class="radio">
                <span class="radio__input">
                    <input type="radio" name="radio" />
                    <span class="radio__control"></span>
                </span>
                <span class="radio__label">Single Mode</span>
            </label>

            <label class="radio">
                <span class="radio__input">
                    <input type="radio" name="radio" />
                    <span class="radio__control"></span>
                </span>
                <span class="radio__label">Competition</span>
            </label>

            <label class="radio">
                <span class="radio__input">
                    <input type="radio" name="radio" />
                    <span class="radio__control"></span>
                </span>
                <span class="radio__label">Portfolio</span>
            </label>
        </div>
    )
}
export default RadioBtn