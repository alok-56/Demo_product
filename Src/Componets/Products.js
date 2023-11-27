import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import HomeLoader from '../Loader/Loder';

const Products = () => {
  const [product, setProduct] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const fetchMoreData = useCallback(async () => {
    if (isLoading || !hasMoreData) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=${pageNumber}&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100`,
      );
      const newData = await response.json();

      if (newData.object && newData.object.length > 0) {
        setProduct(prevProducts => [...prevProducts, ...newData.object]);
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      } else {
        setHasMoreData(false);
      }
    } catch (error) {
      console.error('Error fetching more data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [pageNumber, isLoading, hasMoreData]);

  useEffect(() => {
    fetchMoreData();
  }, [fetchMoreData]);
  return (
    <View
      style={{
        width: '100%',
      }}>
      <View
        style={{
          width: '92%',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Text>{product.length}/86</Text>
            <Text style={{marginLeft: 6}}>Products</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', marginRight: 20}}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../Icons/filter.png')}></Image>
              <Text style={{marginLeft: 3}}>Sort</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../Icons/sort.png')}></Image>
              <Text style={{marginLeft: 3}}>Filter</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '98%',
          alignSelf: 'center',
          marginTop: 5,
          marginBottom: 200,
        }}>
        <FlatList
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={product}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          renderItem={({item, index}) => {
            return (
              <View style={styles.cardContainer}>
                <View
                  style={{
                    width: '100%',
                    height: 200,
                  }}>
                  <Image
                    style={{height: '100%', width: '100%'}}
                    source={{uri: `${item.mediaUrl}`}}></Image>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#000',
                    }}>
                    {item.name.slice(6)}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: ' rgb(36,33,36)',
                    }}>
                    {item.variants[0].sku}
                  </Text>

                  <>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#000',
                      }}>
                      {item.variants[0].variant}
                    </Text>
                    <Text style={{fontWeight: '600'}}>
                      ₹ {item.variants[0].sellingPrice}
                    </Text>
                  </>
                </View>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                  }}>
                  <Image
                    style={{height: 20, width: 20}}
                    source={require('../Icons/heart.png')}></Image>
                </TouchableOpacity>
                {index % 2 === 0 ? (
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: 155,
                      left: 12,
                      width: 80,
                      padding: 8,
                      backgroundColor: '#000',
                      borderRadius: 4,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16,
                          fontWeight: '400',
                        }}>
                        New
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
            );
          }}
          onEndReached={fetchMoreData}
          onEndReachedThreshold={0.1}
          ListFooterComponent={isLoading && <HomeLoader/>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    padding: 5,
    margin: 3,
    borderRadius: 8,
    borderColor: '#ddd',
    flex: 1,
    elevation: 1,
  },
});

export default Products;
