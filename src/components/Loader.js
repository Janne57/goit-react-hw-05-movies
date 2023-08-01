// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ColorRing } from 'react-loader-spinner';
import css from '..//components/Loader.module.css'

const Loader = () =>{
    return (
        <div className={css.spiner}>
          <p>LOADING...</p>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      )
}
export default Loader;