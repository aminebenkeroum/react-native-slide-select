import React from 'react'
import { Image, Alert, TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


// StyleSheet
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'stretch',
    marginVertical: 10,
    opacity: 1
  },
  icon: {
    flex: 1,
  },
  imageContainer:{
     flex: 1,
     alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50
  },
  text: {
    flex: 1,
    width: 100,
    color:'#fff',
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 10
  }
})

export default class SlideSelect extends React.Component {
  
  constructor(props){
  	super(props)
  	this.state = { selected : 0, length: this.props.data.length, data: this.props.data }
  }

  componentDidMount() {
    
  }

  onNext() {
  	// Check if we are at the boundaries
  	if( (this.state.selected + 1) < this.state.length)
	  	this.setState({ 
	  		selected : this.state.selected + 1
	  	});
  }

  onBack() {
  	if(this.state.selected !== 0)
	  	this.setState({ 
	  		selected : this.state.selected - 1
	  	});
  }

  renderValue() {

  	let selectedValue = this.state.data[this.state.selected]
  	if(this.props.isImage)
  		return <View style={styles.imageContainer}>
  					<Image style={styles.image} source={{uri: selectedValue}} />
  				</View>
  	else
  		return <Text style={styles.text}>{ selectedValue }</Text>
  }

  render () {
    return (
      <View style={styles.container}>
       	<TouchableOpacity onPress={this.onBack.bind(this)}>
       		<Icon name='chevron-left' style={styles.icon} color={this.props.arrowsSize} color={this.props.arrowsColor} />
       	</TouchableOpacity>
        {this.renderValue()}
        <TouchableOpacity onPress={this.onNext.bind(this)}>
        	<Icon name='chevron-right' style={styles.icon} color={this.props.arrowsSize} color={this.props.arrowsColor} />
        </TouchableOpacity>
      </View>
    )
  }
}

//Typechecking
SlideSelect.propTypes = {
   data: React.PropTypes.array,
   arrowsSize: PropTypes.string,
   arrowsColor: PropTypes.string,
   isImage: PropTypes.boolean
}

// Default Props
SlideSelect.defaultProps = {
  isImage: false
};

