import CareScale from './CareScale'
import '../styles/PlantItem.css'


function handleClick(plantName) {
	alert(`${plantName}`)
}

function PlantItem({ cover, name, description, condition, price }) {
	return (
		<li className='lmj-plant-item'>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover'  onClick={() => handleClick(description)} src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='condition' scaleValue={condition} />
				{/* <CareScale careType='light' scaleValue={light} /> */}
			</div>
		</li>
	)
}

export default PlantItem