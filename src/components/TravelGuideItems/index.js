import './index.css'

const TravelGuideItems = props => {
  const {itemDetails} = props
  const {imageUrl, name, description} = itemDetails

  return (
    <li className="list-items">
      <img src={imageUrl} className="logo" alt={name} />
      <div>
        <h1 className="heading">{name}</h1>
        <p className="title"> {description}</p>
      </div>
    </li>
  )
}

export default TravelGuideItems
