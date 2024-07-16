import { useState } from "react";

function ImgPreview() {
    const [previewSource, setPreviewSource] = useState(null);

    function handleInput(e) {
        const file = e.target.files[0];
        console.log(file);
        previewFile(file);
    }

    function previewFile(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => { //It gets triggered when the reading operation is successfully completed.
            setPreviewSource(reader.result);
        };
    }

    return (
        <>
            <form action="" method="post">
                <input type="file" onChange={handleInput} />
            </form>
            {previewSource && <img src={previewSource} alt="Preview" style={{width:'300px',aspectRatio:"4/3",objectFit:"contain" ,display:"block",margin:"30vh auto"}}/>}
        </>
    );
}

export default ImgPreview;
