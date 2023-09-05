import React from 'react'
import ReactBubblyEffectButton from "react-bubbly-effect-button";

const onClick = () => {
    console.log('Done.')
  }
  const BubblyButton = () => {
    return <ReactBubblyEffectButton
    text="Join Now"
    color='#fff'
    bgColor='#7C0C24'
    onClick={onClick}
  />
  }
  export default BubblyButton;
