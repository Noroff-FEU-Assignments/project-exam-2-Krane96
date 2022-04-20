const WorksCard = (props) => {
    return (
      <>
        <div className='box'>
          <div className='img'>
            <img src={props.cover} alt='' />
          </div>
          <div className='details'>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
          </div>
        </div>
      </>
    )
  }
  
  export default WorksCard;