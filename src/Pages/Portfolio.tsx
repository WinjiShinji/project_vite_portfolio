import Projects from "../components/Projects"
import { assetImgList } from "../assets/projects/assetImgList"
import { projects, challenges } from "../assets/projects/projectData.json"

export default function Portfolio() {
  return (
    <main className="portfolio_container">
      <p className="title">Projects</p>
      <Projects img={assetImgList} data={projects} />
      <p className="title">Challenges</p>
      <Projects img={assetImgList} data={challenges} />
    </main>
  )
}
