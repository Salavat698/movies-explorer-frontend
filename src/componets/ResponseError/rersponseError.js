
function ResponseError(props) {
  
  return (
    <div className={`responseError ${props.responseOpen  ? 'responseError__active' : ''}`}>
        {props.responseError}
        <button className='responseError__close' onClick ={ props.onClose }></button>
    </div>
  )
}

export default ResponseError;