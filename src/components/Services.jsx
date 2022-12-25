import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { servicesRequest } from '../redux/servicesSlice'
import Error from "./Error/Error";
import Preloader from './Preloader/Preloader';


function Services() {
  const { services, loading, error } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(servicesRequest())
  }, [dispatch])

  if (loading) {
    return <Preloader />
  }

  if (error) {
    return (
      <>
        <Error>
          <button
            onClick={() => dispatch(servicesRequest())}
          >Повторить</button>
        </Error>
      </>
    )
  }

  return (
    <ul>
      {services.map(service => {
        return (
          <li key={service.id}>
            <Link to={`/${service.id}/details`}>{service.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Services;