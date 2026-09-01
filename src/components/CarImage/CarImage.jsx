import { useEffect, useRef, useState } from 'react'
import { getCarImage } from '../../services/imagesApi'
import './CarImage.css'

function CarImage({ make, model }) {
  const containerRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShouldLoad(true),
      { rootMargin: '200px' },
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldLoad) return
    let active = true
    getCarImage(make, model).then((result) => active && setImage(result)).catch(() => {})
    return () => { active = false }
  }, [make, model, shouldLoad])

  return (
    <div ref={containerRef} className="car-image">
      {image ? (
        <>
          <img src={image.url} alt={`${make} ${model}`} loading="lazy" />
          <a href={image.sourceUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>{image.license} · Wikimedia Commons</a>
        </>
      ) : <span>Foto no disponible</span>}
    </div>
  )
}

export default CarImage
