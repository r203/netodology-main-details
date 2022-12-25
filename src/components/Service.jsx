import Preloader from './Preloader/Preloader';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { serviceRequest } from '../redux/serviceSlice';
import { useParams } from "react-router-dom";
import Error from "./Error/Error";

function Service() {
  const { service, loading, error } = useSelector((state) => state.service);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(serviceRequest(id))
  }, [dispatch, id])

  if (loading) {
    return <Preloader />
  }

  if (error) {
    return (
      <Error>
        <button
          onClick={() => dispatch(serviceRequest(id))}
        >Повторить</button>
      </Error>
    )
  }

  return (
    <>
      <div>{service.name}</div>
      <div>{service.price}</div>
      <div>{service.content}</div>
    </>
  )
}

export default Service;