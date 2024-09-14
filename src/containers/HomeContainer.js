import { connect } from "react-redux";
import Home from '../components/Home'

const mapStateToProps = (state) => {
  return {
    hello: state.hello, 
    poop: state.poop,
    user: state.user, 
    cars: state.cars
  }
}

export default connect(mapStateToProps)(Home)