import React from 'react';
import {
  Text,
  View,
  ListView, 
  TouchableHighlight,
  Image,
  StyleSheet,
  Button
} from 'react-native';


class ListViewSample extends React.Component {

 constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([
        'John', 'Joel', 'James'
      ])
    };
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton(){
    this.setState({
      dataSource: this.ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    })
  }
  renderListItem(rowData){
   return(
      <TouchableHighlight onPress={()=>console.log("item touch")} underlayColor={'#EEEEEE'}>
          <View>
              <Image source={require('../icon.png')} style={styles.picture} />
              <View>
                  <Text>{rowData} </Text>
              </View>
          </View>
      </TouchableHighlight>
  )

  }
  render() {
    return (
      <View style={styles.container}>
        <Button
            onPress={this.onPressButton}
            title="Press Me"
            color="#841584"
        />
        <ListView
          dataSource={this.state.dataSource}
          style={styles.listcontainer}
          renderRow={(rowData) => <View>{this.renderListItem(rowData)}</View>}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderHeader={()=>{<View>Header</View>}}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'row',
        padding: 28
    },
    listcontainer: {
        backgroundColor: '#FFFFFF',
        marginTop: 60
    },
    separator: {
        height: 1,
        backgroundColor: '#AAAAAA',
    },
     picture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8
    },
});
export default ListViewSample;
