import Image from '../assets/icono.png'
import { ChangeEvent, useEffect, useState } from 'react'

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export default function ProfilePicture() {
  const [file, setFile] = useState<File | undefined>();
  const [fileDataURL, setFileDataURL] = useState<string | ArrayBuffer>();

  const changeHandler = (event: ChangeEvent<HTMLInputElement> | undefined) => {
    const file = event?.target?.files?.[0];
    if (!file!.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  }

  useEffect(() => {
    let fileReader: FileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = () => {
        const { result } = fileReader;
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);

    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);


  return (
    <label
      htmlFor="profilePicture"
      className='flex lg:flex-row sm:flex-col lg:text-lg  sm:text-lg lg:items-center hover:cursor-pointer lg:justify-normal sm:items-center'
    >
      <div className='flex items-center lg:w-2/3 gap-2'>
        <img src={fileDataURL ? fileDataURL.toString() : Image} alt="profile picture" width={60} className='rounded-full' />
        Elegí una foto de perfil:
      </div>
      <input
        type="file"
        id='profilePicture'
        name='profilePicture'
        className='w-px opacity-0 overflow-hidden absolute lg:left-[20%]' autoComplete='photo'
        accept='image/*'
        required
        onChange={changeHandler}
      />
    </label>
  )
}
