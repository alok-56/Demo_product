import React from 'react';
import {View, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const width = Dimensions.get('window').width;
const HomeLoader = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={{flexDirection:"row", justifyContent: 'space-between'}}>
        <View>
          <View
            style={{
              width: width / 2.2,
              flexDirection: 'row',
              alignSelf: 'center',
              height: 200,
            }}
          />
          <View style={{marginLeft: 10}}>
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 3, height: 20,marginTop:5}} />
            <View style={{width: width / 3.5, height: 20,marginTop:5}} />
          </View>
        </View>
        <View>
          <View
            style={{
              width: width / 2.2,
              flexDirection: 'row',
              alignSelf: 'center',
              height: 200,
            }}
          />
          <View style={{marginLeft: 10}}>
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 3, height: 20,marginTop:5}} />
            <View style={{width: width / 3.5, height: 20,marginTop:5}} />
          </View>
        </View>
      </View>
      <View style={{flexDirection:"row", justifyContent: 'space-between',marginTop:10}}>
        <View>
          <View
            style={{
              width: width / 2.2,
              flexDirection: 'row',
              alignSelf: 'center',
              height: 200,
            }}
          />
          <View style={{marginLeft: 10}}>
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 3, height: 20,marginTop:5}} />
            <View style={{width: width / 3.5, height: 20,marginTop:5}} />
          </View>
        </View>
        <View>
          <View
            style={{
              width: width / 2.2,
              flexDirection: 'row',
              alignSelf: 'center',
              height: 200,
            }}
          />
          <View style={{marginLeft: 10}}>
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 3, height: 20,marginTop:5}} />
            <View style={{width: width / 3.5, height: 20,marginTop:5}} />
          </View>
        </View>
      </View>
      <View style={{flexDirection:"row", justifyContent: 'space-between',marginTop:10}}>
        <View>
          <View
            style={{
              width: width / 2.2,
              flexDirection: 'row',
              alignSelf: 'center',
              height: 200,
            }}
          />
          <View style={{marginLeft: 10}}>
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 3, height: 20,marginTop:5}} />
            <View style={{width: width / 3.5, height: 20,marginTop:5}} />
          </View>
        </View>
        <View>
          <View
            style={{
              width: width / 2.2,
              flexDirection: 'row',
              alignSelf: 'center',
              height: 200,
            }}
          />
          <View style={{marginLeft: 10}}>
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 2.2, height: 20,marginTop:5}} />
            <View style={{width: width / 3, height: 20,marginTop:5}} />
            <View style={{width: width / 3.5, height: 20,marginTop:5}} />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default HomeLoader;
