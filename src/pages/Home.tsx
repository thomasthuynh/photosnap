import Nav from "../components/Nav"
import Main from "../components/Main"
import Latest from "../components/Latest"
import Benefits from "../components/Benefits"

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Nav />
      <Main />
      <Latest />
      <Benefits />
    </div>
  )
}

export default Home