import "./Map.css"

const Map=()=>{
  return(
  <>
    <address className="location">
      <b >Eiffel Tower </b>
         </address>
     <div className="responsive-map"> 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916261109497!2d2.2919063755592712!3d48.85837007133211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1747546351588!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
  </>
  )
}

export default Map;