import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const MenuItem = props => (
  <div>
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>{props.price}</div>
      <div><img src={props.image_url} /></div>
  </div>
)

MenuItem.defaultProps = {
  name: 'Cageburger',
  description: 'food',
  price: 9.99,
  image_url: 'https://64.media.tumblr.com/tumblr_marykovhtL1rhvxxto1_400.jpg' 
}

MenuItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image_url: PropTypes.string

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MenuItem name="Cageburger" />,
    document.body.appendChild(document.createElement('div')),
  )
})