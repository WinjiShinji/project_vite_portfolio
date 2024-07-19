import { Link } from "react-router-dom"
import { projects } from "../assets/projects/projectData.json"
import { assetImgList } from "../assets/projects/assetImgList"

type ImgList = {
  [key: string]: string[]
}

export default function Portfolio() {
  const imgList: ImgList = assetImgList

  return (
    <main>
      {projects.map((item) => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <h3>{item.projectName}</h3>
          <Link to={item.url} target="_blank">
            View Site
          </Link>
          <Link to={item.git} target="_blank">
            View Code
          </Link>
          <Link to={item.img} target="_blank">
            View Images
          </Link>
          <p>{item.description}</p>
          <h4>Images</h4>
          <div className="img_container">
            {imgList[item.projectName].map((item) => (
              <div key={item}>
                <img src={item} height={400} width={200} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
