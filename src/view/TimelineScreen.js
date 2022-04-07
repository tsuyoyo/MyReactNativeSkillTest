import React, {useEffect} from 'react';
import {View, Alert, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getHome} from '../api/home';
import {ItemTile} from './ItemTile';

export const TimelineScreen = () => {
  const isFetching = useSelector(state => state.home.isFetching);
  const items = useSelector(state => state.home.items);
  const error = useSelector(state => state.home.errorMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    const task = async () => {
      await dispatch(getHome());
    };
    task();
  }, [dispatch]);

  if (error) {
    Alert.alert(error);
  }

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({item}) => <ItemTile item={item} />}
        numColumns={2}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        refreshing={isFetching}
        onRefresh={() => dispatch(getHome())}
      />
    </View>
  );
};
