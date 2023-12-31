import Nav from "../components/Nav"
import Main from "../components/Main"
import Featured from "../components/Featured"

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Nav />
      <Main />
      <Featured />
    </div>
  )
}

export default Home