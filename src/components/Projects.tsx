import { Link } from "react-router-dom"
import { assetImgList } from "../assets/projects/assetImgList"
import { projects } from "../assets/projects/projectData.json"

type ImgList = {
  [key: string]: string[]
}

export default function Projects() {
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

  const imgList: ImgList = assetImgList
  return (
    <div className="projects_container">
      {[...projects].reverse().map((item) => (
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
