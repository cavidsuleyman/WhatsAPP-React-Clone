import React, { useContext, useRef, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { IoClose, IoRefreshSharp } from "react-icons/io5";
import { FiCamera } from "react-icons/fi";



const OpenCamera = ({openCamere}) => {

    const [hasPhoto, setHasPhoto] = useState(false)

    const videoRef = useRef(null)
    const photoRef = useRef(null)

    let {closeCameraPage} = useContext(UserContext);

    let showOpenCamera = openCamere ? "openCameraMain showOpenCamera" : "openCameraMain";

    const getVideo = () => {
      navigator.mediaDevices
      .getUserMedia({ 
        video: {width: 1256 , height: 600}
      })
      .then(stream => {
           let video = videoRef.current;
           video.srcObject = stream;
           video.play();
      })
      .catch(err => {
        console.error(err);
      })
    }

    const takePhoto = () => {
      const width = 414;
      const height = width / (16 / 9);

      let video = videoRef.current;
      let photo = photoRef.current;

      photo.width = width;
      photo.height = height;

      let ctx = photo.getContext('2d');
      ctx.drawImage(video, 0 , 0 , width , height);
      setHasPhoto(true);
    }

    const closePhoto = () => {
      let photo = photoRef.current;
      let ctx = photo.getContext('2d');

      ctx.clearRect(0,0,photo.width,photo.height);

      setHasPhoto(false)
    }

    useEffect(() => {
      getVideo();
    }, [videoRef])

  return (
    <div className={showOpenCamera}>
        <div className='openCameraMain-greenSide'>
            <button onClick={closeCameraPage}><IoClose/></button>
            <span>Take photo</span>
        </div>
        <div className='openCameraMain-camera'>
          <div>
              <video ref={videoRef}></video>
          </div>  
          <div className={(hasPhoto ? "hasPhoto" : "photoOpacity")}>
              <canvas ref={photoRef}></canvas>
              <button className='closeBtn' onClick={closePhoto}>
                <IoRefreshSharp/>
              </button>
          </div>
            
            <button onClick={takePhoto} className='btn-camera'><FiCamera/></button>
        </div>
    </div>
  )
}

export default OpenCamera