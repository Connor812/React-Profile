import React, { useState, useEffect } from 'react'
import { Blurhash } from 'react-blurhash';

function ImageComponent({ id, className, alt, loading, src, width, height, hash }) {

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image()
        console.log(img)
        img.onload = () => {
            console.log("works")
            setImageLoaded(true)
        }
        img.src = src
    }, [src])

    return (
        <>
            <div className={className} style={{ display: imageLoaded ? 'none' : 'inline' }}>
                <Blurhash
                    hash={hash}
                    width={width}
                    height={height}
                    punch={1}
                />
            </div>
                <img
                    src={src}
                    className={className}
                    alt={alt}
                    style={{ display: !imageLoaded ? 'none' : 'inline' }}
                    loading={loading}
                    id={id}
                    width={width}
                    height={height}
                />
        </>
    )
}

export default ImageComponent