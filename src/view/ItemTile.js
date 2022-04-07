import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  likeInfoContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  likeInfo: {
    flex: 1,
  },
});

const LikeInfo = ({likeNum}) => {
  return (
    <View style={styles.likeInfoContainer}>
      <SvgUri
        width="24"
        height="24"
        style={styles.likeIcon}
        source={require('../asset/favorite_border_black_24dp.svg')}
      />
      <Text>{likeNum}</Text>
    </View>
  );
};

export const ItemTile = ({item}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (Platform.OS === 'android') {
          ToastAndroid.show(`${item.name} is tapped`, ToastAndroid.SHORT);
        } else {
          Alert.alert(`${item.name} is tapped`);
        }
      }}>
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{uri: item.photo}} />
        <View style={styles.infoContainer}>
          <LikeInfo likeNum={item.num_likes} style={styles.likeInfo} />
          <Text>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
