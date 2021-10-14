// import React, { Component } from "react";
// import { SliderPicker } from 'react-native-slider-picker';

// export class Play extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { value: 25 };
//   }
  
//   render() {
//     return (
//       <View style={styles.container}>

//         <SliderPicker 
//           minLabel={'0'}
//           midLabel={'50'}
//           maxLabel={'100'}
//           maxValue={100}
//           callback={position => {
//             this.setState({ value: position });
//           }}
//           defaultValue={this.state.value}
//           labelFontColor={"#6c7682"}
//           labelFontWeight={'600'}
//           showFill={true}
//           fillColor={'red'}
//           labelFontWeight={'bold'}
//           showNumberScale={true}
//           showSeparatorScale={true}
//           buttonBackgroundColor={'#fff'}
//           buttonBorderColor={"#6c7682"}
//           buttonBorderWidth={1}
//           scaleNumberFontWeight={'300'}
//           buttonDimensionsPercentage={6}
//           heightPercentage={1}
//           widthPercentage={80}
//         />
        
//         <Text>state.value: {this.state.value}</Text>
//       </View>
//     );
//   }
// }