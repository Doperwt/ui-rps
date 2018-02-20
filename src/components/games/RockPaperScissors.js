import React, { PureComponent } from 'react'
import PaperPicture from '../../Images/Rock-paper-scissors_(paper).png'
import RockPicture from '../../Images/Rock-paper-scissors_(rock).png'
import ScissorsPicture from '../../Images/Rock-paper-scissors_(scissors).png'
import './RockPaperScissors.css'
import SubmitChoice from '../../actions/games/onChose'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class RockPaperScissors extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired
  }
  onChose(symbol,event){
    console.log(this.props.id)
    SubmitChoice(this.props.id,symbol)
    // console.log(SubmitChoice)
  }

  render(){
    return(
      <div>
        <p>test</p>
        <img src={ScissorsPicture} alt='scissors' onClick={this.onChose.bind(this,'scissors')} className='size'/>
        <img src={RockPicture} alt='rock'  onClick={this.onChose.bind(this,'rock')} className='size'/>
        <img src={PaperPicture} alt='paper'  onClick={this.onChose.bind(this,'paper')}  className='size'/>
      </div>
    )
  }
}

export default connect(null,{SubmitChoice})(RockPaperScissors)
