const Preloader = (props) => {
  return (
    <div className={`preloader ${props.preloader  ? 'preloader__active' : ''}`}>
    {/* <div className= 'preloader preloader__active'> */}
      <div className='preloader__container'>
        <span className='preloader__round'></span>
      </div>
    </div>
  )
};

export default Preloader