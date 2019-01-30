import { createStackNavigator, createAppContainer } from "react-navigation"
import RootContainer from "./RootContainer"
import CameraContainer from "./CameraContainer"
import AddTitleAndDescriptionContainer from "./AddTitleAndDescriptionContainer"
import SuccessContainer from "./SuccessContainer"


export default createAppContainer(
  createStackNavigator({
    Root: { screen: RootContainer },
    CameraView: { screen: CameraContainer },
    AddTitleAndDescriptionView: { screen: AddTitleAndDescriptionContainer },
    SuccessView: { screen: SuccessContainer },
  }),
)
