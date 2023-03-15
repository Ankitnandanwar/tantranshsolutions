import axios from 'axios';
import React,{useState} from 'react'

const DummyImg = () => {

    const [uploadImg, setUploadImg] = useState(null)

    const upload = async()=>{
        try {
            const formData = new FormData();
            formData.append("file", uploadImg)
            const res = await axios.post("http://localhost:6500/upload", formData)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleClick = () =>{
        upload()
    }


  return (
    <div>
        <div className="form-group m-3">
            <h5 className="text-capitalize">upload image</h5>
            <input type="file" name="Resume" required={true} onChange={(e) => setUploadImg(e.target.files[0])} className="form-control-file" id="exampleFormControlFile1"/>
        </div>
        <div>
            {/* <input type="submit" onClick={() => handleClick()}/> */}
            <button onClick={() => handleClick()}>Submit</button>
        </div>
    </div>
  )
}

export default DummyImg