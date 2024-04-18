import ImageShow from '/ImageShow'

function imageList({ Images }){
    const renderImage = images.map ((image) => {
        return <ImageShow key={image.id} image={image}/>
    }    
    )
    return(
    <div>
        {renderImage}
    </div>
    )
}

export default ImageList