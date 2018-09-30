import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Button,
  Picker
} from 'react-native';
import { connect } from 'react-redux';
const { Item } = Picker;
// Add Actions - replace 'Your' with whatever your reducer is called :)
import YelpActions from '../Redux/YelpRedux';

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      cuisine: '',
      distance: ''
    };

    this.findFood = this.findFood.bind(this);
  }

  findFood() {
    const { yelpRequest } = this.props;
    yelpRequest('location="PHX');
  }

  render() {
    const { cuisine, distance } = this.state;
    console.log('the render props', this.props.yelp);
    return (
      <ScrollView style={styles.homeContainer}>
        <KeyboardAvoidingView behavior="position">
          <Text>Diner Decider</Text>
          <Picker
            style={styles.cuisinePicker}
            selectedValue={cuisine}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ cuisine: itemValue })
            }
          >
            <Item label="Select Cuisine" value="" />
            <Item label="American" value="american" />
            <Item label="Cajun" value="Cajun" />
            <Item label="Caribbean" value="Caribbean" />
            <Item label="Chinese" value="Chinese" />
            <Item label="French" value="French" />
            <Item label="German" value="German" />
            <Item label="Greek" value="Greek" />
            <Item label="Indian" value="Indian" />
            <Item label="Italian" value="Italian" />
            <Item label="Japanese" value="Japanese" />
            <Item label="Korean" value="Korean" />
            <Item label="Mediterranean" value="Mediterranean" />
            <Item label="Mexican" value="Mexican" />
            <Item label="Soul" value="Soul" />
            <Item label="Thai" value="Thai" />
            <Item label="Vegetarian" value="Vegetarian" />
            <Item label="Vietnamese" value="Vietnamese" />
          </Picker>

          <Picker
            selectedValue={distance}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ distance: itemValue })
            }
          >
            <Item label="Select Distance" value="" />
            <Item label="1 Mile" value="1610" />
            <Item label="5 Miles" value="8050" />
            <Item label="10 Miles" value="16095" />
            <Item label="25 Miles" value="40235" />
          </Picker>
          <Button title="Find Food!" onPress={this.findFood} />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ yelp }) => {
  return { yelp };
};

const mapDispatchToProps = dispatch => {
  return {
    yelpRequest: params => dispatch(YelpActions.yelpRequest(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
