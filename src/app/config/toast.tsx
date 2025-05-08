import { Bounce, ToastContainer } from 'react-toastify';

export const Toast = () => {
  return (
    <ToastContainer
      position={'top-center'}
      autoClose={60000}
      transition={Bounce}
      hideProgressBar={true}
      closeOnClick={true}
    />
  )
}
