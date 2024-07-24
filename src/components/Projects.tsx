import { Link } from "react-router-dom"

type ImgList = {
  [key: string]: string[]
}
type Props = {
  img: ImgList
  data: {
    name: string
    date: string
    projectName: string
    url: string
    git: string
    img: string
    description: string
  }[]
}

export default function Projects({ img, data }: Props) {
  const imgList: ImgList = img

  // Events //
  const handleImgShow = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { target } = e
    const divElement = (target as HTMLDivElement).nextElementSibling

    if (divElement) {
      divElement.classList.toggle("hide")
    } else {
      return
    }
  }

  return (
    <div className="projects_container">
      {[...data].reverse().map((item) => (
        <div className="project" key={item.name}>
          <h2>{item.name}</h2>
          <h3>{item.projectName}</h3>
          <div className="links">
            <Link to={item.url} target="_blank">
              View Site
            </Link>
            <Link to={item.git} target="_blank">
              View Code
            </Link>
            <Link to={item.img} target="_blank">
              View Images
            </Link>
          </div>
          <p>{item.description}</p>
          <button onClick={(e) => handleImgShow(e)}>Images</button>
          <div className="img_container hide">
            {imgList[item.projectName] !== undefined &&
              imgList[item.projectName].map((item) => (
                <div key={item}>
                  <img src={item} height={400} width={200} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
